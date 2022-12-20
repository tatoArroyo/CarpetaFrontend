import { Component, OnInit } from '@angular/core';
import { Habilidades } from '../model/habilidades';
import { HabilidadesService } from '../service/habilidades.service';
import { TokenService } from '../service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

isLogged = false;
habilidades: Habilidades [] = [];




  constructor(private sHabilidades: HabilidadesService, 
    private tokenService: TokenService) {}

	ngOnInit(): void {
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
}
cargarHabilidades(): void{
  this.sHabilidades.lista().subscribe(data => {this.habilidades = data});
}

delete(id: number){
  if(id != undefined){
this.sHabilidades.delete(id).subscribe(
  data =>{
    this.cargarHabilidades();
  }, err =>{
    alert("no se pudo eliminar la habilidad")
  }
)
  }
} 
}
