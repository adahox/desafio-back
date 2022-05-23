import express  from 'express';

import userController from '../controller/UserController';
import middlewares from '../utils/middlewares';

class InvestimentRoute {

    public routes: any;

    constructor() {
        
        this.routes = express.Router();

        this.routes.get('/', middlewares.JWTVerify, userController.all);
        this.routes.get('/:id', middlewares.JWTVerify, userController.getOne);
        this.routes.patch('/:id', middlewares.JWTVerify, userController.update);
    }

}

export default new InvestimentRoute().routes;