import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { AproposComponent } from './apropos/apropos.component';
import { ForfaitCanadaComponent } from './forfait-canada/forfait-canada.component';
import { ForfaitParisComponent } from './forfait-paris/forfait-paris.component';
import { FormulaireGestionForfaitsComponent } from './formulaire-gestion-forfaits/formulaire-gestion-forfaits.component';
import { GraphiquesComponent } from './graphiques/graphiques.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ListeMiniForfaitComponent } from './liste-mini-forfait/liste-mini-forfait.component';







const routes: Routes = [
  {path : "accueil", component : AcceuilComponent},
  {path : "forfaits", component : ListeForfaitComponent},
  {path : "miniforfaits", component : ListeMiniForfaitComponent },
  {path : "tableau", component : FormulaireGestionForfaitsComponent },
  {path : "canada", component : ForfaitCanadaComponent},
  {path : "paris", component : ForfaitParisComponent},
  {path : "graphiques", component : GraphiquesComponent},
  {path : "apropos", component : AproposComponent},
  
  {path : "", redirectTo:'/accueil', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 