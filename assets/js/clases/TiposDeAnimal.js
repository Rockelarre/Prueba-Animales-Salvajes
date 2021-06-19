import Animal from './Animal.js';

// Defición de clase hija, con método propio
class Leon extends Animal {
    constructor(nombre,edad,img,comentarios,sonido ){
        super(nombre,edad,img,comentarios,sonido )
    }

    Rugir(){
       return `<audio src="./assets/sounds/Rugido.mp3" controls></audio>`;
    }
}

// Defición de clase hija, con método propio
class Lobo extends Animal {
    constructor(nombre,edad,img,comentarios,sonido ){
        super(nombre,edad,img,comentarios,sonido )
    }

    Aullar(){
        return `<audio src="./assets/sounds/Aullido.mp3" controls></audio>`;
    }
}

// Defición de clase hija, con método propio
class Oso extends Animal {
    constructor(nombre,edad,img,comentarios,sonido ){
        super(nombre,edad,img,comentarios,sonido )
    }

    Gruñir(){
        return `<audio src="./assets/sounds/Gruñido.mp3" controls></audio>`;
    }
}

// Defición de clase hija, con método propio
class Serpiente extends Animal {
    constructor(nombre,edad,img,comentarios,sonido ){
        super(nombre,edad,img,comentarios,sonido )
    }

    Sisear(){
        return `<audio src="./assets/sounds/Siseo.mp3" controls></audio>`;
    }
}

// Defición de clase hija, con método propio
class Aguila extends Animal {
    constructor(nombre,edad,img,comentarios,sonido ){
        super(nombre,edad,img,comentarios,sonido )
    }

    Chillar(){
        return `<audio src="./assets/sounds/Chillido.mp3" controls></audio>`;
    }
}

export { Leon, Lobo, Oso, Serpiente, Aguila};