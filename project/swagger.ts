import SwaggerUI, { SwaggerOptions } from 'swagger-ui-express';
import SwaggerDocs from 'swagger-jsdoc';

const swaggerOptions: SwaggerOptions = {
    swaggerDefinition : {
        info: {
            title: 'Qesh API',
            description: 'Qesh API  - Processo Seletivo',
            contact: {
                name: 'Adão Dias',
                email: 'adahox@gmail.com',
                github: 'https://github.com/adahox'
            },
            servers: ['http://localhost:3000']
        }
    },
    apis: ['.dist/routes/*.js']
};

const swaggerDocs = SwaggerDocs(swaggerOptions);

export {swaggerDocs, SwaggerUI};