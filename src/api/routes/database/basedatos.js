/* Una base de datos hardcodeada por el momento, luego conectaremos con sql */
const basedatos = {
  empresas: [
    /* Registro de peluqueria */
    {
      nombre_empresa: "Peluqueria01",
      tipo_empresa: "Peluqueria",
      servicios: [101, 102, 103],
      funcionarios: [
        1001, 1002, 1003,
      ] /* No permite "numero octales" debemos usar min 3 digitos por id de user */,
    },
    /* Registro de dentista */
    {
      nombre_empresa: "Dentista01",
      tipo_empresa: "Dentista",
      servicios: [201, 202, 203],
      funcionarios: [2001, 2002, 2003],
    },
  ],
  servicios: [
    /* Servicios de peluqueria01 */
    {
      id_servicio: 101,
      nombreServicio: "Corte de Cabello",
      precio: 25,
      duracion:
        "00:45:00" /* A tener en cuenta: creo que nos puede dar error al consultar por el tipo de datos */,
    },
    {
      id_servicio: 102,
      nombreServicio: "Coloracion",
      precio: 60,
      duracion: "00:30:00",
    },
    {
      id_servicio: 103,
      nombreServicio: "Tratamientos Capilares",
      precio: 40,
      duracion: "00:30:00",
    },
    {
      id_servicio: 104,
      nombreServicio: "Peinado y Recogidos",
      precio: 35,
      duracion: "00:30:00",
    },
    {
      id_servicio: 105,
      nombreServicio: "Manicura y Pedicura",
      precio: 30,
      duracion: "00:30:00",
    },

    /* Servicios de dentista01 */
    {
      id_servicio: 201,
      nombreServicio: "Limpieza Dental",
      precio: 50,
      duracion: "00:30:00",
    },
    {
      id_servicio: 202,
      nombreServicio: "Blanqueamiento Dental",
      precio: 150,
      duracion: "00:30:00",
    },
    {
      id_servicio: 203,
      nombreServicio: "Ortodoncia",
      precio: 2000,
      duracion: "00:30:00",
    },
    {
      id_servicio: 204,
      nombreServicio: "Implantes Dentales",
      precio: 800,
      duracion: "00:30:00",
    },
    {
      id_servicio: 205,
      nombreServicio: "Endodoncia",
      precio: 120,
      duracion: "00:30:00",
    },
    {
      id_servicio: 206,
      nombreServicio: "Odontologia Estetica",
      precio: 300,
      duracion: "00:30:00",
    },
  ],

  funcionarios: [
    // Funcionarios Peluquería
    {
      idUsuario: 1001,
      nombre: "María González",
      cargo: "Dueña/Estilista Senior",
      especialidad: "Coloración",
      salario: 32000,
    },
    {
      idUsuario: 1002,
      nombre: "Carlos Rodríguez",
      cargo: "Estilista",
      especialidad: "Cortes masculinos",
      salario: 28000,
    },
    {
      idUsuario: 1003,
      nombre: "Sofía Martínez",
      cargo: "Manicurista",
      especialidad: "Uñas acrílicas",
      salario: 24000,
    },
    {
      idUsuario: 1004,
      nombre: "Ana López",
      cargo: "Recepcionista",
      especialidad: "Atención al cliente",
      salario: 20000,
    },

    // Funcionarios Consultorio Dental
    {
      idUsuario: 2001,
      nombre: "Dr. Roberto Silva",
      cargo: "Odontólogo General",
      especialidad: "Cirugía dental",
      salario: 75000,
    },
    {
      idUsuario: 2002,
      nombre: "Dra. Elena Vargas",
      cargo: "Ortodoncista",
      especialidad: "Ortodoncia",
      salario: 85000,
    },
    {
      idUsuario: 2003,
      nombre: "Dr. Javier Morales",
      cargo: "Endodoncista",
      especialidad: "Endodoncia",
      salario: 80000,
    },
    {
      idUsuario: 2004,
      nombre: "Laura Fernández",
      cargo: "Asistente Dental",
      especialidad: "Instrumentación",
      salario: 30000,
    },
    {
      idUsuario: 2005,
      nombre: "Carmen Díaz",
      cargo: "Recepcionista",
      especialidad: "Gestión de citas",
      salario: 22000,
    },
  ],
};
