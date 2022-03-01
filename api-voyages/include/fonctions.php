<?php

// Cette fonction prend l'object au format tablulaire SQL 
// et retourne un objet dont la structure correspond au format
// devant être retourné par l'API. 
function ConversionVoyageSQLEnObjet($voyageSQL) {
    $voyageOBJ = new stdClass();
    $voyageOBJ->id = $voyageSQL["id"];
    $voyageOBJ->destination = $voyageSQL["destination"];
    $voyageOBJ->villeDepart = $voyageSQL["villeDepart"];
    $voyageOBJ->dateDepart = $voyageSQL["dateDepart"];
    $voyageOBJ->dateRetour = $voyageSQL["dateRetour"];
    $voyageOBJ->prix = $voyageSQL["prix"];
    $voyageOBJ->rabais = $voyageSQL["rabais"];
    $voyageOBJ->vedette = $voyageSQL["vedette"];
    $voyageOBJ->nbrJours = $voyageSQL["nbrJours"];
    $voyageOBJ->nombreAvis = $voyageSQL["nombreAvis"];

    $voyageOBJ->hotel = new stdClass(); // nom de ma colonne
    $voyageOBJ->hotel->nomHotel = $voyageSQL["nomHotel"];
    $voyageOBJ->hotel->adresse = $voyageSQL["adresse"];
    $voyageOBJ->hotel->etoiles = $voyageSQL["etoiles"];
    $voyageOBJ->hotel->nbrChambres = $voyageSQL["nbrChambres"];    

    $voyageOBJ->caracteristiques = explode(";", $voyageSQL["caracteristiques"]);

    return $voyageOBJ;
}   

?>