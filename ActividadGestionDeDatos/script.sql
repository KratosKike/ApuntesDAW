-- phpMyAdmin SQL Dump
-- version 4.9.5deb2
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:3306
-- Tiempo de generación: 06-11-2021 a las 14:17:47
-- Versión del servidor: 8.0.27-0ubuntu0.20.04.1
-- Versión de PHP: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `animales`
--
CREATE DATABASE IF NOT EXISTS `animales` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE `animales`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `gatos`
--

CREATE TABLE `gatos` (
  `id` int NOT NULL,
  `nombre` text NOT NULL,
  `dni` int NOT NULL,
  `edad` int NOT NULL,
  `sexo` text NOT NULL,
  `raza` text NOT NULL,
  `fechaAlta` date NOT NULL,
  `foto` text NOT NULL
) ;

--
-- Volcado de datos para la tabla `gatos`
--

INSERT INTO `gatos` (`id`, `nombre`, `dni`, `edad`, `sexo`, `raza`, `fechaAlta`, `foto`) VALUES
(1, 'Pitín', 5645, 1, 'H', 'persa', '2021-10-23', 'persa.jpeg'),
(2, 'Flash', 5842, 2, 'M', 'MaineCoon', '2021-09-23', 'MaineCoon.jpeg'),
(3, 'Oreo', 5625, 1, 'M', 'British shorthair', '2021-05-23', 'british_shorthair.jpeg'),
(4, 'Rhaegar', 5600, 3, 'M', 'Azul Ruso', '2021-01-23', 'miBebe.jpeg'),
(5, 'Odín', 5601, 1, 'M', 'persa', '2021-10-01', ''),
(6, 'Max', 5646, 2, 'H', 'Siamés', '2021-10-05', 'Siamés.png'),
(7, 'Leo', 5620, 1, 'H', 'Ragdoll', '2021-10-02', 'Ragdoll.jpeg'),
(8, 'Silver', 5680, 1, 'M', 'Scottish Fold', '2021-02-23', 'Scottish1_Fold.jpeg'),
(9, 'Shadow', 5623, 1, 'H', 'Angora Turco', '2021-10-05', 'Angora_Turco.jpeg'),
(10, 'Orión', 5611, 1, 'H', 'Bombay', '2021-01-01', '');

--
-- Checks
--
ALTER TABLE gatos ADD CONSTRAINT CHK_sexo CHECK(sexo='M' or sexo='H');
--
-- Indices de la tabla `gatos`
--
ALTER TABLE `gatos`
  ADD KEY `id` (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `gatos`
--
ALTER TABLE `gatos`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;