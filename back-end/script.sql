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
  `name` VARCHAR(100) NOT NULL,
  `cover` VARCHAR(200) NOT NULL DEFAULT '',
  PRIMARY KEY (`villas_id`)
  UNIQUE KEY `name` (name)
) ENGINE = InnoDB;

CREATE TABLE IF NOT EXISTS `MyconianLuxury`.`villas_imgs` (
  `villas_imgs_id` INT NOT NULL AUTO_INCREMENT,
  `url` VARCHAR(200) NOT NULL DEFAULT '',
  `villas_id` VARCHAR(45),
  PRIMARY KEY (`villas_imgs_id`)
  FOREIGN KEY (villas_id) REFERENCES villas(villas_id)
) ENGINE = InnoDB;

INSERT INTO MyconianLuxury.villas (name, cover) 
VALUES 
('vila 1', 'http://localhost:3001/images/vila1'),
('vila 2', 'http://localhost:3001/images/vila2'),
('vila 3', 'http://localhost:3001/images/vila3'),
('vila 4', 'http://localhost:3001/images/vila4'),
('vila 5', 'http://localhost:3001/images/vila5');
