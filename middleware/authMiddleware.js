function verificarLogin(req, res, next) {
  if (req.session.usuario) {
    next();
  } else {
    res.redirect('/login');
  }
}

function verificarAdmin(req, res, next) {
  if (req.session.usuario && req.session.usuario.rol === 'admin') {
    next();
  } else {
    res.status(403).send('Acceso denegado: solo administradores');
  }
}

module.exports = { verificarLogin, verificarAdmin };