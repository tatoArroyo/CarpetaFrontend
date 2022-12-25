import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { EditestudiosComponent } from './estudios/editestudios.component';
import { NewestudiosComponent } from './estudios/newestudios.component';
import { NewexperienciaComponent } from './experiencia/newexperiencia.component';
import { IntroComponent } from './intro/intro.component';
import { LogiComponent } from './logi/logi.component';
import { EditnameComponent } from './name/editname.component';
import { EditproyectosComponent } from './proyectos/editproyectos.component';
import { NewproyectosComponent } from './proyectos/newproyectos.component';


const routes: Routes = [ 
{path: '', component:IntroComponent},               
{path: 'logi', component:LogiComponent},
{path: '**', component:ErrorComponent},
{path:'nuevoestu',component: NewestudiosComponent},
{path:'nuevaexp', component: NewexperienciaComponent},
{path:'editestu/:id', component: EditestudiosComponent},
{path:'newproy', component: NewproyectosComponent},
{path:'editproy', component: EditproyectosComponent},
{path:'editper', component: EditnameComponent}
];




@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
