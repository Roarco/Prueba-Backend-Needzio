CREATE SCHEMA IF NOT EXISTS PruebaBackendNeedzio
USE PruebaBackendNeedzio;


CREATE TABLE IF NOT EXISTS TypeDocument_TB (
    id INT NOT NULL AUTO_INCREMENT,
    NameTypeDocument VARCHAR(50) NOT NULL UNIQUE,
     KEY (id)
);


CREATE TABLE IF NOT EXISTS AppUser_TB (
    id INT NOT NULL AUTO_INCREMENT,
    LastName VARCHAR(20) NOT NULL,
    Name VARCHAR(20) NOT NULL,
    isMiltar BIT,
    TimeCreate DATETIME NOT NULL,
    isTemporal BIT ,
    username VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(100) NOT NULL,
    email VARCHAR(50) NOT NULL UNIQUE,
    emailVerified BIT ,
    verificationToken VARCHAR(100) ,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS Country_TB (
    id INT NOT NULL AUTO_INCREMENT,
    CountryCode VARCHAR(4) NOT NULL UNIQUE,
    CountryName VARCHAR(100) NOT NULL UNIQUE,
    PRIMARY KEY (id)
);


CREATE TABLE IF NOT EXISTS UserDocument_TB (
    UserID INT NOT NULL,
    Document VARCHAR(20) NOT NULL UNIQUE,
    TypeDocumentID INT NOT NULL,
    PlaceExpedition VARCHAR(60) NOT NULL,
    DateExpedition DATETIME NOT NULL,
    PRIMARY KEY (UserID, TypeDocumentID),
    FOREIGN KEY (UserID) REFERENCES AppUser_TB(id),
    FOREIGN KEY (TypeDocumentID) REFERENCES TypeDocument_TB(id)
);


CREATE TABLE IF NOT EXISTS ContactInfo_TB (
    id INT NOT NULL AUTO_INCREMENT,
    UserID INT NOT NULL,
    Address VARCHAR(60) NOT NULL,
    CountryID INT NOT NULL,
    City VARCHAR(50) NOT NULL,
    Phone VARCHAR(20) NOT NULL UNIQUE,
    CelPhone VARCHAR(20) NOT NULL,
    EmergencyName VARCHAR(100) NOT NULL,
    EmergencyPhone VARCHAR(20) NOT NULL,
    PRIMARY KEY (id),
    FOREIGN KEY (UserID) REFERENCES AppUser_TB(id),
    FOREIGN KEY (CountryID) REFERENCES Country_TB(id)
);


-- insert data in TypeDocument_TB
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Cedula de Ciudadania');
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Cedula Extranjera');
INSERT INTO TypeDocument_TB (NameTypeDocument) VALUES ('Pasaporte');

-- insert data in Country_TB
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('57', 'Colombia');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('1', 'Canada');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('52', 'Mexico');
INSERT INTO Country_TB (CountryCode, CountryName) VALUES ('34', 'España');

