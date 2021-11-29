const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

const containerInfo = document.querySelector(".container_main");

const fillPopupInfo = () => {
  const avocadoName = document.querySelector(".nameAvocado").textContent;
  const modalInfo = document.querySelector("#modal-info");

  fetch(url)
    .then((response) => response.json())
    .then(({ data }) => {
      const avocadoData = data
        ?.filter((avocado) => avocado.name === avocadoName)
        .shift();

      modalInfo.innerHTML = avocadoData.attributes?.description;
    })
    .catch((error) => {
      console.error(error);
    });
};

window
  .fetch(`${baseUrl}/api/avo`)
  .then((respuesta) => respuesta.json())
  .then((respuestaJson) => {
    respuestaJson.data.forEach((data) => {
      containerInfo.innerHTML += `
        <div class="container_avocado">
            <div class="container_imgAvocado">
                <img src = ${baseUrl}${data.image} alt="">
            </div>
                <div class="container_text_avocado">
                <h2 class="nameAvocado">${data.name}</h2>
                <h3 class="tasteAvocado">${data.attributes.taste}</h3>
                <h3 class="priceAvocado"> € ${data.price}</h3>               
                <label id="btnModal" onclick="fillPopupInfo()" for="btn-modal" class="lbl-modal btn_description">Description...</label>
            </div>
        </div> 
        `;
    });
  });
