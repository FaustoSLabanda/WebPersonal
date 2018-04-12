import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PaginaCvComponent } from './components/body/pagina-cv/pagina-cv.component';
import { PaginaCodigosComponent } from './components/body/pagina-codigos/pagina-codigos.component';

const app_routes: Routes = [
  { path: '', component: PaginaCvComponent },
  { path: 'codigos', component: PaginaCodigosComponent },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

export const APP_ROUTING = RouterModule.forRoot(app_routes, { useHash: true });


