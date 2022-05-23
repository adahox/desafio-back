import express  from 'express';

import authController from '../controller/AuthController';

class AuthRoute {

    public routes: any;

    constructor() {
        
        this.routes = express.Router();

        this.routes.post('/', authController.auth);

    }

}

export default new AuthRoute().routes;