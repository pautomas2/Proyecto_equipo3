<!--
- las instrucciones para iniciar la api con su correspondiente documentación.
- Las historias de usuario con su correspondiente actor, prioridad y si pertenece al minimo producto utilizable.
-->

# EasyAgenda - Sistema de Gestión de Citas

Sistema de agenda digital para pequeñas empresas.

## Estructura del proyecto

- `/api` - Backend con Node.js
- `/front` - Frontend con Angular (futuro desarrollo)
- `/bd` - Esquemas y scripts de base de datos

## Historias de usuario

#### HU001 - Registro de empresas

Actor: Empresa
Prioridad: Alta
MPV: Sí
Descripción: Como empresa, quiero registrarme en el sistema para poder gestionar mis citas.

#### HU002 - Registro de clientes

Actor: Cliente
Prioridad: Alta
MPV: Sí
Descripción: Como cliente, quiero poder registrarme proporcionando mis datos de contacto y el servicio requerido.

#### HU003 - Login de administrador de usuarios

Actor: Empresa
Prioridad: Alta
MPV: Sí
Descripción: Como empresa, quiero iniciar sesión con un usuario con el rol de administrados para acceder a mis datos y funcionalidades, respectivos de cada funcionario (usuarios no administradores).

#### HU004 - Visualización de Agenda Disponible

Actor: Cliente
Prioridad: Alta
MPV: Sí
Descripción:
Como cliente, quiero poder ver la agenda de disponibilidad de una empresa, incluyendo los horarios libres y ocupados, para poder planificar mi cita de manera informada.

#### HU005 - Agendamiento de Cita

Actor: Cliente
Prioridad: Alta
MPV: Sí
Descripción:
Como cliente, quiero seleccionar un horario disponible en la agenda y confirmar mi cita.

#### HU006 - Visualización de agenda como empresa

Actor: Empresa
Prioridad: Alta
MPV: Sí
Descripción: Como empresa, quiero ver mis citas en una vista semanal o listado para organizar mi tiempo.

#### HU007 - Sincronización con Google Calendar (Empresa)

Actor: Empresa
Prioridad: Media-Alta
MPV: Si
Descripción: Como empresa, quiero sincronizar mis citas programadas con Google Calendar para tener toda mi agenda centralizada y recibir recordatorios automáticos.

#### HU008 - Elección de proveedor del servicio

Actor: Cliente
Prioridad: Media
MPV: Sí
Descripción: Como cliente, quiero poder seleccionar qué persona específica de la empresa me brindará el servicio, para elegir según mi preferencia o especialidad.

Funcionalidades futuras (no MPV):

#### HU009 - Notificaciones avanzadas

Actor: Cliente
Prioridad: Media
MPV: No
Descripción: Como usuario, quiero recibir recordatorios por correo o WhatsApp de mis citas.

#### HU010 - Integración con Google Calendar

Actor: Cliente
Prioridad: Baja
MPV: No
Descripción: Como usuario, quiero sincronizar mis citas con Google Calendar.

#### HU011 - Sistema de pagos

Actor: Empresa
Prioridad: Baja
MPV: No
Descripción: Como empresa, quiero recibir pagos en línea por mis servicios.

#### HU012 - Estadísticas de uso

Actor: Empresa
Prioridad: Baja
MPV: No
Descripción: Como empresa, quiero ver estadísticas sobre mis citas y clientes.

### Mínimo Producto Utilizable (MPV)

| ID    | Actor   | Descripción                          | Prioridad  | MPV |
| ----- | ------- | ------------------------------------ | ---------- | --- |
| HU001 | Empresa | Registro de empresas                 | Alta       | Sí  |
| HU002 | Cliente | Registro de clientes                 | Alta       | Sí  |
| HU003 | Empresa | Login de administrador de usuarios   | Alta       | Sí  |
| HU004 | Cliente | Visualización de Agenda Disponible   | Alta       | Sí  |
| HU005 | Cliente | Agendamiento de Cita                 | Alta       | Sí  |
| HU006 | Empresa | Visualización de agenda como empresa | Alta       | Sí  |
| HU007 | Empresa | Sincronización con Google Calendar   | Media-alta | Sí  |
| HU008 | Cliente | Elección de proveedor del servicio   | Media      | Sí  |

### Funcionalidades futuras

| ID    | Actor           | Descripción                     | Prioridad | MPV |
| ----- | --------------- | ------------------------------- | --------- | --- |
| HU009 | Cliente/Empresa | Notificaciones avanzadas        | Media     | No  |
| HU010 | Empresa/Cliente | Integración con Google Calendar | Baja      | No  |
| HU011 | Empresa/Cliente | Sistema de pagos                | Baja      | No  |
| HU012 | Empresa         | Estadísticas de uso             | Baja      | No  |

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
```
