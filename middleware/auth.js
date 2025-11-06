const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {
    // intentar varios lugares donde el token puede venir
    const authHeader = req.headers['authorization'];
    const xToken = req.headers['x-access-token'];
    const queryToken = req.query && req.query.token;

    // debug logs temporales
    console.log('auth middleware - authorization header:', authHeader);
    console.log('auth middleware - x-access-token header:', xToken);
    console.log('auth middleware - query token:', queryToken);

    const raw = authHeader || xToken || queryToken;
    if (!raw) return res.status(401).json({ error: 'Acceso denegado. Falta token.' });

    // aceptar formato: 'Bearer <token>' o solo el token
    const token = typeof raw === 'string' && raw.startsWith('Bearer ') ? raw.split(' ')[1] : raw;

    try {
        const verificado = jwt.verify(token, 'clave_secreta');
        req.usuario = verificado;
        console.log('auth middleware - token verificado:', verificado);
        next();
    } catch (error) {
        console.error('auth middleware - error al verificar token:', error && error.message);
        res.status(401).json({ error: 'Token inválido o expirado', details: error && error.message });
    }
}

module.exports = authMiddleware;