const mainController = {
    home(req, res) {
        res.render('index', {
            title: 'Inicio',
            welcome: 'Aquí encontrarás algunos de los científicos y matemáticos destacados en el mundo de la ciencia y de la programación. Esperamos te sorprendas.'
        });
    },

    creditos(req, res) {
        res.render('creditos', {
            title: 'Créditos',
            autor: 'Tu Nombre',
            leyenda: 'Hecho con ❤ en Programación Web Full Stack'
        });
    }
};

module.exports = mainController;