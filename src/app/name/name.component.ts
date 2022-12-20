import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { PortfolioService } from '../servicios/portfolio.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
  persona: persona = new persona("", "", "");

  constructor(private personaService: PersonaService  ) { }
  

  ngOnInit(): void {

     this.personaService.getPersona().subscribe(data => {this.persona = data})
  }
}