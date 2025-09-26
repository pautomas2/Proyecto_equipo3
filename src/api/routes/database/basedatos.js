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
    /* Funcionarios Peluquería */
    {
      idUsuario: 1001,
      isAdmin: true,
      userName: "María González",
      isDisponible: true,
    },
    {
      idUsuario: 1002,
      isAdmin: false,
      userName: "Carlos Rodríguez",
      isDisponible: true,
    },
    {
      idUsuario: 1003,
      isAdmin: false,
      userName: "Sofía Martínez",
      isDisponible: true,
    },
    {
      idUsuario: 1004,
      isAdmin: false,
      userName: "Ana López",
      isDisponible: true,
    },

    /* Funcionarios Consultorio Dental */
    {
      idUsuario: 2001,
      isAdmin: true,
      userName: "Dr. Roberto Silva",
      isDisponible: true,
    },
    {
      idUsuario: 2002,
      isAdmin: false,
      userName: "Dra. Elena Vargas",
      isDisponible: true,
    },
    {
      idUsuario: 2003,
      isAdmin: false,
      userName: "Dr. Javier Morales",
      isDisponible: true,
    },
    {
      idUsuario: 2004,
      isAdmin: false,
      userName: "Laura Fernández",
      isDisponible: true,
    },
    {
      idUsuario: 2005,
      isAdmin: false,
      userName: "Carmen Díaz",
      isDisponible: true,
    },
  ],
};
