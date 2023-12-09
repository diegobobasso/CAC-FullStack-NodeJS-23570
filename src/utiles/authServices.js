const modelo = require('./userServices');


// const bcryptjs = require('bcryptjs');

module.exports = {

    isLogin: (req, res, next) => {
        if(req.session.user) {
            next()
        } else {
            res.render('login', { title: 'Login - FunkoShop', message: 'Necesita Iniciar sesión...' });
        }
    },

    isAdmin: (req, res, next) => {
        if(req.session.user) {
            const user = modelo.getDataByEmail(req.session.user);        
            if(user.role == 'Admin') {
                next();
            } else {
                res.render('login', { title: 'Login - FunkoShop', 
                message: 'Necesita permiso de administrador para esta sección.' });
        }
        } else {
            res.render('login', { title: 'Login - FunkoShop', 
            message: 'Necesita Iniciar sesión de administrador' });
        }
    }
    
}