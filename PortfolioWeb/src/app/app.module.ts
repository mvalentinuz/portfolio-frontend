import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { SeccionExperienciaComponent } from './seccion-experiencia/seccion-experiencia.component';
import { SeccionEducacionComponent } from './seccion-educacion/seccion-educacion.component';
import { SeccionSkillsComponent } from './seccion-skills/seccion-skills.component';
import { SeccionProyectosComponent } from './seccion-proyectos/seccion-proyectos.component';
import { SeccionInfoPersonalComponent } from './seccion-info-personal/seccion-info-personal.component';
import { HttpClientModule } from '@angular/common/http';
import { PortfolioService } from './servicios/portfolio.service';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IniciarSesionComponent } from './iniciar-sesion/iniciar-sesion.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    SeccionExperienciaComponent,
    SeccionEducacionComponent,
    SeccionSkillsComponent,
    SeccionProyectosComponent,
    SeccionInfoPersonalComponent,
    PortfolioComponent,
    IniciarSesionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [PortfolioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
