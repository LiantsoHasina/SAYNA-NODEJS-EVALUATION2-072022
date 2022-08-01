-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema sayna
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema sayna
-- -----------------------------------------------------
DROP SCHEMA `sayna`
CREATE SCHEMA IF NOT EXISTS `sayna` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `sayna` ;

-- -----------------------------------------------------
-- Table `sayna`.`forms`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `sayna`.`forms` (
  `id_forms` INT NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(45) NULL DEFAULT NULL,
  `lastName` VARCHAR(45) NULL DEFAULT NULL,
  `testimony` VARCHAR(500) NOT NULL,
  `note` INT NULL DEFAULT NULL,
  `modules` ENUM('Frontend', 'Backend', 'Marketing', 'UX-UI') NOT NULL,
  PRIMARY KEY (`id_forms`, `testimony`))
ENGINE = InnoDB
AUTO_INCREMENT = 8
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
