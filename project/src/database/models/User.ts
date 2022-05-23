import { Model, Optional } from "sequelize";
import { DataTypes } from "sequelize";
import { IUser } from "../../interfaces/IUser";

import sequelize from '../index';

class User extends Model<IUser> implements IUser {

    public id!: number;
    public name!: string;
    public email!: string;
    public password!: string;
    // timestamps
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

    static load(sequelize: any) {

        User.init({
            id: {
                type: DataTypes.INTEGER.UNSIGNED,
                autoIncrement: true,
                primaryKey: true,
            },
            name: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Obrigatório"
                    }
                }
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false,
                validate: {
                    notEmpty: {
                        msg: "Campo Obrigatório"
                    }
                }
            }, 
            password: {
                type: DataTypes.STRING,
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

        //User.sync({alter: true});

        const hasAdmin = User.findByPk(1);

        if (!hasAdmin)
            User.create({
                "id": 1,
                "name": 'qesh',
                'email': 'processoseletivo@qesh.com',
                "password": 'qesh',
                "createdAt": new Date(),
                "updatedAt": new Date()
            });
    }
}

export default User;