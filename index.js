const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

window.fetch(`${baseUrl}/api/avo`)
.then((respuesta) => respuesta.json())
.then((respuestaJson) => {
    respuestaJson.data.forEach((element) => {
        //console.log(element.name);
        //const imagen = document.querySelector('.container_imgAvocado');
        //imagen.src = `${baseUrl}${element.image}`;

        const price = document.querySelector('.price');
        price.textContent = element.price;

        const taste = document.querySelector('.taste');
        taste.textContent = element.attributes.taste;


        //const contaImg = document.createElement('div');
        //contaImg.appendChild(imagen);
    });

});