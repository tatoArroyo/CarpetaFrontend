import { Component, OnInit } from '@angular/core';
import{ Router} from '@angular/router';

@Component({
  selector: 'app-logi',
  templateUrl: './logi.component.html',
  styleUrls: ['./logi.component.css']
})
export class LogiComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  
  this.router.navigate(['/logi']);
  }
}
