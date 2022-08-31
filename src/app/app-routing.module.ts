import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminisComponent } from './adminis/adminis.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';

const routes: Routes = [ 
{path: 'intro', component:IntroComponent},               
{path: 'adminis', component:AdminisComponent},
{path: '', redirectTo: '/', pathMatch: 'full'},
{path: '**', component:ErrorComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
