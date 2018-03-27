// luo selainpäässä yhteys PB2-palvelimelle
// toinen parametri on "kanavan nimi"
const pb2 = new PB2('https://pb2-2018.jelastic.metropolia.fi', 'hello');

// lähettää viestin
document.querySelector('#button').addEventListener('click', function() {
  console.log('lähetä');
  pb2.sendJson({msg: 'Hei, Henri täällä!'});
});

function onMessage(response) {
  console.log('remoteShow, response: '+JSON.stringify(response));
  document.querySelector('#output').innerHTML += '<p>'+JSON.stringify(response.json)+'</p>';
};

// vastaanottaa viestin
pb2.setReceiver(onMessage);