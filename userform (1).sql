-- phpMyAdmin SQL Dump
-- version 3.4.9
-- http://www.phpmyadmin.net
--
-- Client: 127.0.0.1
-- Généré le : Dim 12 Décembre 2021 à 16:47
-- Version du serveur: 5.5.20
-- Version de PHP: 5.3.9

SET SQL_MODE="NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Base de données: `userform`
--

-- --------------------------------------------------------

--
-- Structure de la table `contact`
--

CREATE TABLE IF NOT EXISTS `contact` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `lname` varchar(25) NOT NULL,
  `email` varchar(20) NOT NULL,
  `phone` int(20) NOT NULL,
  `radio` varchar(20) NOT NULL,
  `object` varchar(20) NOT NULL,
  `etat_tache` int(11) NOT NULL,
  `description` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Contenu de la table `contact`
--

INSERT INTO `contact` (`id`, `name`, `lname`, `email`, `phone`, `radio`, `object`, `etat_tache`, `description`) VALUES
(1, 'gf', 'bahloul', 'samarbahloul1@gmail.', 20263666, 'Etudiant', 'Proposition', 50, '!mlkjhgfb'),
(2, 'contact', 'ds', 'samar_bahloul@yahoo.', 20263666, 'Etudiant', 'lettre', 88, 'thgfds'),
(3, 'trgfd', 'grfd', 'samarbahloul@yahoo.f', 20263666, 'Etudiant', 'Proposition', 50, 'grtefd'),
(4, 'trgfd', 'grfd', 'samarbahloul@yahoo.f', 20263666, 'Etudiant', 'Proposition', 50, 'grtefd'),
(5, 'gf', 'bahloul', 'samar_bahloul@yahoo.', 5421, 'Etudiant', 'lettre', 72, 'ghbfvdc'),
(6, 'gfgds', 'gfd', 'samarbahloul1@gmail.', 6543211, 'Etudiant', 'lettre', 81, 'hngbfvd');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
