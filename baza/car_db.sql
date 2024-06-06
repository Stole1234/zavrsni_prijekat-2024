-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               10.4.32-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.7.0.6850
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for car_db
CREATE DATABASE IF NOT EXISTS `car_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;
USE `car_db`;

-- Dumping structure for table car_db.car
CREATE TABLE IF NOT EXISTS `car` (
  `car_id` int(11) NOT NULL AUTO_INCREMENT,
  `model` varchar(255) NOT NULL,
  `manufacturer_id` int(11) NOT NULL,
  `owner_id` bigint(20) NOT NULL,
  `year` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime DEFAULT NULL,
  `deleted_at` datetime DEFAULT NULL,
  PRIMARY KEY (`car_id`),
  KEY `manufacturer_id` (`manufacturer_id`),
  KEY `owner_id` (`owner_id`),
  CONSTRAINT `car_ibfk_1` FOREIGN KEY (`manufacturer_id`) REFERENCES `manufacturer` (`manufacturer_id`),
  CONSTRAINT `car_ibfk_2` FOREIGN KEY (`owner_id`) REFERENCES `owner` (`owner_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table car_db.car: ~5 rows (approximately)
REPLACE INTO `car` (`car_id`, `model`, `manufacturer_id`, `owner_id`, `year`, `created_at`, `updated_at`, `deleted_at`) VALUES
	(1, 'Corolla', 1, 1, 1990, '2024-06-06 05:00:00', NULL, NULL),
	(2, 'Camry', 1, 2, 2005, '2024-06-06 05:00:00', NULL, NULL),
	(3, 'Fusion', 2, 3, 2010, '2024-06-06 05:00:00', NULL, NULL),
	(4, 'Focus', 2, 1, 2008, '2024-06-06 05:00:00', NULL, NULL),
	(5, 'X5', 3, 2, 2009, '2024-06-06 05:00:00', NULL, NULL);

-- Dumping structure for table car_db.manufacturer
CREATE TABLE IF NOT EXISTS `manufacturer` (
  `manufacturer_id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  PRIMARY KEY (`manufacturer_id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table car_db.manufacturer: ~3 rows (approximately)
REPLACE INTO `manufacturer` (`manufacturer_id`, `name`, `country`) VALUES
	(1, 'Toyota', 'Japan'),
	(2, 'Ford', 'USA'),
	(3, 'BMW', 'Germany');

-- Dumping structure for table car_db.owner
CREATE TABLE IF NOT EXISTS `owner` (
  `owner_id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_name` varchar(255) NOT NULL,
  `surename` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `surname` varchar(255) NOT NULL,
  PRIMARY KEY (`owner_id`),
  UNIQUE KEY `uq_owners_email` (`email`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- Dumping data for table car_db.owner: ~3 rows (approximately)
REPLACE INTO `owner` (`owner_id`, `owner_name`, `surename`, `email`, `phone`, `name`, `surname`) VALUES
	(1, 'John', 'Doe', 'john.doe@example.com', '', '', ''),
	(2, 'Jane', 'Smith', 'jane.smith@example.com', '', '', ''),
	(3, 'Alice', 'Johnson', 'alice.johnson@example.com', '', '', '');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
