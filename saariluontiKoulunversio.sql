-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema saaristo
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `saaristo` ;

-- -----------------------------------------------------
-- Schema saaristo
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `saaristo` ;
USE `saaristo` ;

-- -----------------------------------------------------
-- Table `saaristo`.`Pelaaja`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `saaristo`.`Pelaaja` ;

CREATE TABLE IF NOT EXISTS `saaristo`.`Pelaaja` (
  `nimimerkki` VARCHAR(45) NOT NULL,
  `salasana` VARCHAR(45) NOT NULL,
  `rahamaara` INT NOT NULL,
  PRIMARY KEY (`nimimerkki`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `saaristo`.`Saari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `saaristo`.`Saari` ;

CREATE TABLE IF NOT EXISTS `saaristo`.`Saari` (
  `saariID` INT NOT NULL AUTO_INCREMENT,
  `saarenNimi` VARCHAR(255) NOT NULL,
  `saarenURL` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`saariID`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `saaristo`.`Pelaaja_vieraillut_Saari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `saaristo`.`Pelaaja_vieraillut_Saari` ;

CREATE TABLE IF NOT EXISTS `saaristo`.`Pelaaja_vieraillut_Saari` (
  `Pelaaja_nimimerkki` VARCHAR(45) NOT NULL,
  `Saari_saariID` INT NOT NULL,
  PRIMARY KEY (`Pelaaja_nimimerkki`, `Saari_saariID`),
  INDEX `fk_Pelaaja_has_Saari_Saari1_idx` (`Saari_saariID` ASC),
  INDEX `fk_Pelaaja_has_Saari_Pelaaja_idx` (`Pelaaja_nimimerkki` ASC),
  CONSTRAINT `fk_Pelaaja_has_Saari_Pelaaja`
    FOREIGN KEY (`Pelaaja_nimimerkki`)
    REFERENCES `saaristo`.`Pelaaja` (`nimimerkki`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Pelaaja_has_Saari_Saari1`
    FOREIGN KEY (`Saari_saariID`)
    REFERENCES `saaristo`.`Saari` (`saariID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `saaristo`.`Saari_reitti_Saari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `saaristo`.`Saari_reitti_Saari` ;

CREATE TABLE IF NOT EXISTS `saaristo`.`Saari_reitti_Saari` (
  `Saari_saarestaID` INT NOT NULL,
  `Saari_saareenID` INT NOT NULL,
  `hinta` INT NOT NULL,
  PRIMARY KEY (`Saari_saarestaID`, `Saari_saareenID`),
  INDEX `fk_Saari_has_Saari_Saari2_idx` (`Saari_saareenID` ASC),
  INDEX `fk_Saari_has_Saari_Saari1_idx` (`Saari_saarestaID` ASC),
  CONSTRAINT `fk_Saari_has_Saari_Saari1`
    FOREIGN KEY (`Saari_saarestaID`)
    REFERENCES `saaristo`.`Saari` (`saariID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Saari_has_Saari_Saari2`
    FOREIGN KEY (`Saari_saareenID`)
    REFERENCES `saaristo`.`Saari` (`saariID`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;


-- -----------------------------------------------------
-- Data for table `saaristo`.`Pelaaja`
-- -----------------------------------------------------
START TRANSACTION;
USE `saaristo`;
INSERT INTO `saaristo`.`Pelaaja` (`nimimerkki`, `salasana`, `rahamaara`) VALUES ('Leila', 'salainen', 1600);

COMMIT;


-- -----------------------------------------------------
-- Data for table `saaristo`.`Saari`
-- -----------------------------------------------------
START TRANSACTION;
USE `saaristo`;
INSERT INTO `saaristo`.`Saari` (`saariID`, `saarenURL`, `saarenNimi`) VALUES (1, 'saari1', 'Aarresaari');
INSERT INTO `saaristo`.`Saari` (`saariID`, `saarenURL`, `saarenNimi`) VALUES (2, 'saari2', 'seikkailujen saari');

COMMIT;


-- -----------------------------------------------------
-- Data for table `saaristo`.`Saari_reitti_Saari`
-- -----------------------------------------------------
START TRANSACTION;
USE `saaristo`;
INSERT INTO `saaristo`.`Saari_reitti_Saari` (`Saari_saarestaID`, `Saari_saareenID`, `hinta`) VALUES (1, 2, '100');
INSERT INTO `saaristo`.`Saari_reitti_Saari` (`Saari_saarestaID`, `Saari_saareenID`, `hinta`) VALUES (2, 1, '100');

COMMIT;


grant all privileges on saaristo.* to 'saku'@'localhost';

