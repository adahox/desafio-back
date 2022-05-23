import { create, deleteById, update, getAll, getById } from '../database/dal/investiment';
import ErrorHandler from '../utils/ErrorHandler';

export default new class InvestimentController {

    construct() {
        // do nothing because there's nothing to do :)
    }

    async all(req: any, res: any, next: any) {
        try {
            let allInvestiments = await getAll();

            res.status(200).json(allInvestiments);
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
            let investment = await getById(id);
            res.status(200).json(investment);
        } catch (error: any) {
            next(next(ErrorHandler.badRequest(error.message)));
        }
    };

    async create(req: any, res: any, next: any) {

        let { body } = req;

        try {
            let newInvestment = await create(body);
            res.status(200).json(newInvestment);
        } catch (error: any) {
            next(ErrorHandler.badRequest(error.message));
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

    async delete(req: any, res: any, next: any) {

        let { id } = req.params;

        if ( !id ) {
            next(next(ErrorHandler.badRequest(':id é um parâmetro obrigatório.')));
        }

        try {
            let deleted = await deleteById(id);
            
            res.status(200).json({message: 'investimento deletado.'});
        } catch (error: any) {
            next(next(ErrorHandler.badRequest(error.message)));
        }
    };
}