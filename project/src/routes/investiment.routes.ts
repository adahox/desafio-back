import express  from 'express';

import investimentController from '../controller/InvestimentController';
import middlewares from '../utils/middlewares';

class InvestimentRoute {

    public routes: any;

    constructor() {
        
        this.routes = express.Router();

        this.routes.get('/', middlewares.JWTVerify, investimentController.all);
        this.routes.get('/:id', middlewares.JWTVerify, investimentController.getOne);
        this.routes.post('/', middlewares.JWTVerify, investimentController.create);
        this.routes.patch('/:id', middlewares.JWTVerify, investimentController.update);
        this.routes.delete('/:id', middlewares.JWTVerify, investimentController.delete);
    }

}

export default new InvestimentRoute().routes;