import { login } from '../database/dal/user';
import ErrorHandler from '../utils/ErrorHandler';
import JWTAuth from '../utils/jwt';
export default new class InvestimentController {

    construct() {
        // do nothing because there's nothing to do :)
    }

    async auth(req: any, res: any, next: any) {

        const {email, password} = req.body;
        try {

            let user = await login(email, password);
            if (user) {
                res.status(200).json({ 
                    token: JWTAuth.assinar({
                        id: user.id,
                        email: user.email
                    })
                });
            }

            
        } catch (error: any) {
            next(next(ErrorHandler.badRequest(error.message)));
        }
    }
}