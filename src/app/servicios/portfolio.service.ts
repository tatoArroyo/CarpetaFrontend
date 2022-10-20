import { Injectable } from '@angular/core';
//esto es para subscribirse y que se reciba respuesta de forma asincrona
import { Observable} from 'rxjs';
//esto es para poder hacer peticiones
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {
//el primer hhtp se llama alias
  constructor(private http: HttpClient) { } 
   public getDatos():Observable<any>{ 

    return this.http.get('/assets/json/datos.json');  
    } 
  } 
