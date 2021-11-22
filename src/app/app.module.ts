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
import { IconeEtoileComponent } from './icone-etoile/icone-etoile.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatIconModule} from '@angular/material/icon';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import {MatCardModule} from '@angular/material/card';
import { DateDepartComponent } from './date-depart/date-depart.component';
import { VilleDepartComponent } from './ville-depart/ville-depart.component';
import { DateRetourComponent } from './date-retour/date-retour.component';
import { DescriptionVoyageComponent } from './description-voyage/description-voyage.component';
import { AvisComponent } from './avis/avis.component';
import { PhotoVoyageComponent } from './photo-voyage/photo-voyage.component';
import { PrixRabaisComponent } from './prix-rabais/prix-rabais.component';

import {MatListModule} from '@angular/material/list';



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
    ForfaitVedetteComponent,
    IconeEtoileComponent,
    ListeForfaitComponent,
    DateDepartComponent,
    VilleDepartComponent,
    DateRetourComponent,
    DescriptionVoyageComponent,
    AvisComponent,
    PhotoVoyageComponent,
    PrixRabaisComponent,
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
