import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';      
@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
titulo: string = '';
acercaproyec: string = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  
  this.portfolioService.getDatos().subscribe(datos => {
    console.log(datos);

this.titulo=datos.titulo;
this.acercaproyec=datos.acercaproyec;
});
}
}


