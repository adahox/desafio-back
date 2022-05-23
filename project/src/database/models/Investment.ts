import { Model, Optional } from "sequelize";
import { DataTypes } from "sequelize";
import { InvestimentsAttributes } from "../../interfaces/IInvestiments";

import sequelize from '../index';

class Investiment extends Model<InvestimentsAttributes> implements InvestimentsAttributes {

    public id!: string;
    public crypto!: string;
    public price!: number;
    public amount!: number;
    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static load(sequelize: any) {

        Investiment.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            crypto: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Obrigatório"
                    }
                }
            },
            price: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Obrigatório"
                    }
                }
            }, 
            amount: {
                type: DataTypes.FLOAT,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Obrigatório"
                    }
                }
            },             
            createdAt: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: DataTypes.DATE,
                allowNull: false,
            }
        }, {
            timestamps: true,
            sequelize: sequelize
        });

        Investiment.sync({alter: true});
    }
}

export default Investiment;