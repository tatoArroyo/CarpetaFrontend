import { Component, OnInit } from '@angular/core';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  

  persona: Persona = new Persona("", "", "", "");

  constructor(private personaService: PersonaService  ) { }
  

  ngOnInit(): void {

     this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}