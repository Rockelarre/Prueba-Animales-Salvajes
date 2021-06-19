// Importando clases desde TiposDeAnimal.js
import { Leon, Lobo, Oso, Serpiente, Aguila } from './clases/TiposDeAnimal.js'

// Arreglo para ir agregando instancias de animales
let animales = [];

// Variable para el elemento botón Agregar
let btnRegistrar = document.getElementById('btnRegistrar');

// Escuchador para el evento click del botón Agregar
btnRegistrar.addEventListener('click', () => {

    // Datos obtenidos desde el formulario
    let nombre = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let previewElement = document.getElementById('preview').innerHTML;
    let comentarios = document.getElementById('comentarios').value;

    // Validaciones para campos vacíos
    if((nombre == '') || (edad == '') || (previewElement == '') || (comentarios == '')){
        alert('Debe ingresar todos los datos.')
    }
    else {
        let nuevoAnimal;

        // IF-ELSE para ir creando instancias según el tipo de animal
        if( nombre === 'Leon'){
            nuevoAnimal = new Leon(nombre, edad, previewElement, comentarios, 'rugir')
        }
        else if ( nombre === 'Lobo'){
            nuevoAnimal = new Lobo(nombre, edad, previewElement, comentarios, 'aullar')
        }
        else if ( nombre === 'Oso'){
            nuevoAnimal = new Oso(nombre, edad, previewElement, comentarios, 'gruñir')
        }
        else if ( nombre === 'Serpiente'){
            nuevoAnimal = new Serpiente(nombre, edad, previewElement, comentarios, 'sisear')
        }
        else if ( nombre === 'Aguila'){
            nuevoAnimal = new Aguila(nombre, edad, previewElement, comentarios, 'chillar')
        }

        // Método push() para ir agregando instancias de animales al 
        // arreglo animales
        animales.push(nuevoAnimal);

        // Llamada a la función para agregar animales
        reloadTable();

        // Devolver formulario a estado inicial
        document.getElementById('animal').value = 'inicial';
        document.getElementById('edad').value = 'inicial';
        document.getElementById('preview').innerHTML = '';
        document.getElementById('comentarios').value = '';
    }
});

// Definición de la función para ir agregando animales a la tabla
const reloadTable = () => {
    // Obteniendo elemento html de tabla de animales
    const animalesTemplate = document.getElementById('Animales');

    // Limpiando tabla de animales
    animalesTemplate.innerHTML = '';

    // Método forEach() para ir agregando animales a la tabla
    animales.forEach((elemento) => {

        // IF-ELSE para seleccionar método de sonido para cada 
        // tipo de animal
        let sonido;
        if(elemento.getSonido() === 'rugir'){
            sonido = elemento.Rugir();
        } 
        else if (elemento.getSonido() === 'aullar'){
            sonido = elemento.Aullar();
        }
        else if (elemento.getSonido() === 'gruñir'){
            sonido = elemento.Gruñir();
        }
        else if (elemento.getSonido() === 'sisear'){
            sonido = elemento.Sisear();
        }
        else if (elemento.getSonido() === 'chillar'){
            sonido = elemento.Chillar();
        }

        // Manipulación del DOM para mostrar los animales en la tabla
        animalesTemplate.innerHTML += `
        
            <div class='card m-1'>
                ${elemento.getImg()}
                <div class='card-body'>
                    <h4 class='cart-title'>${elemento.getNombre()}</h4>
                    <hr class='w-50 mx-auto'>
                    <h6 class='card-text'>Edad: ${elemento.getEdad()}</h6>
                    <h6 class='card-text'>Comentarios: ${elemento.getComentarios()}</h6>
                    ${sonido}
                </div>
            </div>
       
                            `;
    })
}