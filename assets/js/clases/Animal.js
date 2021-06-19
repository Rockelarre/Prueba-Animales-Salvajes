// Definición de clase padre protegiendo los atributos con closures
class Animal {
    constructor(nombre,edad,img,comentarios,sonido){
        
        let Nombre = nombre;
        let Edad = edad;
        let Img = img;
        let Comentarios = comentarios;
        let Sonido = sonido;

        this.getNombre = () => Nombre;
        this.getEdad = () => Edad;
        this.getImg = () => Img;
        this.getComentarios = () => Comentarios;
        this.getSonido = () => Sonido;
        
        this.setComentarios = (comentarios) => Comentarios = comentarios;
    }

    // Método get()
    get Nombre(){
        return this.getNombre();
    }

    // Método get()
    get Edad(){
        return this.getEdad();
    }

    // Método get()
    get Img(){
        return this.getImg();
    }

    // Método get()
    get Comentarios(){
        return this.getComentarios();
    }

    // Método get()
    get Sonido(){
        return this.getSonido();
    }

    // Método set()
    set Comentarios(nuevo_comentario){
        return this.getComentarios(nuevo_comentario);
    }
}

export default Animal;