import express from 'express';

import investimentRoutes from './investiment.routes';
import authRoutes from './auth.routes';
import userRoutes from './user.routes';

class Routes {

    public routes: any;

    constructor() {
        this.routes = express.Router();
        this.buildRoutes();
    }

    private buildRoutes() {
        this.routes.use('/investment', investimentRoutes);
        this.routes.use('/auth', authRoutes);
        this.routes.use('/user', userRoutes);
    }
}


export default new Routes().routes;