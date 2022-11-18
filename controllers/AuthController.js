const { User } = require('../models/index')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

module.exports = {
    // Login
    signIn(req, res){

        let {email, password} = req.body;

        //Busco el user en la db
        User.findOne({

            where: {
                email: email
            }

        }).then(user =>{

            if (!user){
                res.status(404).json({msg:'Usuario no encontrado'})
            } else {

                if(bcrypt.compareSync(password, user.password)){
                    // Si las contraseñas coinciden devuelvo el token

                    let token = jwt.sign({user: user}, 'secret', {
                        expiresIn : '7d'
                    })
                    res.json({
                        user: user,
                        token: token
                    })

                } else { 
                    res.status(401).json({msg: 'Contraseña incorrecta'})
                }

            }

        }).catch(error =>{
            res.status(500).json(error)
        })

    },

    // Registro
    signUp(req, res) {


        //Encrypto el pass
        let hashPass = bcrypt.hashSync(req.body.password, 10)

        // Se crea el user
        User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashPass,
            surname: req.body.surname
        }).then(user => {
            let token = jwt.sign({user: user}, 'secret', {
                expiresIn : '7d'
            })

        // Respuesta con el token
            res.json({
                user: user,
                token: token
            })

        }).catch(error => {
            res.status(500).json(error)
        })

    }
}