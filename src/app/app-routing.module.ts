import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EditestudiosComponent } from './estudios/editestudios.component';
import { NewestudiosComponent } from './estudios/newestudios.component';
import { NewexperienciaComponent } from './experiencia/newexperiencia.component';
import { IntroComponent } from './intro/intro.component';
import { LogiComponent } from './logi/logi.component';
import { LoginComponent } from './modals/login/login.component';


const routes: Routes = [ 
{path: 'intro', component:IntroComponent},               
{path: '', component:LogiComponent},
{path: '**', component:ErrorComponent},
{path:'nuevoestu',component: NewestudiosComponent},
{path:'nuevaexp', component: NewexperienciaComponent},
{path:'editestu/:id', component: EditestudiosComponent},
{path:'login', component: LoginComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
