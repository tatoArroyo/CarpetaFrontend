import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';

@Component({
  selector: 'app-newproyectos',
  templateUrl: './newproyectos.component.html',
  styleUrls: ['./newproyectos.component.css']
})
export class NewproyectosComponent implements OnInit {
  proyectos: string = '';
  acercaproyec: string = '';
  nombre: string;
  
  constructor(private Sproyectos: ProyectosService, private router: Router) { }

  ngOnInit(): void {
  }
  onCreate(): void{
    const proyectos = new Proyectos(this.nombre, this.acercaproyec);
    this.Sproyectos.save(proyectos).subscribe(data => {
      alert("Proyecto añadido");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }
}
