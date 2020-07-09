DROP DATABASE IF EXISTS taco_db;
CREATE DATABASE taco_db;
USE taco_db;

DROP TABLE IF EXISTS `Restaurants`;
DROP TABLE IF EXISTS `Cuisines`;
DROP TABLE IF EXISTS `Users`;
DROP TABLE IF EXISTS `Reviews`;

CREATE TABLE IF NOT EXISTS `Cuisines` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL, 
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `Users` (
    `id` INTEGER NOT NULL auto_increment , 
    `email` VARCHAR(255) NOT NULL,
    `fullName` varchar(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL, 
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (`id`));

CREATE TABLE IF NOT EXISTS `Restaurants` (
    `id` INTEGER NOT NULL auto_increment , 
    `name` VARCHAR(255) NOT NULL, 
    `cuisine` TEXT NOT NULL, 
    `mustHave` TEXT NOT NULL, 
    `location` TEXT NOT NULL, 
    `price` TEXT NOT NULL, 
    `rating` TEXT NOT NULL, 
    `createdAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    `updatedAt` DATETIME DEFAULT CURRENT_TIMESTAMP, 
    `CuisineId` INTEGER NOT NULL, 
    `UserId` INTEGER NOT NULL, 
    PRIMARY KEY (`id`), 
    FOREIGN KEY (`CuisineId`) REFERENCES `Cuisines` (`id`) 
        ON DELETE NO ACTION ON UPDATE CASCADE, 
        
    FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) 
        ON DELETE NO ACTION ON UPDATE CASCADE);

CREATE TABLE IF NOT EXISTS `Reviews` (
    `id` INTEGER NOT NULL auto_increment , 
    `ratings` VARCHAR(255) NOT NULL, 
    PRIMARY KEY (`id`), 
    FOREIGN KEY (`UserId`) REFERENCES `Users` (`id`) 
        ON DELETE NO ACTION ON UPDATE CASCADE);
    
        
