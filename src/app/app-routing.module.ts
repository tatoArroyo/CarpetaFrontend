import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { LogiComponent } from './logi/logi.component';

const routes: Routes = [ 
{path: '', component:IntroComponent},               
{path: 'logi', component:LogiComponent},
{path: '**', component:ErrorComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
