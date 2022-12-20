import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudios } from '../model/estudios';
import { EstudiosService } from '../service/estudios.service';

@Component({
  selector: 'app-newestudios',
  templateUrl: './newestudios.component.html',
  styleUrls: ['./newestudios.component.css']
})
export class NewestudiosComponent implements OnInit {
  nombreE:string = '';
  descripcionE:string = '';
  inicio: string = '';
  fin: string = '';
  titulo: string = '';


  constructor(private estudiosS: EstudiosService  , private router: Router){ }

  ngOnInit(): void {
  }
  onCreate(): void{
    const estudios = new Estudios(this.nombreE, this.descripcionE, this.inicio, this.fin, this.titulo);
    this.estudiosS.save(estudios).subscribe(data => {
      alert("Estudio añadido");
      this.router.navigate(['']);
    },err =>{
      alert("fallo en la carga, intente nuevamente");
      this.router.navigate(['']);
    }  
    )
  }

}
