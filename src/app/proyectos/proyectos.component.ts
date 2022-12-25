import { Component, OnInit } from '@angular/core';
import { Proyectos } from '../model/proyectos';
import { ProyectosService } from '../service/proyectos.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

isLogged = false;
proyectos: Proyectos [] = [];


  constructor(private sProyectos: ProyectosService, 
    private tokenService: TokenService) { }

  ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarProyectos(): void{
  this.sProyectos.lista().subscribe(data => {this.proyectos = data});
}

delete(id: number){
  if(id != undefined){
this.sProyectos.delete(id).subscribe(
  data =>{
    this.cargarProyectos();
  }, err =>{
    alert("no se pudo eliminar el proyecto")
  }
)
  }
} 
  
}

