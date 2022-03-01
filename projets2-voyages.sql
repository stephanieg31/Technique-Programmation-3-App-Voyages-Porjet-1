-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost
-- Généré le :  mar. 01 mars 2022 à 01:10
-- Version du serveur :  8.0.18
-- Version de PHP :  7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données :  `projets2-voyages`
--

-- --------------------------------------------------------

--
-- Structure de la table `activites`
--

CREATE TABLE `activites` (
  `id` int(11) NOT NULL,
  `nbrPersonne` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `nomActivite` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `prix` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `joursSemaine` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `heureOuverture` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `remarques` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `activites`
--

INSERT INTO `activites` (`id`, `nbrPersonne`, `nomActivite`, `prix`, `joursSemaine`, `heureOuverture`, `remarques`) VALUES
(1, '4', 'Rendonnée pedestre (5km)', '100', 'Jeudi au Dimanche', '7h00 à 17h00', 'Pour les experts, doit être ne bonne forme physique'),
(2, '2', 'Sea-doo', '150', 'Lundi au dimanche', '7h00 à 18h00', 'Doit avoir un permis de conduire. 18 ans et plus'),
(3, '4', 'Bora-Parc', '280', 'Lundi au dimanche', '7h00 à 20h00', 'Pour toutes la famille'),
(4, '2', 'Catamaran', '150', 'Mercredi au samedi', '7h00 à 16h00', 'Attention au mal de mer, Emportez votre lunche'),
(5, '1', 'Parachute', '125', 'Lundi au mercredi', '7h00 à 14h00', 'Pour les 18 ans et plus, Limite de poids de 250 lbs');

-- --------------------------------------------------------

--
-- Structure de la table `forfaits`
--

CREATE TABLE `forfaits` (
  `id` int(11) NOT NULL,
  `destination` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `villeDepart` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `dateDepart` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `dateRetour` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prix` decimal(10,0) NOT NULL,
  `rabais` decimal(10,0) NOT NULL,
  `vedette` varchar(5) COLLATE utf8mb4_general_ci NOT NULL,
  `nomHotel` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `adresse` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `etoiles` decimal(2,0) NOT NULL,
  `nbrChambres` decimal(5,0) NOT NULL,
  `caracteristiques` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `nbrJours` decimal(2,0) NOT NULL,
  `nombreAvis` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Déchargement des données de la table `forfaits`
--

INSERT INTO `forfaits` (`id`, `destination`, `villeDepart`, `dateDepart`, `dateRetour`, `prix`, `rabais`, `vedette`, `nomHotel`, `adresse`, `etoiles`, `nbrChambres`, `caracteristiques`, `nbrJours`, `nombreAvis`) VALUES
(1, 'Punta Cana', 'Montréal', '15 janvier 2023', '23 janvier 2023', '748', '558', 'oui', 'Hotel Marimba Punta Cana', '10211 Punta Cana, République dominicaine', '5', '200', 'Seulement pour les adultes', '0', '0'),
(5, 'Punta Cana', 'Québec', '7 février 2022', '15 février 2022', '899', '850', 'non', 'Hyatt Ziva Cap Cana', 'Playa Juanillo, Boulevard Zona Hotelera, Punta Cana 23302, République dominicaine', '4', '222', 'Spas détentes privés', '0', '0'),
(7, 'Varadero', 'Québec', '4 février 2022', '11 février 2022', '850', '835', 'oui', 'Meliá Internacional Varadero', 'Carretera de Las Morlas, Varadero, Cuba', '3', '120', 'Belle plage; Jeux pour enfants', '0', '0'),
(8, 'Paris', 'Québec', '13 juillet 2022', '19 juillet 2022', '2298', '1249', 'non', 'Les Plumes Hôtel', '10 Rue Lamartine, 75009 Paris, France', '5', '82', 'Très chic; Bel endroit calme', '0', '0'),
(13, 'Canada', 'St-Geroges', '3 septembre 2022', '30 septembre 2022', '200', '100', 'oui', 'Constello', '202, 14e avenue, La Guadeloupe', '2', '10', 'Pas de piscine; Pas de bar; Pas de télévision', '0', '0');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activites`
--
ALTER TABLE `activites`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `forfaits`
--
ALTER TABLE `forfaits`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activites`
--
ALTER TABLE `activites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `forfaits`
--
ALTER TABLE `forfaits`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
