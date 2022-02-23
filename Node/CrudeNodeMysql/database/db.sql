-- Creating the database
CREATE SCHEMA `bd_usuarios_roles` ;

-- Inicializando la tabla 
use bd_usuarios_roles;

-- Creando tabla usuarios
CREATE TABLE `bd_usuarios_roles`.`users` (
  `id_users` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `phone` INT NOT NULL,
  `username` VARCHAR(45) NULL,
  `password` MULTILINESTRING NULL,
  PRIMARY KEY (`id_users`));


-- creando tabla roles 
CREATE TABLE `bd_usuarios_roles`.`roles` (
  `id_roles` INT NOT NULL,
  `name` VARCHAR(45) NOT NULL,
  `description` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id_roles`));

  -- Creando tabla intermedia con foreing keys

