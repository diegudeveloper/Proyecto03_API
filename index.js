//Header//

const searchBtn = document.querySelector(".fa-search");
const searchContainer = document.querySelector(".search");
const btn_menu = document.querySelector(".btn_menu");
const navbar = document.querySelector(".navbar");

const btnUser = document.querySelector(".fa-user");

const btnForm = document.querySelector(".container_login");
const btnX = document.querySelector("#btn_close");

btnUser.addEventListener('click', () => {
    btnForm.classList.add('active');
});

btnX.addEventListener('click', () => {
    btnForm.classList.remove('active');
});


btn_menu.addEventListener("click", () => {
    navbar.classList.toggle('navbar_active');
});

searchBtn.addEventListener("click", () => {
    searchBtn.classList.toggle('fa-times');
    searchContainer.classList.toggle('active');
});






const baseUrl = 'https://platzi-avo.vercel.app';
const url = 'https://platzi-avo.vercel.app/api/avo';

const containerInfo = document.querySelector('.box-container_products');

function showDescription(description, name) {
  const domElement = document.querySelector('.contenido');
  domElement.innerHTML = `<p>${description}<p>`;

  console.log(name);
  const namemodal = document.querySelector('.name_modal');
  namemodal.innerHTML = `<p>${name}<p>`;
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
                <label onclick="showDescription('${data.attributes.description}', '${data.name}') " for="btn-modal" class="lbl-modal- btn_description name_modal">Description...</label>
            </div>
        </div>`;
    });
});