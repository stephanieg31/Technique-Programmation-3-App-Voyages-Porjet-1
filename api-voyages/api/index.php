

<?php
include_once '../include/config.php'; 
include_once '../include/fonctions.php'; 

header('Content-Type: application/json;');
header('Access-Control-Allow-Origin: *'); 

header("Access-Control-Allow-Methods: POST, DELETE, PUT, OPTIONS");
header('Access-Control-Allow-Headers: Content-Type');

$mysqli = new mysqli($host, $username, $password, $database); // Établissement de la connexion à la base de données
if ($mysqli -> connect_errno) { // Affichage d'une erreur si la connexion échoue
  echo 'Échec de connexion à la base de données MySQL: ' . $mysqli -> connect_error;
  exit();
} 

switch($_SERVER['REQUEST_METHOD'])  {

  case 'GET':  // GESTION DES DEMANDES DE TYPE GET
    if(isset($_GET['id'])) { 
      if ($requete = $mysqli->prepare("SELECT * FROM forfaits WHERE id=?")) {  
        $requete->bind_param("i", $_GET['id']); 
        $requete->execute(); 

        $resultat_requete = $requete->get_result(); 
        $voyageSQL = $resultat_requete->fetch_assoc(); 

        // Convesion de l'objet au format JSON désiré
        $voyageObj = ConversionVoyageSQLEnObjet($voyageSQL);

        echo json_encode($voyageObj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);

        $requete->close(); 
      }
	  } else {
      $requete = $mysqli->query("SELECT * FROM forfaits");
      $listeVoyagesObj = [];

		while ($voyageSQL = $requete->fetch_assoc()) {
			// Convesion de l'objet au format JSON désiré
			$voyageObj = ConversionVoyageSQLEnObjet($voyageSQL);

			// Ajout des voyages à la liste
			array_push($listeVoyagesObj, $voyageObj);
		}

		echo json_encode($listeVoyagesObj, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
		$requete->close();
	}
	break;
case 'POST':  // GESTION DES DEMANDES DE TYPE POST (AJOUT)
	$reponse = new stdClass();
	$reponse->message = "Ajout d'un voyages: ";
	
	$corpsJSON = file_get_contents('php://input');
	$data = json_decode($corpsJSON, TRUE); 

	$destination = $data['destination'];
	$villeDepart = $data['villeDepart'];
	$dateDepart = $data['dateDepart'];
	$dateRetour = $data['dateRetour'];
	$prix = $data['prix'];
	$rabais = $data['rabais'];	
	$vedette = $data['vedette'];
  $nbrJours = $data['nbrJours'];	
	$nombreAvis = $data['nombreAvis'];	

	$nomHotel = $data['hotel']['nomHotel'];
  $adresse = $data['hotel']['adresse'];
  $etoiles = $data['hotel']['etoiles'];
  $nbrChambres = $data['hotel']['nbrChambres'];

  $caracteristiques = $data['caracteristiques'];

	if(isset($destination) && isset($villeDepart) && isset($dateDepart) && isset($dateRetour) && isset($prix) 
      && isset($rabais) && isset($vedette) && isset($nomHotel) && isset($adresse) 
      && isset($etoiles) && isset($nbrChambres)&& isset($caracteristiques)) {

	  $caracteristiques = implode(';', $caracteristiques);

      if ($requete = $mysqli->prepare("INSERT INTO forfaits (destination, villeDepart, dateDepart, dateRetour, prix, rabais, vedette, nomHotel, adresse, etoiles, nbrChambres, caracteristiques, nbrJours, nombreAvis) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);")) {      
		$requete->bind_param("ssssddsssddsdd", $destination, $villeDepart, $dateDepart, $dateRetour, $prix, $rabais, $vedette, $nomHotel, $adresse, $etoiles, $nbrChambres, $caracteristiques, $nbrJours, $nombreAvis);

        if($requete->execute()) { 
          $reponse->message .= "Succès";  
        } else {
          $reponse->message .=  "Erreur dans l'exécution de la requête";  
        }

        $requete->close(); 
      } else  {
        $reponse->message .=  "Erreur dans la préparation de la requête";  
      } 
    } else {
		$reponse->message .=  "Erreur dans le corps de l'objet fourni";  
	}
	echo json_encode($reponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	
break;
  case 'PUT':  // GESTION DES DEMANDES DE TYPE PUT (éditer)
    $reponse = new stdClass();
    $reponse->message = "Édition du produit: ";
    
    $corpsJSON = file_get_contents('php://input');
    $data = json_decode($corpsJSON, TRUE); 
  
    $destination = $data['destination'];
    $villeDepart = $data['villeDepart'];
    $dateDepart = $data['dateDepart'];
    $dateRetour = $data['dateRetour'];
    $prix = $data['prix'];
    $rabais = $data['rabais'];	
    $vedette = $data['vedette'];	
    $nbrJours = $data['nbrJours'];	
    $nombreAvis = $data['nombreAvis'];	
  
    $nomHotel = $data['hotel']['nomHotel'];
    $adresse = $data['hotel']['adresse'];
    $etoiles = $data['hotel']['etoiles'];
    $nbrChambres = $data['hotel']['nbrChambres'];
  
    $caracteristiques = $data['caracteristiques'];


  if(isset($_GET['id'])) { 
    if(isset($destination) && isset($villeDepart) && isset($dateDepart) && isset($dateRetour) && isset($prix) 
        && isset($rabais) && isset($vedette) && isset($nomHotel) && isset($adresse) 
        && isset($etoiles) && isset($nbrChambres)&& isset($caracteristiques)) {
  
        $caracteristiques = implode(';', $caracteristiques);
  
        if ($requete = $mysqli->prepare("UPDATE forfaits SET destination=?, villeDepart=?, dateDepart=?, dateRetour=?, prix=?, rabais=?, vedette=?, nomHotel=?, adresse=?, etoiles=?, nbrChambres=?, caracteristiques=?, nbrJours=?, nombreAvis=? WHERE id=?")) {      
          $requete->bind_param("ssssddsssddsddd", $destination, $villeDepart, $dateDepart, $dateRetour, $prix, $rabais, $vedette, $nomHotel, $adresse, $etoiles, $nbrChambres, $caracteristiques, $nbrJours, $nombreAvis,  $_GET['id']);
  
          if($requete->execute()) { 
            $reponse->message .= "Succès";  
          } 
          
          else {
            $reponse->message .=  "Erreur dans l'exécution de la requête";  
          }
  
          $requete->close(); 
        } 
        
          else  {
          $reponse->message .=  "Erreur dans la préparation de la requête";  
          } 

    } 
    
    else {
      $reponse->message .=  "Erreur dans le corps de l'objet fourni";  
    }
}   
    echo json_encode($reponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
break;


case 'DELETE':  // GESTION DES DEMANDES DE TYPE DELETE
	$reponse = new stdClass();
	$reponse->message = "Suppression du forfait : ";
	if(isset($_GET['id'])) { 
		if ($requete = $mysqli->prepare("DELETE FROM forfaits WHERE id=?")) {     
			$requete->bind_param("i", $_GET['id']);

			if($requete->execute()) { 
			  $reponse->message .= "Succès";  
			} 
      
      else {
			  $reponse->message .=  "Erreur dans l'exécution de la requête";  
			}
			$requete->close(); 
		}     
    else {
			$reponse->message .=  "Erreur dans la préparation de la requête";  
		} 
	}
  
  else {
		$reponse->message .=  "Erreur dans les paramètres (aucun identifiant fourni)";  
	}

	echo json_encode($reponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
	break;

default:
	$reponse = new stdClass();
	$reponse->message = "Opération non supportée";	
	echo json_encode($reponse, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
}





$mysqli->close(); 
?>