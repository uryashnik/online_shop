const ApiError = require('../error/ApiError');

class UserController {
    async registration(req, res){

    }

    async login(req, res){

    }

    async check(req, res, next){
        const {id} = req.query;
        if(!id){
            // return next(ApiError.badRequest('Не задан ИД'))
            return next('параметр но не ошибка')
        }
        res.json(query);
    }
}

module.exports = new UserController();