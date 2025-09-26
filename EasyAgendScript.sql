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