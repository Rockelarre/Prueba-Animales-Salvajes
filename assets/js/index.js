

class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        this._nombre = nombre;
        this._edad = edad;
        this._img = img;
        this._comentarios = comentarios;
        this._sonido = sonido;
    }

    get Nombre(){
        return this._nombre;
    }

    get Edad(){
        return this._edad;
    }

    get Img(){
        return this._img;
    }

    get Comentarios(){
        return this._comentarios;
    }

    get Sonido(){
        return this._sonido;
    }
}

class Leon extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Rugir(){

    }
}

class Lobo extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Aullar(){
        
    }
}

class Oso extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Gruñir(){
        
    }
}

class Serpiente extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Sisear(){
        
    }
}

class Aguila extends Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        super(nombre,edad,img,comentarios,sonido)
    }

    Chillar(){
        
    }
}



/* let animal = document.getElementById('animal').value;
let edad = document.getElementById('edad').value;
let comentarios = document.getElementById('comentarios').value; */


const btn = document.getElementById('btnRegistrar');

btn.addEventListener('click', () => {


    let animal = document.getElementById('animal').value;
    let edad = document.getElementById('edad').value;
    let comentarios = document.getElementById('comentarios').value;

    if(animal === 'Leon'){
        let leon1 = new Leon(animal,edad,imagen,comentarios,sonido);
    }
    else if(animal === 'Lobo'){

    }
    else if(animal === 'Oso'){
        
    }
    else if(animal === 'Serpiente'){
        
    }
    else if(animal === 'Aguila'){
        
    }
})

/* const selectAnimales = document.getElementById('animal');
selectAnimales.addEventListener('change',() => {

    let preview = document.getElementById('preview');

let animal = document.getElementById('animal').value;
/* let edad = document.getElementById('edad').value;
let comentarios = document.getElementById('comentarios').value; */

    if(animal === 'Leon'){
        preview.innerHTML = `<img src='assets/imgs/Leon.png'>`;
       /*  alert(); */
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