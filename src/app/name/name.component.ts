import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';
import { TokenService } from '../service/token.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  

  persona: Persona = null;
  constructor(private personaService: PersonaService, private tokenService: TokenService) { }
  
isLogged = false;
  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    }else{
      this.isLogged = false;
    }
  
  }
  cargarPersona(){
    this.personaService.detail(1).subscribe(data =>
      {this.persona = data}
      )
  }
}