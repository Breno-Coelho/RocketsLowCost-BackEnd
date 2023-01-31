
const User = require('../models/User')


module.exports = {

    async CreateUser(req, res){

        const {name, age} = req.body
        const user = {
            name,
            age,
        }

        await User.create(user).then(() => {res.status(200).json({message: 'Criou o user'})});
    },

    async FindAllUsers(req, res){
        const user = await User.find()

        await res.status(200).json(user);
    },


    async FindUser(req, res){

        
        const name = req.body.nome
        
        const user = await User.findOne({ name : name })

        await res.status(200).json(user);
    }



}




