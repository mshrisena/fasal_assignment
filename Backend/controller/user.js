const Playlist = require('../model/playlist');
const User = require('../model/user')
const jwt = require('jsonwebtoken');

const createToken = (name) => {
    return jwt.sign({ name }, "mnmkjkbkjbkjbknjnl", { expiresIn: '10d' })
}

const CreateUser = async (req, res) => {
    try {
            console.log(req.body)
            const { name, email, password } = req.body;
    
        const [user, created] = await User.findOrCreate({
            where: { name },
            defaults: { name, email, password: password }
        });
       
        if (created) {
            return res.status(200).json({message: true,  user});
        } else {
            return res.status(200).json({ message: 'User already exists with the same name.' });
        }
    } catch (err) {
        return res.status(200).json({ message: err.message });
    }
}
const updateUser = async (req, res) => {
    try {
        const { name, email, id, password } = req.body
        const DbUser = await User.findOne({ where: { name: name } })
        console.log(DbUser)
        const user = await User.update({ name: name || DbUser.name, email: email || DbUser.email, password: password }, { where: { id: id || DbUser.id } })

        return res.json({ message: true }).status(200)
    } catch (err) {
        return res.status(200).json({ message: err.message })
    }
}
const UserLogin = async (req, res) => {
    try {

        const { name, password } = req.query;
        const user = await User.findOne({ where: { name: name } })
        if (password ===  user.password){
            const token = createToken(user)
            res.end(JSON.stringify({ "message": true , token: token , user: user}))
        }
        else{
            res.end(JSON.stringify({ "message": false }));
        }

    } catch (err) {
        res.status(500).send(JSON.stringify({ "message": "No user found" }));
    }
}
const getUserName = async (req,res)=>{
    try {
        const {id} = req.params;
        const playlist = await Playlist.findByPk(id)
        const user = await User.findByPk(playlist.UserId)
        if(!user){
            return res.json({"message":false,"data":"user not found"})

        }
        return res.json({"message":true,data:user.name})
    } catch (error) {
         return res.json({message:false})
    } 
}

module.exports = {
    UserLogin: UserLogin,
    updateUser: updateUser,
    CreateUser: CreateUser,
    getUserName
}