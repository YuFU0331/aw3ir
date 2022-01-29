import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MeteoComponent } from './meteo/meteo.component';
import { RouterModule, Routes } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MeteoDetailComponent } from './meteo-detail/meteo-detail.component';
 // <--  Ajouter les références ici


@NgModule({
  declarations: [
    AppComponent,
    MeteoComponent,
    MeteoDetailComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule,
     //<-- Ajouter les références ici aussi
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


const appRoutes: Routes = [
  { 
    path: 'meteo/:name',  // la page  affichant la météo prendra comme paramètre 'name'
    component: MeteoDetailComponent }, // Ce component fera l'appel AJAX et afficher les données reçues par openWeatherMap
  {
    path: '', // un chemin vide renverra vers '/'
    redirectTo: '/',
    pathMatch: 'full'
  },
  {
    path: '', // la page principale utilisera le component suivant
    component: MeteoComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // autres imports ici
  ]

})
