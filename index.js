const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

window.fetch(`${baseUrl}/api/avo`)
.then((respuesta) => respuesta.json())
.then((respuestaJson) => {
    const container_avocado = document.createElement('div')
    container_avocado.classList = 'container_avocado';
    
    const container_imgAvocado = document.createElement('div');
    container_imgAvocado.className = 'container_imgAvocado';
    
    const container__text_avocado = document.createElement('div');
    container__text_avocado.className = 'container__text_avocado';
    
    const container_main = document.querySelector('.container_main');
    container_main.appendChild(container_avocado);

    container_avocado.append(container_imgAvocado, container__text_avocado);
    
    
    respuestaJson.data.forEach((element) => {


        const name = document.createElement('h2');
        name.className = 'nameAvocado';
        container__text_avocado.appendChild(name);

        const id = document.createElement('h3');
        id.className = 'idAvocado';
        container__text_avocado.appendChild(id);

        const price = document.createElement('h4');
        name.className = 'priceAvocado';
        container__text_avocado.appendChild(price);

        const imagen = document.createElement('img');
        imagen.className = 'imagen';
        container_imgAvocado.appendChild(imagen);
   
        name.textContent = element.name;
        id.textContent = element.id;
        price.textContent = element.price;

        imagen.src = `${baseUrl}${element.image}`;
        
    });

});