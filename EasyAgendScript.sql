drop table if exists empresa cascade;
drop table if exists funcionarios cascade;
drop table if exists servicios cascade;
drop table if exists agenda cascade;

create table funcionarios (
	idUsuario integer not null primary key,
	isAdmin boolean not null,
	userName varchar (100) not null,
	isDisponible boolean not null
);
create table servicios (
	id_servicio integer not null primary key,
	nombreServicio varchar (100) not null,
	precio integer not null,
	duracion time not null
);

create table empresa (
	nombre_empresa varchar (100) not null primary key,
	tipo_empresa varchar (100) not null,
	idServicio integer not null,
	idFuncionarios integer not null,
	foreign key (idServicio) references servicios(id_servicio),
    foreign key (idFuncionarios) references funcionarios(idUsuario)
);

create table agenda (
	turnos time not null,
	empleadoId integer not null,
	empleadoDisponible boolean not null,
	foreign key (empleadoId) references funcionarios(idUsuario),
	constraint hora_empleado unique (turnos, empleadoId)
);
/* Insert de datos */
INSERT INTO funcionarios (idUsuario, isAdmin, userName, isDisponible) VALUES
(1001, true, 'María González', true),
(1002, false, 'Carlos Rodríguez', true),
(1003, false, 'Sofía Martínez', true),
(1004, false, 'Ana López', true),
(2001, true, 'Dr. Roberto Silva', true),
(2002, false, 'Dra. Elena Vargas', true),
(2003, false, 'Dr. Javier Morales', true),
(2004, false, 'Laura Fernández', true),
(2005, false, 'Carmen Díaz', true);