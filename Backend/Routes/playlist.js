// routes/playlistRoutes.js
const express = require('express');
const {
    createPlaylist,
    getPlaylists,
    updatePlaylist,
    deletePlaylist,
    getPlayListUser,
    getPlayListId
} = require('../controller/playlist');
const  authenticateToken = require("../middleware/requireAuth")
const router = express.Router();

router.post('/create',authenticateToken, createPlaylist);
router.get('/',authenticateToken, getPlaylists);
router.put('/update/:id',authenticateToken, updatePlaylist);
router.delete('/delete/:id', authenticateToken,deletePlaylist);
router.get("/user",authenticateToken,getPlayListUser)
router.get("/get/:id",authenticateToken,getPlayListId)

module.exports = router;
