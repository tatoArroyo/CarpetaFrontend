import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-newexperiencia',
  templateUrl: './newexperiencia.component.html',
  styleUrls: ['./newexperiencia.component.css']
})
export class NewexperienciaComponent implements OnInit {
  nombreE:string = '';
  descripcionE:string = '';
  inicio: string = '';
  fin: string = '';
  puesto: string = '';
  
  constructor(private experienciaS: SExperienciaService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const expe = new Experiencia(this.nombreE, this.descripcionE, this.inicio, this.fin, this.puesto);
    this.experienciaS.save(expe).subscribe(data => {
      alert("Experiencia añadida");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }
}
