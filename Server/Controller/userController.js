const users = require('../Model/user');
const bcrypt = require('bcrypt');
const user = require('../Model/user');
module.exports ={
register: async (req,res) =>{
    if(users.exists(req.body.Email) == true) return res.status(400).json({massage: "the email is alredy used"})
    bcrypt.hash(req.body.Password,10,async(err ,hashPass) => {
        if(err) return res.status(500).json({message: error});
        req.body.Password = hashPass;
        await users.create(req.body)
            .then(result => res.status(200).json({message: "the user added" , theUser: result}))
            .catch(err => res.status(500).json(err))        
    })},
    login: async (req ,res ) => {
        if(user.exists(req.body.Email) == false) return res.status(400).json({message: "the email is alredy used"})
        await user.findOne(user => user.Email === Email)
        .then
    }
}
