const science = require('../db/science');

const heroeController = {
  // /heroes  -> lista de nombres
  index(req, res) {
    res.render('heroes', { scientists: science.lista, title: 'Científicos' });
  },

  // /heroes/detalle/id/:id
  detail(req, res) {
    const { id } = req.params;
    const s = science.lista.find(x => x.id === Number(id));

    if (!s) {
      return res.status(404).render('error', {
        title: 'No encontrado',
        message: 'No encontramos al científico indicado. Por favor, elija otro id.',
        error: null
      });
    }

    res.render('heroDetail', { title: 'Detalle', nombre: s.nombre, profesion: s.profesion });
  },

  // /heroes/bio/id/:id/:ok?
  bio(req, res) {
    const { id, ok } = req.params;
    const s = science.lista.find(x => x.id === Number(id));

    if (!s) {
      return res.status(404).render('heroBio', {
        title: 'Biografía',
        nombre: null,
        mensaje: 'No encontramos al científico indicado para mostrar su biografía.'
      });
    }

    if (ok === 'ok') {
      return res.render('heroBio', {
        title: 'Biografía',
        nombre: s.nombre,
        mensaje: s.resenia
      });
    }

    return res.render('heroBio', {
      title: 'Biografía',
      nombre: s.nombre,
      mensaje: 'Lamento que no desees saber más de mi :('
    });
  }
};

module.exports = heroeController;
