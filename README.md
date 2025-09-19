<!-- 
- las instrucciones para iniciar la api con su correspondiente documentación.
- Las historias de usuario con su correspondiente actor, prioridad y si pertenece al minimo producto utilizable. 
-->

# EasyAgenda - Sistema de Gestión de Citas

Sistema de agenda digital para pequeñas empresas.

## Estructura del proyecto

- `/api` - Backend con Node.js/Express
- `/front` - Frontend con Angular (futuro desarrollo)
- `/bd` - Esquemas y scripts de base de datos

## Historias de usuario

#### HU001 - Registro de empresas
Actor: Empresa
Prioridad: Alta
MPV: Sí
Descripción: Como empresa, quiero registrarme en el sistema para poder gestionar mis citas.

#### HU002 - Login de usuarios
Actor: Empresa/Cliente
Prioridad: Alta
MPV: Sí
Descripción: Como usuario, quiero iniciar sesión para acceder a mis datos y funcionalidades.

#### HU003 - Creación de citas
Actor: Cliente
Prioridad: Alta
MPV: Sí
Descripción: Como cliente, quiero agendar una cita con una empresa para recibir sus servicios.

#### HU004 - Visualización de agenda
Actor: Empresa
Prioridad: Alta
MPV: Sí
Descripción: Como empresa, quiero ver mis citas en una vista semanal o listado para organizar mi tiempo.

#### HU005 - Gestión de datos de cliente
Actor: Sistema
Prioridad: Media
MPV: Sí
Descripción: Como sistema, debo almacenar la información de contacto y preferencias de los clientes.

#### HU006 - Sincronización con Google Calendar (Empresa)
Actor: Empresa
Prioridad: Media-Alta
MPV: Si
Descripción: Como empresa, quiero sincronizar mis citas programadas con Google Calendar para tener toda mi agenda centralizada y recibir recordatorios automáticos.

#### HU007 - Elección de proveedor del servicio
Actor: Cliente
Prioridad: Media
MPV: Sí
Descripción: Como cliente, quiero poder seleccionar qué persona específica de la empresa me brindará el servicio, para elegir según mi preferencia o especialidad.

Funcionalidades futuras (no MPV):

#### HU008 - Notificaciones avanzadas
Actor: Cliente/Empresa
Prioridad: Media
MPV: No
Descripción: Como usuario, quiero recibir recordatorios por correo o WhatsApp de mis citas.

#### HU009 - Integración con Google Calendar
Actor: Empresa/Cliente
Prioridad: Baja
MPV: No
Descripción: Como usuario, quiero sincronizar mis citas con Google Calendar.

#### HU010 - Sistema de pagos
Actor: Empresa/Cliente
Prioridad: Baja
MPV: No
Descripción: Como empresa, quiero recibir pagos en línea por mis servicios.

#### HU011 - Estadísticas de uso
Actor: Empresa
Prioridad: Baja
MPV: No
Descripción: Como empresa, quiero ver estadísticas sobre mis citas y clientes.

### Mínimo Producto Utilizable (MPV)

| ID    | Actor           | Descripción                        | Prioridad | MPV |
|-------|-----------------|------------------------------------|-----------|-----|
| HU001 | Empresa         | Registro de empresas               | Alta      | Sí  |
| HU002 | Empresa/Cliente | Login de usuarios                  | Alta      | Sí  |
| HU003 | Cliente         | Creación de citas                  | Alta      | Sí  |
| HU004 | Empresa         | Visualización de agenda            | Alta      | Sí  |
| HU005 | Sistema         | Gestión de datos de cliente        | Media     | Sí  |
| HU006 | Empresa         | Sincronización con Google Calendar | Media     | Sí  |
| HU007 | Cliente         | Elección de proveedor del servicio | Media     | Sí  |

### Funcionalidades futuras

| ID    | Actor           | Descripción                        | Prioridad  | MPV |
|-------|-----------------|------------------------------------|------------|-----|
| HU008 | Cliente/Empresa | Notificaciones avanzadas           | Media      | No  |
| HU009 | Empresa/Cliente | Integración con Google Calendar    | Baja       | No  |
| HU010 | Empresa/Cliente | Sistema de pagos                   | Baja       | No  |
| HU011 | Empresa         | Estadísticas de uso                | Baja       | No  |


## Instrucciones para iniciar la API

1. Navegar a la carpeta `/api`
2. Ejecutar `npm install` para instalar dependencias
3. Ejecutar `npm start` para iniciar el servidor
4. La API estará disponible en `http://localhost:3000`

### Documentación de la API

#### GET /
Devuelve un objeto JSON con la propiedad `root` establecida en `true`.

**Response:**
```json
{
  "root": true
}