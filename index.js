const baseUrl = "https://platzi-avo.vercel.app";
const url = "https://platzi-avo.vercel.app/api/avo";

const containerInfo = document.querySelector('.container_main');


window.fetch(`${baseUrl}/api/avo`)
.then((respuesta) => respuesta.json())
.then((respuestaJson) => {
    
    const itemsImg = [];
    const itemsText = [];  
 

    const container_avocado = document.createElement('div')
    container_avocado.classList = 'container_avocado';
    
    const container_imgAvocado = document.createElement('div');
    container_imgAvocado.className = 'container_imgAvocado';
    
    const container__text_avocado = document.createElement('div');
    container__text_avocado.className = 'container__text_avocado';
    
      
    respuestaJson.data.forEach((element) => {
        
        
        const container_main = document.querySelector('.container_main')
        container_main.appendChild(container_avocado);

        container_avocado.appendChild(container_imgAvocado);
        container_avocado.appendChild(container__text_avocado);

        
        const name = document.createElement('h2');
        name.className = 'nameAvocado';
        name.textContent = element.name;
        container__text_avocado.appendChild(name);
        

        const id = document.createElement('h3');
        id.className = 'idAvocado';
        id.textContent = element.id;
        container__text_avocado.appendChild(id);

        const price = document.createElement('h4');
        price.className = 'priceAvocado';
        price.textContent = element.price;
        container__text_avocado.appendChild(price);

        const imagen = document.createElement('img');
        imagen.className = 'imagen';
        container_imgAvocado.appendChild(imagen);
        imagen.src = `${baseUrl}${element.image}`;

        const containerIma = document.createElement('div');
        containerIma.appendChild(imagen);

        container_imgAvocado.appendChild(containerIma);

        const containerInfo = document.createElement('div');
        containerInfo.append(name, id, price);

        container__text_avocado.appendChild(containerInfo);

        
    });

    
});