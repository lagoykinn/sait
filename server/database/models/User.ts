import { DataTypes } from "sequelize";
import sequelize from "../db";

const User = sequelize.define("user", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    email: { type: DataTypes.STRING, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    firstname: { type: DataTypes.STRING },
    lastname: { type: DataTypes.STRING },
    patronymic: { type: DataTypes.STRING },
    number: { type: DataTypes.STRING },
    address: { type: DataTypes.STRING },
    sale_sum: { type: DataTypes.FLOAT },
    discount: { type: DataTypes.FLOAT },
    isActivated: { type: DataTypes.BOOLEAN, defaultValue: false },
    activationLink: { type: DataTypes.STRING },
});

export default User;
