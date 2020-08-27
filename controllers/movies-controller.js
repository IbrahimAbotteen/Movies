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