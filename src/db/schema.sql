--creamos un schema en mysql PruebaBackendNeedzio
CREATE SCHEMA IF NOT EXISTS PruebaBackendNeedzio
USE PruebaBackendNeedzio;

--creamos la tabla TypeDocument_TB con los siguientes campos
-- 1- id (primary key)
-- 2- NameTypeDocument (varchar 50)
CREATE TABLE IF NOT EXISTS TypeDocument_TB (
    id INT NOT NULL AUTO_INCREMENT,
    NameTypeDocument VARCHAR(50) NOT NULL,
     KEY (id)
);


--creamos la tabla AppUser_TB con los siguientes campos
-- 1- id (primary key)
-- 2- LastName (varchar 20)
-- 3- Name (varchar 20)
-- 4- isMiltar (bit)
-- 5- TimeCreate (datetime)
-- 6- isTemporal (bit)
-- 7- username (varchar 50)
-- 8- password (varchar 100)
-- 9- email (varchar 50)
-- 10- emailVerified (bit)
-- 11- verificationToken (varchar 100)

CREATE TABLE IF NOT EXISTS AppUser_TB (
    id INT NOT NULL AUTO_INCREMENT,
    LastName VARCHAR(20) NOT NULL,
    Name VARCHAR(20) NOT NULL,
    isMiltar BIT,
    TimeCreate DATETIME NOT NULL,
    isTemporal BIT ,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL,
    emailVerified BIT ,
    verificationToken VARCHAR(100) ,
    PRIMARY KEY (id)
);

--creamos la tabla Country_TB con los siguientes campos
-- 1- id (primary key)
-- 2- CountryCode (varchar 4)
-- 3- CountryName (varchar 100)

CREATE TABLE IF NOT EXISTS Country_TB (
    id INT NOT NULL AUTO_INCREMENT,
    CountryCode VARCHAR(4) NOT NULL,
    CountryName VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);


--creamos la tabla UserDocument_TB con los siguientes campos
-- 1- UserID int (foreign key)
-- 2- Document varchar 20 w
-- 3- TypeDocumentID int (foreign key)
-- 4- PlaceExpedition varchar 60
-- 5- DateExpedition datetime

CREATE TABLE IF NOT EXISTS UserDocument_TB (
    UserID INT NOT NULL,
    Document VARCHAR(20) NOT NULL,
    TypeDocumentID INT NOT NULL,
    PlaceExpedition VARCHAR(60) NOT NULL,
    DateExpedition DATETIME NOT NULL,
    PRIMARY KEY (UserID, TypeDocumentID),
    FOREIGN KEY (UserID) REFERENCES AppUser_TB(id),
    FOREIGN KEY (TypeDocumentID) REFERENCES TypeDocument_TB(id)
);

--creamos la tabla ContactInfo_TB con los siguientes campos
-- 1- id (primary key)
-- 2- UserID int (foreign key)
-- 3- Address varchar 60 w-#N°
-- 4- CountryID int (foreign key)
-- 5- City varchar 50
-- 6- Phone varchar 20 -d
-- 7- CelPhone varchar 20 -d
-- 9- EmergencyName varchar 100
-- 10- EmergencyPhone varchar 20

CREATE TABLE IF NOT EXISTS ContactInfo_TB (
    id INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL,
    Address VARCHAR(60) NOT NULL,
    CountryID INT NOT NULL,
    City VARCHAR(50) NOT NULL,
    Phone VARCHAR(20) NOT NULL,
    CelPhone VARCHAR(20) NOT NULL,
    EmergencyName VARCHAR(100) NOT NULL,
    EmergencyPhone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (UserID) REFERENCES AppUser_TB(id),
    FOREIGN KEY (CountryID) REFERENCES Country_TB(id)
);


-- insert data in TypeDocument_TB
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Cedula de Ciudadania');
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Cedula de Extranjeria');
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Pasaporte');
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Tarjeta de Identidad');

-- insert data in Country_TB
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('57', 'Colombia');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('1', 'Canada');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('52', 'Mexico');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('34', 'España');

