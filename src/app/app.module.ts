import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule} from '@angular/common/http';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './modals/login/login.component';
import { RedesComponent } from './redes/redes.component';
import { AcercademiComponent } from './acercademi/acercademi.component';
import { NameComponent } from './name/name.component';
import { EstudiosComponent } from './estudios/estudios.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { HabilidadesComponent } from './habilidades/habilidades.component';
import { AppRoutingFlatModule } from './app-routing--flat/app-routing--flat.module';
import { ContactosComponent } from './contactos/contactos.component';
import { AdminisComponent } from './adminis/adminis.component';
import { ErrorComponent } from './error/error.component';
import { IntroComponent } from './intro/intro.component';
import { NavbaradminisComponent } from './navbaradminis/navbaradminis.component';
import { BotonesadminisComponent } from './botonesadminis/botonesadminis.component';
import { PersonaladminisComponent } from './personaladminis/personaladminis.component';
import { LaboraladminisComponent } from './laboraladminis/laboraladminis.component';
import { EducaadminisComponent } from './educaadminis/educaadminis.component';
import { HabiladminisComponent } from './habiladminis/habiladminis.component';
import { ProyecadminisComponent } from './proyecadminis/proyecadminis.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { FooterComponent } from './footer/footer.component';
import { LogiComponent } from './logi/logi.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RedesComponent,
    AcercademiComponent,
    NameComponent,
    EstudiosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ContactosComponent,
    AdminisComponent,
    ErrorComponent,
    IntroComponent,
    NavbaradminisComponent,
    BotonesadminisComponent,
    PersonaladminisComponent,
    LaboraladminisComponent,
    EducaadminisComponent,
    HabiladminisComponent,
    ProyecadminisComponent,
    ProyectosComponent,
    FooterComponent,
    LogiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingFlatModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
