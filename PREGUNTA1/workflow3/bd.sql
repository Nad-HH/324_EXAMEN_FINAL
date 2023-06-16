

CREATE TABLE inscripcion (
    idinscripcion int,
    ci VARCHAR(10),
    fecha_nac date,
    titulo_Academico varchar(30),
    nacionalidad varchar(30),
    departamento varchar(30),
    correo varchar(30),
    celular varchar(30),
    direccion varchar(30),
    grupo_sanguineo varchar(30),
    notramite int,
    estado varchar(30),
    PRIMARY KEY (idinscripcion)
);

create table flujocondicionante
(
    proceso varchar(3),
    si varchar(3),
    no varchar(3),
    id int,
    PRIMARY KEY (id)
);

insert into flujocondicionante values('P2','P4','P3',1);
insert into flujocondicionante values('P6','P4',null,2);
insert into flujocondicionante values('P4','P7',null,3);


create table flujoproceso
(
    flujo varchar(3),
    proceso varchar(3),
    procesosiguiente varchar(3),
    tipo varchar(1),
    rol varchar(15),
    formulario varchar(30),
    id int,
    PRIMARY KEY (id)
);


insert into flujoproceso values('F1',	'P1',	'P2',	'I',	'Estudiante',	'P1',1);
insert into flujoproceso values('F1',	'P2',	null,	'C',	'Kardex',	'P2',2);
insert into flujoproceso values('F1',	'P3',	'P5',	'P',	'Kardex',	'P3',3);
insert into flujoproceso values('F1',	'P4',	null,	'C',	'Kardex',	'P4',4);
insert into flujoproceso values('F1',	'P5',	'P6',	'P',	'Estudiante',	'P5',5);
insert into flujoproceso values('F1',	'P6',	null,	'C',	'Kardex',	'P6',8);
insert into flujoproceso values('F1',	'P7',	null,	'P',	'Kardex',	'P7',9);


create table  observacion (
  idobservacion int,
  notramite varchar(30),
  observacion varchar(100),
  PRIMARY KEY (idobservacion)
);


CREATE TABLE persona (
  id int,
  paterno VARCHAR(15),
  materno VARCHAR(15),
  nombre VARCHAR(15),
  ci VARCHAR(10),
  PRIMARY KEY (id)
);

INSERT INTO `persona` (`id`, `paterno`, `materno`, `nombre`, `ci`) VALUES
(1, 'HUANCA', 'HUAYLLIRI', 'NADYA', '1'),
(2, 'PEREZ', 'LOPEZ', 'JUAN', '2'),
(3, 'GUTIERREZ', 'FLORES', 'JUAN', '3'),
(4, 'FLORES ', 'RODRIGUEZ', 'PEDRO', '4'),
(5, 'SALAS', 'GUTIERREZ', 'ALDO', '5'),
(6, 'HUANCA', 'SALAS', 'MARIA', '6'),
(7, 'SALAS', 'GUTIERREZ', 'ROSA', '7'),
(8, 'ROJAS', 'LINO', 'PEPE', '8');
(9, 'RODRIGUEZ', 'LINO', 'CREMA', '9');

INSERT INTO `persona` (`id`, `paterno`, `materno`, `nombre`, `ci`) VALUES
(9, 'RODRIGUEZ', 'LINO', 'CREMA', '9'),
(10, 'SALAS', 'FLORES', 'MYTAD', '10');

INSERT INTO `persona` (`id`, `paterno`, `materno`, `nombre`, `ci`) VALUES
(11, 'RODRIGUEZ', 'LINO', 'CREMA', '11'),
(12, 'SALAS', 'FLORES', 'MYTAD', '12');

INSERT INTO usuarios (`ci`, `contrasenia`, `rol`) VALUES
(11, '1111', 'Estudiante'),
(12, '1212', 'Estudiante');

INSERT INTO `persona` (`id`, `paterno`, `materno`, `nombre`, `ci`) VALUES
(13, 'HUANCA', 'LINO', 'NADYA', '13'),
(14, 'LINO', 'FLORES', 'GISELA', '14');

INSERT INTO usuarios (`ci`, `contrasenia`, `rol`) VALUES
(13, '1313', 'Estudiante'),
(14, '1414', 'Estudiante');

INSERT INTO `persona` (`id`, `paterno`, `materno`, `nombre`, `ci`) VALUES
(15, 'HUANCA', 'RODRIGUEZ', 'ELBA', '15'),
(16, 'LINO', 'FLORES', 'NAIRA', '16');

INSERT INTO usuarios (`ci`, `contrasenia`, `rol`) VALUES
(15, '1515', 'Estudiante'),
(16, '1616', 'Estudiante');


create table seguimiento
(
notramite int,
flujo varchar(3),
proceso varchar(3),
fechainicio datetime,
fechafin datetime,
usuario varchar(20),
id int,
PRIMARY KEY (id)
);

create table tramite
(
notramite int,
ci int,
fecha date,
PRIMARY KEY (notramite)
);


CREATE TABLE usuarios (
  ci int,
  contrasenia VARCHAR(15),
   rol VARCHAR(15),
   PRIMARY KEY (ci)
);


INSERT INTO usuarios (`ci`, `contrasenia`, `rol`) VALUES
(1, '111', 'Estudiante'),
(2, '222', 'Estudiante'),
(3, '333', 'Kardex'),
(4, '444', 'Kardex'),
(5, '555', 'Estudiante'),
(6, '666', 'Estudiante'),
(7, '777', 'Kardex'),
(8, '888', 'Kardex');



INSERT INTO usuarios (`ci`, `contrasenia`, `rol`) VALUES
(9, '999', 'Estudiante'),
(10, '1010', 'Estudiante');




