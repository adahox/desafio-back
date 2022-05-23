import { Op } from 'sequelize'
import User from '../models/User'

interface GetAllInvestimentsFilters {
    isDeleted?: boolean;
    includeDeleted?: boolean;
}

export const login = async (email: string, password: string) => {
    try {
        let user = await User.findOne({ where: { email, password } });

        if (!user) {
            throw new Error('user não encontrado');
        }

        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const update = async (id: number, payload:  any) => {
    try {
        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('user não encontrado.');
        }
        const updated = await user.update(payload);
    
        return updated;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getById = async (id: number) => {
    try {
        const user = await User.findByPk(id);

        if (!user) {
            throw new Error('User não encontrado');
        }

        return user;
    } catch (error: any) {
        throw new Error(error.message);
    }
}

export const getAll = async (filters?: GetAllInvestimentsFilters) => {
    return User.findAll({
        where: {
            ...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
        },
        ...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
    });
}