export class Estudios {

    id?: number;
    titulo: string;
    fin: string;
    nombreE: string;
    descripcionE: string;


    constructor(nombreE: string, descripcionE: string, titulo: string, inicio: string, fin: string,){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.titulo = titulo;
    this.fin = fin;

}
}
