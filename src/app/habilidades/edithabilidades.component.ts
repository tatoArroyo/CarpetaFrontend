import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidades } from '../model/habilidades';
import { HabilidadesService } from '../service/habilidades.service';

@Component({
  selector: 'app-edithabilidades',
  templateUrl: './edithabilidades.component.html',
  styleUrls: ['./edithabilidades.component.css']
})
export class EdithabilidadesComponent implements OnInit {
  habilidad: Habilidades = null;

  constructor(private habilidadesS: HabilidadesService, private activatedRouter: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {

    const id = this.activatedRouter.snapshot.params['id'];
      this.habilidadesS.detail(id).subscribe(
        data =>{
          this.habilidad = data;
        },err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
  
    }
    onUpdate(): void{
      const id = this.activatedRouter.snapshot.params['id'];
      this.habilidadesS.update(id, this.habilidad).subscribe(
        data => {
          this.router.navigate(['']);
        },err =>{
          alert("Error al modificar experiencia");
          this.router.navigate(['']);
        }
      )
    }
  }
