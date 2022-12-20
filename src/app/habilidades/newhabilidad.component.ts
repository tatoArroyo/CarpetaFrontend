import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habilidades } from '../model/habilidades';
import { HabilidadesService } from '../service/habilidades.service';

@Component({
  selector: 'app-newhabilidad',
  templateUrl: './newhabilidad.component.html',
  styleUrls: ['./newhabilidad.component.css']
})
export class NewhabilidadComponent implements OnInit {
  habilidades:string = '';
  porcentaje: number;
 color: string = '';
  
  constructor(private Shabilidades: HabilidadesService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const habilidad = new Habilidades(this.habilidades, this.porcentaje, this.color);
    this.Shabilidades.save(habilidad).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }
}
