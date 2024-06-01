const { where } = require('sequelize');
const Playlist = require('../model/playlist');
const User = require('../model/user');

const createPlaylist = async (req, res) => {
    try {
        const { name, coverImageUrl } = req.body;
        console.log(req.userId)
        

        const playlist = await Playlist.create({
            name,
            coverImageUrl,
            UserId: req.userId
        });

        res.status(201).json({ message: true, playlist });
    } catch (error) {
        res.status(500).json({ message: false, error: error.message });
    }
};

const getPlaylists = async (req, res) => {
    try {
        const playlists = await Playlist.findAll({
            include: {
                model: User,
                attributes: ['name']
            }
        });
        res.status(200).json({ playlists });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const updatePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const { name, coverImageUrl } = req.body;

        const playlist = await Playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }

        playlist.name = name;
        playlist.coverImageUrl = coverImageUrl;

        await playlist.save();

        res.status(200).json({ message: "Playlist updated successfully", playlist });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};

const deletePlaylist = async (req, res) => {
    try {
        const playlistId = req.params.id;
        const playlist = await Playlist.findByPk(playlistId);
        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }
        await playlist.destroy();
        res.status(200).json({ message: "Playlist deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
};
const getPlayListUser = async (req,res) =>{
    try {
        const playlist = await Playlist.findAll(
            {
                where:
                {
                UserId:req.userId
            }
        }
        );
        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }
        res.status(200).json({ message: "Playlist deleted successfully",data : playlist });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}

const getPlayListId = async(req,res)=>{
    try {
        const playlistid = req.params.id;
        const playlist = await Playlist.findByPk(playlistid);
    
        if (!playlist) {
            return res.status(404).json({ message: "Playlist not found" });
        }
        res.status(200).json({ message: "Playlist deleted successfully",data : playlist });
    } catch (error) {
        res.status(500).json({ message: "An error occurred", error: error.message });
    }
}
const changeVisibility = async(req,res)=>{
    try {
        const {isPublic,id} = req.query;
        const playlist = await Playlist.findByPk(id);
        if(!playlist)
            return res.status(404).json({"error":"cannot find playlist"})
        playlist.isPublic = isPublic
        await playlist.save();

        res.status(200).json({ message: "Playlist updated successfully", data:playlist });
    } catch (error) {
        
    }
}
module.exports = {
    createPlaylist,
    getPlaylists,
    updatePlaylist,
    deletePlaylist,
    getPlayListUser,
    getPlayListId,
    changeVisibility
};
