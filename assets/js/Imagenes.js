import Animales from './Consulta.js'

// Elemento select para los nombres de animales
const selectAnimales = document.getElementById('animal');

// Escuchador de evento que cambiará las imágenes en la previsualización
selectAnimales.addEventListener('change', async () => {

    // Obteniendo datos desde el json, obteniendo a través del 
    // destructuring el atributo animales
    const { animales } = await Animales.getData();

    // Valor que entrega el elemento select
    const anim = document.getElementById('animal').value;

    // Elemento donde se previsualizarán las imágenes
    let previewImagen = document.getElementById('preview');

    // Recorriendo el arreglo desde el json con el método forEach(),
    // para insertar la imagen de acuerdo a los datos de archivo de imagen
    // desde el json
    animales.forEach((elemento) => {
        if (elemento.name == anim){
            previewImagen.innerHTML = `<img height='200px' src='assets/imgs/${elemento.imagen}'>`;
        };
    })
});