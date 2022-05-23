import { Sequelize } from 'sequelize';
import UserModel from './models/User';
import InvestimentModel from './models/Investment';

const database_variables = [
    process.env.DB_HOST,
    process.env.DB_PORT,
    process.env.DB_USER,
    process.env.DB_PASSWORD
];

if (database_variables.includes(undefined)) {
    throw new Error ('.env database variables are not defined.');
}

const sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/qesh`);

InvestimentModel.load(sequelize);
UserModel.load(sequelize);


export default sequelize;