import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits/formulaire-gestion-forfaits.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';
import { DestinationComponent } from './destination/destination.component';
import { ListeMiniForfaitComponent } from './liste-mini-forfait/liste-mini-forfait.component';
import { NomHotelComponent } from './nom-hotel/nom-hotel.component';
import { SejourComponent } from './sejour/sejour.component';
import { PrixComponent } from './prix/prix.component';
import { ForfaitVedetteComponent } from './forfait-vedette/forfait-vedette.component';

@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitComponent,
    EtoilesComponent,
    FormulaireGestionForfaitsComponent,
    FormulaireRechercheComponent,
    DestinationComponent,
    ListeMiniForfaitComponent,
    NomHotelComponent,
    SejourComponent,
    PrixComponent,
    ForfaitVedetteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
