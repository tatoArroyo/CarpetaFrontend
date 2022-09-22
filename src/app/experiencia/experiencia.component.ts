import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 experiencia: any = [];

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
  this.portfolioService.getDatos().subscribe(datos => {
      console.log(datos);

      this.experiencia=datos.experiencia;
  });

  }
}
