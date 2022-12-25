import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from '../model/persona';
import { PersonaService } from '../service/persona.service';

@Component({
  selector: 'app-editname',
  templateUrl: './editname.component.html',
  styleUrls: ['./editname.component.css']
})
export class EditnameComponent implements OnInit {
persona: Persona = null;
  constructor(private activatedRouter: ActivatedRoute, private personaService: PersonaService,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data => {
        this.persona = data;
      },err =>{
        alert("Error al modificar persona");
        this.router.navigate(['']);
      }
    )
  }

onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
      this.personaService.update(id, this.persona).subscribe(
        data => {
          this.router.navigate(['']);
        },err =>{
          alert("Error al modificar persona");
          this.router.navigate(['']);
        }
      )
}
  
uploadImage($event:any){

}
}