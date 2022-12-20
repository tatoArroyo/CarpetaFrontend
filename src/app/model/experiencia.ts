export class Experiencia {

    id?: number;
    nombreE: string;
    descripcionE: string;
    puesto: string;
    inicio: string;
    fin: string;


    constructor(nombreE: string, descripcionE: string, puesto: string, inicio: string, fin: string){
    this.nombreE = nombreE;
    this.descripcionE = descripcionE;
    this.puesto = puesto;
    this.inicio = inicio;
    this.fin = fin;
}
}
