// routes/movieRoutes.js
const express = require('express');
const {
    createMovie,
    getMovies,
    getMoviesByPlaylistId,
    updateMovie,
    deleteMovie,getplayListWithoutMovie
} = require('../controller/movie');
const authenticateToken = require('../middleware/requireAuth');

const router = express.Router();

router.post('/create', authenticateToken, createMovie);
router.get('/', authenticateToken, getMovies);
router.get('/playlist/:playlistId', getMoviesByPlaylistId);
router.put('/update/:id', authenticateToken, updateMovie);
router.delete('/delete/:id', authenticateToken, deleteMovie);
router.get("/playlistWithoutMovie/:id",authenticateToken,getplayListWithoutMovie)

module.exports = router;
