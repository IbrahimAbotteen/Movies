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
};

movieController.create = (req, res, next) => {
    new Movie({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
        user_id: req.user.id,
    })
        .save()
        .then((movie) => {
            res.json({
                message: 'Movie added successfully!',
                data: { movie },
            });
        })
        .catch(next);
};

movieController.update = (req, res, next) => {
    Movie.getById(req.params.id)
    .then((movie) =>
    movie.update({
        title: req.body.title,
        description: req.body.description,
        genre: req.body.genre,
    })
    )
    .then((movie) => {
        res.json({
            message: 'Movie updated successfully!',
            data: { movie },
        });
    })
    .catch(next);
};

module.exports = movieController;