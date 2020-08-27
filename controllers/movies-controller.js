// importing the Movie class
const Movie = require('../models/Movie');

// Assigning a holder for the controller
const movieController = {};

movieController.index = (req, res, next) => {
    Movie.getAll()
    .then((movies) => {
        res.json({
            message: 'ok',
            data: { movies },
        });
    })
    .catch(next);
};

movieController.show = (req, res, next) => {
    Movie.getById(req.params.id)
    .then((movie) => {
        res.json({
            message: 'ok',
            data: { movie },
        });
    })
    .catch(next);
}

module.exports = movieController;