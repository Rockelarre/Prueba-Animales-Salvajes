import Animales from './Consulta.js'

const selectAnimales = document.getElementById('animal');
selectAnimales.addEventListener('change', async () => {

    const { animales } = await Animales.getData();
    console.log(animales);
    const anim = document.getElementById('animal').value;

    /* const imagenesAnimTemplate = animales
        .find((elemento) => elemento.name == anim).
        imagen.map(); */


        /* if(animal === 'Leon'){
            preview.innerHTML = `<img src='assets/imgs/Leon.png'>`;
        }
        else if(animal === 'Lobo'){
            preview.innerHTML = `<img src='assets/imgs/Lobo.jpg'>`;
        }
        else if(animal === 'Oso'){
            preview.innerHTML = `<img src='assets/imgs/Oso.jpg'>`;
        }
        else if(animal === 'Serpiente'){
            preview.innerHTML = `<img src='assets/imgs/Serpiente.jpg'>`;
        }
        else if(animal === 'Aguila'){
            preview.innerHTML = `<img src='assets/imgs/Aguila.png'>`;
        } */
});