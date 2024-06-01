// routes/movieRoutes.js
const express = require('express');
const {
    createMovie,
    getMovies,
    getMoviesByPlaylistId,
    updateMovie,
    deleteMovie
} = require('../controller/movie');
const authenticateToken = require('../middleware/requireAuth');

const router = express.Router();

router.post('/create', authenticateToken, createMovie);
router.get('/', authenticateToken, getMovies);
router.get('/playlist/:playlistId', authenticateToken, getMoviesByPlaylistId);
router.put('/update/:id', authenticateToken, updateMovie);
router.delete('/delete/:id', authenticateToken, deleteMovie);

module.exports = router;
