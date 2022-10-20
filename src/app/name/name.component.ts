import { Component, OnInit } from '@angular/core';
import { PortfolioService } from '../servicios/portfolio.service';


@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  nombre: String = '';
  apellido: String = '';
  img: String = '';

  constructor(private portfolioService: PortfolioService) { }

  ngOnInit(): void {
    this.portfolioService.getDatos().subscribe(datos => {
    console.log(datos);
  
    this.nombre=datos.nombre;
    this.apellido=datos.apellido;
    this.img=datos.img
    });
}
}