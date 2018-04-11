import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';

import { PipesModule } from '@pipes/pipes.module';
import { ConfigModule } from '@config/config.ts';
import { AppService } from '@services/app.service';
import { DirectivesModule } from '@directives/directives.module';
import { APP_ROUTING } from './app.routing';

// region Librerias Terceros
import { TranslateModule } from 'ng2-translate';
// import { CalendarModule } from 'primeng/components/calendar/calendar';
// import {CalendarModule} from 'primeng/calendar';
// endregion Librerias Terceros


// region Modales
import { LoadRingComponent } from '@modales/load-ring/load-ring.component';
import { ModalEjemploComponent } from '@modales/modal-ejemplo/modal-ejemplo.component';

// endregion Modales

// region Components
import { HomeComponent } from './components/body/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SobreComponent } from './components/body/sobre/sobre.component';
import { ViajesComponent } from './components/body/viajes/viajes.component';
import { ContactoComponent } from './components/body/contacto/contacto.component';
import { ExperienciaComponent } from './components/body/experiencia/experiencia.component';
import { EducacionComponent } from './components/body/educacion/educacion.component';
// endregion Components

@NgModule({
  declarations: [
    AppComponent,
    LoadRingComponent,
    ModalEjemploComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    SobreComponent,
    ViajesComponent,
    ContactoComponent,
    ExperienciaComponent,
    EducacionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    PipesModule,
    ConfigModule,
    DirectivesModule,
    // CalendarModule,
    TranslateModule.forRoot(),
    
    APP_ROUTING
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
