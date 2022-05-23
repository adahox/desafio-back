import { Op } from 'sequelize'
import Investiment from '../models/Investment'

interface GetAllInvestimentsFilters {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}


export const create = async (payload: any) => {
    try {
        const investiment = await Investiment.create(payload);
        
        return investiment;
    } catch (error: any) {
        throw new Error(error.message);
    }
    
}

export const update = async (id: number, payload:  any) => {
    try {
        const investiment = await Investiment.findByPk(id);

        if (!investiment) {
            throw new Error('investimento não encontrado.');
        }
        const updatedInvestiment = await investiment.update(payload);
    
        return updatedInvestiment;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getById = async (id: number) => {
    try {
        const investiment = await Investiment.findByPk(id);

        if (!investiment) {
            throw new Error('investimento não encontrado');
        }

        return investiment;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const deleteById = async (id: number): Promise<boolean> => {
    try {
        const deletedInvestimentCount = await Investiment.destroy({
            where: { id }
        });
    
        if (!deletedInvestimentCount) {
            throw new Error('investimento não encontrado');
        }

        return !!deletedInvestimentCount;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getAll = async (filters?: GetAllInvestimentsFilters) => {
    return Investiment.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    });
}