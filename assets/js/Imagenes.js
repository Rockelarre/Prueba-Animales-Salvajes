import Animales from './Consulta.js'

const selectAnimales = document.getElementById('animal');
selectAnimales.addEventListener('change', async () => {

    const { animales } = await Animales.getData();
    /* console.log(animales[0].name); */
    const anim = document.getElementById('animal').value;

    let previewImagen = document.getElementById('preview');

    animales.forEach((elemento) => {
        if (elemento.name == anim){
            previewImagen.innerHTML = `<img src='assets/imgs/${elemento.imagen}'>`;
        };
    })
});