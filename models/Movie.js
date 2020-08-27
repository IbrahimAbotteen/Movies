// Takes our database to feed into the class.
const db = require('../db/config');

// Descriptors for a movie in the DB
class Movie {
    constructor({ id, title, description, genre, user_id }) {
        this.id = id || null;
        this.title = title;
        this.description = description;
        this.genre = genre;
        this.user_id = user_id;
    }

    static getAll() {
        return db
            .manyOrNone('SELECT * FROM movies ORDER BY id ASC')
            .then((movies) => movies.map((movie) => new this (movie)));
    }
    
    static getById(id) {
        return db
            .oneOrNone('SELECT * FROM movies WHERE id = $1', [id])
            .then((movie) => {
                if (movie) return new this(movie);
                throw new Error(`Movie ${id} not found`);
            });
    }

    save() {
        return db
            .one(
                `INSERT INTO movies
                (title, description, genre, user_id)
                VALUES ($/title/, $/description/, $/genre/, $/user_id/)
                RETURNING *`,
                this)
                .then((movie) => Object.assign(this, movie));
    }

}

module.exports = Movie;