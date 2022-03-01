export interface MiniForfait {
  id :string;
  destination : string;
  villeDepart : string;
  hotel : {
    nomHotel : string;
    adresse : string; 
    etoiles :number;
    nbrChambres : number;  
  }, 
  caracteristiques : string[], 
  prix : number;
  rabais : number;
  dateDepart : string;
  dateRetour : string;
  nbrJours : number; 
  vedette : boolean;
  photoVoyage : string;   
  nombreAvis : number;    
}
