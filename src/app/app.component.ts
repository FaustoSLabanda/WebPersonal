import { Component, OnInit, trigger, state, animate, transition, style } from '@angular/core';
import { Config } from '@config/config';
import { TranslateService } from 'ng2-translate';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('fadeInAnimation', [

      // route 'enter' transition
      transition(':enter', [

        // css styles at start of transition
       // style({ opacity: 0 }),

        // animation and styles at end of transition
        animate('1s', style({ opacity: 1 }))
      ]),
    ])
  ],
})
export class AppComponent implements OnInit {

  public loading = false;
  public modalEjemplo = true;
  public inputDate: any;

  public configuracionCalendario: any;

  public idioma = 'es';


  constructor(public config: Config, public translate: TranslateService) {
    setInterval(() => {
      this.loading = false;
    }, 3000);



    // Lo necesario para que haya mas de un idioma. Pongo es porque es el nombre del json de enla carpeta i18n donde va el texto en español
    this.translate.setDefaultLang(this.idioma);
    this.translate.use(this.idioma);
  }


  ngOnInit() {
    this.configuracionCalendario = this.config.calendar;
  }

  mostrarModalLoading() {
    this.loading = true;
  }

  mostrarModal() {
    this.modalEjemplo = true;
  }

  modalEjemploConfirmar() {
    // Cosas al confirmar
   // alert('Evento al confirmar');
    this.modalEjemplo = false;
  }

  modalEjemploCerrar() {
    // Cosas al cerrar
   // alert('Evento al cerrar');
    this.modalEjemplo = false;
  }

  cambiarIdioma(idioma: string) {
    this.translate.use(idioma);
  }

}
