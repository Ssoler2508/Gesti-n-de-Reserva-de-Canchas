# Tarea 4 — Setup mínimo del Proyecto (Backend)

Este archivo resume el "setup mínimo obligatorio" para añadir el backend en Node.js + Express y preparar Sequelize.

Estructura mínima sugerida

```
server/
  package.json
  .env
  src/
    index.js (o app.js)
    config/
      config.js
    models/
      index.js
      user.js
      court.js
      reservation.js
      payment.js
    migrations/
    seeders/
    controllers/
    routes/
    middleware/
```

Dependencias mínimas

- `express`
- `sequelize`
- `sequelize-cli` (opcional para migraciones)
- driver de BD: `pg` (Postgres) o `mysql2` (MySQL) o `sqlite3` (dev)
- `dotenv`
- `bcrypt` (hash de contraseñas)
- `jsonwebtoken` (JWT)
- `cors`
- `nodemon` como devDependencia

Variables de entorno recomendadas (`.env`)

- `NODE_ENV=development`
- `PORT=4000`
- `DB_HOST` / `DB_PORT` / `DB_USER` / `DB_PASS` / `DB_NAME`
- `JWT_SECRET`

Scripts útiles en `package.json`

- `start`: `node src/index.js`
- `dev`: `nodemon src/index.js`
- `migrate`: `npx sequelize db:migrate`
- `seed`: `npx sequelize db:seed:all`

Notas de implementación rápida

- Inicializar el proyecto: `npm init -y` dentro de `server/`.
- Configurar Sequelize: crear `src/models/index.js` que lea `process.env` y exporte la instancia y los modelos.
- Migraciones: generar migraciones para cada modelo (users, courts, reservations, payments).
- Autenticación: rutas `/auth/register`, `/auth/login`; middleware `authenticate` para proteger endpoints.
- Seguridad y validaciones: usar `express-validator` o validaciones en los modelos para campos obligatorios.

Integración con el front (playtime)

- Habilitar CORS en el backend para el dominio/local del front. Ejemplo básico:

```js
const cors = require('cors')
app.use(cors({ origin: 'http://localhost:5173' }))
```

- Alternativa: en `playtime/package.json` añadir `proxy` apuntando al backend durante desarrollo.

Siguientes pasos recomendados

- Decidir DB (Postgres recomendado).
- Confirmar si prefieres JavaScript o TypeScript para el backend.
- Crear las migraciones y un seeder con un usuario admin y 2-3 canchas de ejemplo.

