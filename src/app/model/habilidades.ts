export class Habilidades {
    id?: number;
    habilidades: string;
    porcentaje: number;
    color: string
    
    constructor(habilidades: string, porcentaje: number, color: string){
    this.habilidades = habilidades;
    this.porcentaje = porcentaje;
    this.color = color;
    
    }

}
