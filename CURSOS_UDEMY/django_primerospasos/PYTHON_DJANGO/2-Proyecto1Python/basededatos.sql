CREATE DATEBASE IF NOT EXISTS master_python;
USE master_python;

CREATE TABLE IF NOT EXISTS usuarios(
    id INT(255) AUTO_INCREMENT,
    nombre VARCHAR(255),
    apellidos VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    fecha_registro DATE NOT NULL,
    CONSTRAINT pk_usuario PRIMARY KEY(id),
    CONSTRAINT email_unique UNIQUE(email)
) ENGINE=InnoDB;

CREATE TABLE IF NOT EXISTS notas(
    id INT(255) AUTO_INCREMENT,
    usuario_id INT(255) NOT NULL,
    titulo VARCHAR(255) NOT NULL,
    descripcion TEXT NOT NULL,
    fecha DATE NOT NULL,
    CONSTRAINT fk_usuario FOREIGN KEY(usuario_id) REFERENCES usuarios(id),
    CONSTRAINT pk_nota PRIMARY KEY(id)    
) ENGINE=InnoDB;