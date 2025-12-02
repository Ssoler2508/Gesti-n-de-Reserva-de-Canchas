# Tarea 2 — Definición de Entidades y Roles

Resumen del listado de entidades principales, campos y roles del sistema «Gestión de Reserva de Canchas».

Entidades principales

- **Usuario**
  - `id` (PK, integer, autoincrement)
  - `name` (string)
  - `email` (string, unique)
  - `passwordHash` (string)
  - `role` (enum: `user`, `admin`, `editor`)
  - `phone` (string, opcional)
  - `createdAt`, `updatedAt`

- **Cancha**
  - `id` (PK)
  - `name` (string)
  - `type` (string, e.g., futsal, tenis)
  - `pricePerHour` (decimal)
  - `status` (enum: `available`, `maintenance`, `inactive`)
  - `location` (string, opcional)
  - `createdAt`, `updatedAt`

- **Reservacion**
  - `id` (PK)
  - `usuarioId` (FK -> User.id)
  - `canchaId` (FK -> Court.id)
  - `startAt` (datetime)
  - `endAt` (datetime)
  - `status` (enum: `reservada`, `cancelada`, `completada`)
  - `total` (decimal)
  - `createdAt`, `updatedAt`

- **Pago**
  - `id` (PK)
  - `reservacionId` (FK -> Reservacion.id)
  - `amount` (decimal)
  - `status` (enum: `pending`, `paid`, `failed`, `refunded`)
  - `method` (string, e.g., `card`, `cash`, `mercadopago`)
  - `transactionRef` (string, opcional)
  - `createdAt`, `updatedAt`

Entidades adicionales opcionales

- **Role** (opcional si se prefieren roles en tabla separada)
- **Schedule** o **TimeSlot** (para modelar franjas horarias reutilizables)

Roles del sistema y permisos básicos

- **admin**
  - Permisos: CRUD completo sobre canchas, usuarios, reservas y pagos; puede ver reportes y ejecutar seed/migrations en dev.

- **user**
  - Permisos: Registrar cuenta, ver canchas, crear/cancelar reservas propias, ver pagos propios.
