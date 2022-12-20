import { Component, OnInit } from '@angular/core';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {


 experiencia: Experiencia [] = [];

 
  constructor(private experienciaS: SExperienciaService, private tokenService: TokenService) { }
isLogged = false;
  ngOnInit(): void {
  
    this.cargarExperiencia();
    if(this.tokenService.getToken()){
      this.isLogged = false;
    }else{
      this.isLogged = false;
    }
}
cargarExperiencia(): void{
  this.experienciaS.lista().subscribe(data => {this.experiencia = data});
}

delete(id?: number){
  if(id != undefined){
this.experienciaS.delete(id).subscribe(
  data =>{
    this.cargarExperiencia();
  }, err =>{
    alert("no se pudo eliminar la experiencia")
  }
)
  }
}

  }
