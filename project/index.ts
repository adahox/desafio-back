import express from 'express';
import routes from './src/routes/index';
import swaggerDocs from './swagger.json';
import SwaggerUI from 'swagger-ui-express';
import ErrorHandler from './src/utils/ErrorHandler';
const { database } = require('./src/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.use('/docs', SwaggerUI.serve, SwaggerUI.setup(swaggerDocs));

app.use( '/',  routes);

app.use( (error: any, req: any, res: any, next: any) => {
    
    if (error instanceof ErrorHandler) {
        return res.status(error.code).json({message: error.message});
    }

    return res.status(500).json({message: 'something went really wrong here.'});
});


const PORT = 3000;
const HOST = '0.0.0.0';
 
app.listen(PORT, HOST);

export default app;