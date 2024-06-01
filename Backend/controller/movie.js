// controllers/movieController.js
const Movie = require('../model/movie');
const Playlist = require('../model/playlist');

const createMovie = async (req, res) => {
    try {
        const { playlistId, movieid } = req.body;

        const playlist = await Playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }

        const movie = await Movie.create({
            movieid,
            playlistId: playlist.id
        });

        res.status(201).json({ message: "Movie created successfully", movie });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const getMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.status(200).json({ movies });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const getMoviesByPlaylistId = async (req, res) => {
    try {
        const { playlistId } = req.params;
        const movies = await Movie.findAll({ where: { playlistId } });

        if (!movies.length) {
            return res.status(200).json({ message:true ,data:movies});
        }

        res.status(200).json({ data:movies,message:true });
    } catch (error) {
        res.status(500).json({ message: false, error: error.message });
    }
};

const updateMovie = async (req, res) => {
    try {
        const movieId = req.params.id;
        const { movieid } = req.body;

        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }

        movie.movieid = movieid;

        await movie.save();

        res.status(200).json({ message: "Movie updated successfully", movie });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const deleteMovie = async (req, res) => {
    try {
        const movieId = req.params.id;

        const movie = await Movie.findByPk(movieId);
        if (!movie) {
            return res.status(404).json({ message: "Movie not found" });
        }
        
        await movie.destroy();
        res.status(200).json({ message: "Movie deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

module.exports = {
    createMovie,
    getMovies,
    getMoviesByPlaylistId,
    updateMovie,
    deleteMovie,
};
