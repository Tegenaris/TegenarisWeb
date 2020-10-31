-- MySQL dump 10.13  Distrib 5.7.16, for Linux (x86_64)
--
-- Host: localhost    Database: ShopHelper
-- ------------------------------------------------------
-- Server version	5.7.16-0ubuntu0.16.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `CurrentItems`
--

DROP TABLE IF EXISTS `CurrentItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `CurrentItems` (
  `ItemID` int(11) NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(100) COLLATE utf8_polish_ci DEFAULT NULL,
  `ItemAmount` int(11) DEFAULT NULL,
  `L1ID` int(11) DEFAULT NULL,
  `L2ID` int(11) DEFAULT NULL,
  `L3ID` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemID`),
  UNIQUE KEY `ItemID_UNIQUE` (`ItemID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `CurrentItems`
--

LOCK TABLES `CurrentItems` WRITE;
/*!40000 ALTER TABLE `CurrentItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `CurrentItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `HistoryItems`
--

DROP TABLE IF EXISTS `HistoryItems`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `HistoryItems` (
  `idHistoryItems` int(11) NOT NULL AUTO_INCREMENT,
  `DateBought` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `AmountBought` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `ContainerID` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`idHistoryItems`),
  UNIQUE KEY `idHistoryItems_UNIQUE` (`idHistoryItems`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `HistoryItems`
--

LOCK TABLES `HistoryItems` WRITE;
/*!40000 ALTER TABLE `HistoryItems` DISABLE KEYS */;
/*!40000 ALTER TABLE `HistoryItems` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Level1`
--

DROP TABLE IF EXISTS `Level1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Level1` (
  `idLevel1` int(11) NOT NULL AUTO_INCREMENT,
  `nameLevel1` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  PRIMARY KEY (`idLevel1`),
  UNIQUE KEY `idLevel1_UNIQUE` (`idLevel1`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Level1`
--

LOCK TABLES `Level1` WRITE;
/*!40000 ALTER TABLE `Level1` DISABLE KEYS */;
INSERT INTO `Level1` VALUES (1,'Słodycze'),(2,'Auto'),(3,'Żywność'),(4,'Napoje'),(5,'Chemia'),(6,'Ubrania'),(7,'Harda');
/*!40000 ALTER TABLE `Level1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Level2`
--

DROP TABLE IF EXISTS `Level2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Level2` (
  `idLevel2` int(11) NOT NULL AUTO_INCREMENT,
  `nameLevel2` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `idParent2` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLevel2`),
  UNIQUE KEY `idLevel2_UNIQUE` (`idLevel2`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Level2`
--

LOCK TABLES `Level2` WRITE;
/*!40000 ALTER TABLE `Level2` DISABLE KEYS */;
INSERT INTO `Level2` VALUES (1,'Cukierki',1),(2,'Czekolada',1);
/*!40000 ALTER TABLE `Level2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Level3`
--

DROP TABLE IF EXISTS `Level3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Level3` (
  `idLevel3` int(11) NOT NULL AUTO_INCREMENT,
  `nameLevel3` varchar(45) COLLATE utf8_polish_ci DEFAULT NULL,
  `idParent3` int(11) DEFAULT NULL,
  PRIMARY KEY (`idLevel3`),
  UNIQUE KEY `idLevel3_UNIQUE` (`idLevel3`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Level3`
--

LOCK TABLES `Level3` WRITE;
/*!40000 ALTER TABLE `Level3` DISABLE KEYS */;
INSERT INTO `Level3` VALUES (1,'Amelia biała',2);
/*!40000 ALTER TABLE `Level3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Shops`
--

DROP TABLE IF EXISTS `Shops`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `Shops` (
  `ShopID` int(11) NOT NULL AUTO_INCREMENT,
  `ShopName` varchar(20) CHARACTER SET utf8 DEFAULT NULL,
  `ShopAddress` varchar(45) CHARACTER SET utf8 DEFAULT NULL COMMENT 'as',
  `Icon` varchar(10) COLLATE utf8_polish_ci DEFAULT NULL,
  PRIMARY KEY (`ShopID`),
  UNIQUE KEY `ShopID_UNIQUE` (`ShopID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8 COLLATE=utf8_polish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Shops`
--

LOCK TABLES `Shops` WRITE;
/*!40000 ALTER TABLE `Shops` DISABLE KEYS */;
INSERT INTO `Shops` VALUES (1,'Auchan','Komorniki','auchan'),(2,'Auchan','King Cross','auchan'),(3,'Tesco','Górczyn','tesco'),(4,'Żabka','Fabryczna','zabka'),(5,'Mateo','Fabryczna','shop'),(6,'Biedronka','Koło ronda','biedronka'),(7,'Rossmann','Factory','rossmann'),(8,'Rossmann','Pajo','rossmann'),(9,'Pepco','Koło ronda','pepco');
/*!40000 ALTER TABLE `Shops` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-12-22  1:31:13
