export class Persona {
    id?: number;
    nombre: string;
    apellido: string;
    img: string;
    direccion: string;




    constructor(nombre: string, apellido: string, img: string, direccion: string){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.direccion = direccion;
       
    

    }

}
