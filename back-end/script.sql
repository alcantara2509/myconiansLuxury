CREATE SCHEMA IF NOT EXISTS `MyconianLuxury` ;

USE `MyconianLuxury` ;

CREATE TABLE IF NOT EXISTS `MyconianLuxury`.`blog` (
  `post_id` INT NOT NULL AUTO_INCREMENT,
  `author` VARCHAR(45) NOT NULL,
  `date` VARCHAR(45) NOT NULL,
  `category` VARCHAR(45) NOT NULL,
  `tags` VARCHAR(100),
  `cover` VARCHAR(45),
  `title` VARCHAR(100) NOT NULL,
  `description` VARCHAR(500) NOT NULL,
  `text1` VARCHAR(1000) NOT NULL,
  `image1` VARCHAR(45),
  `text2` VARCHAR(1000),
  `image2` VARCHAR(45),
  `text3` VARCHAR(1000),
  PRIMARY KEY (`post_id`))
ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `MyconianLuxury`.`villas` (
  `villas_id` INT NOT NULL AUTO_INCREMENT,
  `villas_name` VARCHAR(100) NOT NULL,
  `cover` VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`villas_id`),
  UNIQUE KEY `villas_name` (villas_name)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `MyconianLuxury`.`villas_imgs` (
  `villas_imgs_id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(200) NOT NULL DEFAULT '',
  `villas_name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`villas_imgs_id`)
) ENGINE = InnoDB;

INSERT INTO MyconianLuxury.villas (villas_name, cover) 
VALUES 
('Aphrodite', 'http://localhost:3001/villas/cover/Aphrodite.jpeg'),
('Artemis', 'http://localhost:3001/villas/cover/Artemis.jpg'),
('Astrea', 'http://localhost:3001/villas/cover/Astrea.jpg'),
('Athena', 'http://localhost:3001/villas/cover/Athena.jpg'),
('Bia', 'http://localhost:3001/villas/cover/Bia.jpg'),
('Brizo', 'http://localhost:3001/villas/cover/Brizo.jpg'),
('Calypso', 'http://localhost:3001/villas/cover/Calypso.jpg'),
('Cybele', 'http://localhost:3001/villas/cover/Cybele.jpg'),
('Demeter', 'http://localhost:3001/villas/cover/Demeter.jpg'),
('Dione', 'http://localhost:3001/villas/cover/Dione.jpg'),
('Electra', 'http://localhost:3001/villas/cover/Electra.jpg'),
('Eos', 'http://localhost:3001/villas/cover/Eos.jpg'),
('Erato', 'http://localhost:3001/villas/cover/Erato.jpg'),
('Gaia', 'http://localhost:3001/villas/cover/Gaia.jpg'),
('Harmonia', 'http://localhost:3001/villas/cover/Harmonia.jpg'),
('Hera', 'http://localhost:3001/villas/cover/Hera.jpg'),
('Irene', 'http://localhost:3001/villas/cover/Irene.jpg'),
('Iris', 'http://localhost:3001/villas/cover/Iris.jpg'),
('Keres', 'http://localhost:3001/villas/cover/Keres.jpg'),
('Maia', 'http://localhost:3001/villas/cover/Maia.jpg'),
('Nix', 'http://localhost:3001/villas/cover/Nix.jpg'),
('Persephone', 'http://localhost:3001/villas/cover/Persephone.jpg'),
('Phoebe', 'http://localhost:3001/villas/cover/Phoebe.jpg'),
('Selene', 'http://localhost:3001/villas/cover/Selene.jpg'),
('Thalassa', 'http://localhost:3001/villas/cover/Thalassa.jpg');

INSERT INTO MyconianLuxury.villas_imgs (url, villas_name) 
VALUES 
('http://localhost:3001/villas/Aphrodite/Aphrodite1.jpg', 'Aphrodite'),
('http://localhost:3001/villas/Astrea/Astrea1.jpg', 'Astrea'),
('http://localhost:3001/villas/Astrea/Astrea2.jpg', 'Astrea');