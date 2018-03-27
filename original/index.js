var currentImage;

$('#prevButton').click(prevImage);
$('#nextButton').click(nextImage);
var imageContainer = $('#imageContainer');



var img1 = addImage('http://img.avatv.fi/mn_kuvat/mtv3/helmi/minisaitit/kapalakerho/kissat/2012/03/1356549.jpg');

var img2 = addImage('http://img.avatv.fi/mn_kuvat/mtv3/helmi/minisaitit/kapalakerho/kissat/2012/05/1406247.jpg');

var img3 = addImage('http://www.hauskat.net/hauskoja/kissa4.jpg');

showImage(img2);


function addImage(url) {
  var image = $('<img>');
  image.attr('src', url);
  imageContainer.append(image);

  if (image.is(':first-child')) {
    currentImage = image;
  } else {
    image.hide();
  }

  return image;
}

function clearImages() {
  imageContainer.empty();
}

function prevImage() {
  var image = currentImage.prev();
  if (image.length === 0) {
    image = imageContainer.children().last();
  }
  showImage(image);
}

function nextImage() {
  console.log("next");
  var image = currentImage.next();
  if (image.length === 0) {
    image = imageContainer.children().first();
  }
  showImage(image);
}

function showImage(image) {

  //TÄNNE LÄHETYS TOISELLE KONEELLE
  
  if (imageContainer.has(image).length > 0) {
    currentImage.hide();
    currentImage = image;
    currentImage.show();
    currentImage.trigger('show');
  }
}