import JWTAuth from './jwt';

class Middlewares {
    
    async JWTVerify(req: any, res: any, next: any) {

        try {
            const token = req.headers['authorization'];

            if (!token) {
                return res.status(401).json({
                    'message': 'Authorization header required'
                });
            }
            let authenticated = await JWTAuth.validateToken(token);
           
            const { exp } = authenticated;
            
            if (Date.now() >= exp * 1000) {
                return res.status(401).json({
                    'message': 'token expired. login again'
                });
            }

            if (!authenticated) {
                return res.status(401).end();
            }
    
            
            next();
        } catch (error: any) {
            res.status(401).end();
        }

    }
}

export default new Middlewares;
