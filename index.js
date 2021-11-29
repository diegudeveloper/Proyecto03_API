const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

const containerInfo = document.querySelector('.container_main');

window.fetch(`${baseUrl}/api/avo`)
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
                    <h3 class="idAvocado">${data.id}</h3>
                    <h3 class="priceAvocado"> € ${data.price}</h3>
                    
                    <label for="btn-modal" class="lbl-modal btn_description">Description...</label>
                </div>
        </div>  
        ` 
        
    })

});