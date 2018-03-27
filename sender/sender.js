const pb2 = new PB2('https://pb2-2018.jelastic.metropolia.fi', 'signage-monday');
const imageContainer = document.querySelector('#imageContainer');
let currentImage;

function addImage(url) {
  const image = document.createElement('img');
  image.setAttribute('src', url);
  imageContainer.append(image);

  if (imageContainer.firstChild.isEqualNode(image)) {
    currentImage = image;
  } else {
    // image.hide();
    image.style.display = 'none';
  }
  return image;
}

function clearImages() {
  imageContainer.empty();
}

function prevImage() {
  let image = currentImage.previousSibling;
  if (!image) {
    image = imageContainer.lastChild;
  }
  currentImage.style.display = 'none';
  showImage(image);
}

function nextImage() {
  // let image = currentImage.next();
  let image = currentImage.nextSibling;
  if (!image) {
    console.log('last image, take first');
    image = imageContainer.firstChild;
  }
  console.log('image: '+image.src);
  currentImage.style.display = 'none';
  showImage(image);
}

function showImage(image) {
  // send image url for the peer
  const me = 'henri';
  console.log('PB2, send: '+JSON.stringify({img: image.src, user: me}));
  pb2.sendJson({img: image.src, user: me});

  // if (imageContainer.has(image).length > 0) {
  if (imageContainer.contains(image)) {
    console.log('showImage, found '+image.src);
    // currentImage.hide();
    image.style.display = 'none';
    currentImage = image;

    // currentImage.show();
    currentImage.style.display = 'block';
    // currentImage.trigger('show');
  } else {
    console.log('image not '+currentImage.src);
  }
}

document.querySelector('#prevButton').addEventListener('click', prevImage);
document.querySelector('#nextButton').addEventListener('click', nextImage);

document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName==='ArrowRight') {
    nextImage();
  } else if (keyName==='ArrowLeft') {
    prevImage();
  }
});

const img1 = addImage('http://via.placeholder.com/350x350');
const img2 = addImage('http://via.placeholder.com/450x450');
const img3 = addImage('http://via.placeholder.com/550x550');

showImage(img2);