import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MiniForfaitComponent } from './mini-forfait/mini-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { EtoilesComponent } from './etoiles/etoiles.component';
import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits/formulaire-gestion-forfaits.component';

import { DestinationComponent } from './destination/destination.component';
import { ListeMiniForfaitComponent } from './liste-mini-forfait/liste-mini-forfait.component';
import { NomHotelComponent } from './nom-hotel/nom-hotel.component';
import { PrixComponent } from './prix/prix.component';
import { ForfaitVedetteComponent } from './forfait-vedette/forfait-vedette.component';
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


import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http'; 
import { ForfaitService } from './forfait.service';
import { NavigationComponent } from './navigation/navigation.component';
import { TableForfaitsComponent } from './table-forfaits/table-forfaits.component';
import { FormulaireForfaitsComponent } from './formulaire-forfaits/formulaire-forfaits.component';
import { FormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { AcceuilComponent } from './acceuil/acceuil.component';
import {MatButtonModule} from '@angular/material/button';
import { ForfaitCanadaPipe } from './forfait-canada.pipe';
import { ForfaitCanadaComponent } from './forfait-canada/forfait-canada.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitParisPipe } from './forfait-paris.pipe';
import { ForfaitParisComponent } from './forfait-paris/forfait-paris.component';
import { NgChartsModule } from 'ng2-charts';
import { Graphique1Component } from './graphique1/graphique1.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { Graphique2Component } from './graphique2/graphique2.component';





@NgModule({
  declarations: [
    AppComponent,
    MiniForfaitComponent,
    ForfaitComponent,
    EtoilesComponent,
    FormulaireGestionForfaitsComponent,    
    DestinationComponent,
    ListeMiniForfaitComponent,
    NomHotelComponent,    
    PrixComponent,
    ForfaitVedetteComponent,    
    ListeForfaitComponent,
    DateDepartComponent,
    VilleDepartComponent,
    DateRetourComponent,
    DescriptionVoyageComponent,
    AvisComponent,
    PhotoVoyageComponent, 
    NavigationComponent, TableForfaitsComponent, FormulaireForfaitsComponent, AcceuilComponent, ForfaitCanadaPipe, ForfaitCanadaComponent, AproposComponent, ForfaitParisPipe, ForfaitParisComponent, Graphique1Component, GraphiquesComponent, Graphique2Component,   
   
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatCardModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MatTableModule, 
    MatFormFieldModule,
    MatInputModule, 
    MatDialogModule, 
    MatButtonModule, NgChartsModule,
  ],

  providers: [ForfaitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
