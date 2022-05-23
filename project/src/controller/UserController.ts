import { update, getAll, getById } from '../database/dal/user';
import ErrorHandler from '../utils/ErrorHandler';

export default new class InvestimentController {

    construct() {
        // do nothing because there's nothing to do :)
    }

    async all(req: any, res: any, next: any) {
        try {
            let allusers = await getAll();

            res.status(200).json(allusers);
        } catch (error: any) {
            next(next(ErrorHandler.badRequest(error.message)));
        }
    };

    async getOne(req: any, res: any, next: any) {

        let { id } = req.params;

        if ( !id ) {
            next(next(ErrorHandler.badRequest(':id é um parâmetro obrigatório.')));
        }

        try {
            let user = await getById(id);
            res.status(200).json(user);
        } catch (error: any) {
            next(next(ErrorHandler.badRequest(error.message)));
        }
    };

    async update(req: any, res: any, next: any) {

        let { id } = req.params;
        let { body } = req;

        if ( !id ) {
            next(next(ErrorHandler.badRequest(':id é um parâmetro obrigatório.')));
        }

        try {
            let udated = await update(id, body);
            res.status(200).json(udated);
        } catch (error: any) {
            next(ErrorHandler.badRequest(error.message));
        }
    };
}