# Tarea 3 — Diseño de la Base de Datos

Este documento describe las entidades, relaciones y las llaves primarias/foráneas para el sistema.

Entidades (resumen)

- `usuarios` (Usuario)
- `canchas` (Cancha)
- `reservaciones` (Reservacion)
- `pagos` (Pago)

Relaciones principales

- `Usuario` 1:N `Reservacion` (un usuario puede tener muchas reservas)
- `Cancha` 1:N `Reservacion` (una cancha puede tener muchas reservas)
- `Reservacion` 1:1 `Pago` (una reserva puede tener un pago asociado)

Llaves primarias y foráneas

- `usuarios.id` (PK)
- `canchas.id` (PK)
- `reservaciones.id` (PK)
  - `reservaciones.usuarioId` -> `usuario.id` (FK)
  - `reservations.canchaId` -> `canchas.id` (FK)
- `pagos.id` (PK)
  - `pagos.reservacionId` -> `reservacions.id` (FK)

Consideraciones de integridad y restricciones

- Forzar `ON DELETE CASCADE` desde `usuarios -> reservaciones` y `canchas -> reservacions` depende de la política; por defecto recomiendo `RESTRICT` o `SET NULL` para evitar pérdida accidental de datos.
- Un índice compuesto en `reservations(courtId, startAt, endAt)` ayuda a consultar disponibilidad por franja horaria.

Diagrama ER (Mermaid)

    USUARIOS {
        INTEGER id PK
        STRING name
        STRING email
        STRING passwordHash
        STRING role
    }
    CANCHAS {
        INTEGER id PK
        STRING name
        STRING type
        DECIMAL pricePerHour
    }
    RESERVACIONES {
        INTEGER id PK
        INTEGER userId FK
        INTEGER courtId FK
        DATETIME startAt
        DATETIME endAt
        STRING status
        DECIMAL total
    }
    PAGOS {
        INTEGER id PK
        INTEGER reservationId FK
        DECIMAL amount
        STRING status
    }

    USUARIOS ||--o{ RESERVACIONES : "has"
    CANCHAS ||--o{ RESERVACIONES : "has"
    RESERVACIONES ||--|| PAGOS : "has"
```
