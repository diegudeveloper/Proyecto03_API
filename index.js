const baseUrl = 'https://platzi-avo.vercel.app';
const url = 'https://platzi-avo.vercel.app/api/avo';

const containerInfo = document.querySelector('.container_main');

function showDescription(name) {
  const domElement = document.querySelector('.contenido');
  console.log(domElement);
  domElement.innerHTML =  `<p>${name}<p>`;
  console.log(domElement);

  const namemodal = document.querySelector('.name_modal');
  namemodal.innerHTML = `<p>${element.name}<p>`
}

window
  .fetch(`${baseUrl}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((respuestaJson) => {
    respuestaJson.data.forEach((data) => {
      containerInfo.innerHTML += `
        <div class="container_avocado" >
            <div class="container_imgAvocado">
                <img src = ${baseUrl}${data.image} alt="">
            </div>
                <div class="container_text_avocado">
                <h2 class="nameAvocado">${data.name}</h2>
                <h3 class="tasteAvocado">${data.attributes.taste}</h3>
                <h3 class="priceAvocado"> € ${data.price}</h3>
                <label onclick="showDescription('${data.attributes.description} ${data.name}') " for="btn-modal" class="lbl-modal- btn_description name_modal">Description...</label>
            </div>
        </div>
        `;
    })
}); 