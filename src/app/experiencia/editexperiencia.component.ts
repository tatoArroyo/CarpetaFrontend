import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from '../model/experiencia';
import { SExperienciaService } from '../service/s-experiencia.service';

@Component({
  selector: 'app-editexperiencia',
  templateUrl: './editexperiencia.component.html',
  styleUrls: ['./editexperiencia.component.css']
})
export class EditexperienciaComponent implements OnInit {
  expLab: Experiencia = null;
  constructor(private experienciaS: SExperienciaService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.detail(id).subscribe(
      data =>{
        this.expLab = data;
      },err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )

  }
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.experienciaS.update(id, this.expLab).subscribe(
      data => {
        this.router.navigate(['']);
      },err =>{
        alert("Error al modificar experiencia");
        this.router.navigate(['']);
      }
    )
  }

  }
