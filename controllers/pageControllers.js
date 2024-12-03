const vistaPrincipal = (req, res) => {
    res.render('home');
}

const vistaTables = (req, res) => {
    res.render('tables');
}

const vistaNotificaciones = (req, res) => {
    res.render('notifications');
}

module.exports = {
    vistaPrincipal,
    vistaTables,
    vistaNotificaciones
}