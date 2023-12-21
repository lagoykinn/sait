import { DataTypes } from "sequelize";
import sequelize from "../db";

const Address = sequelize.define("address", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    street: {type: DataTypes.STRING, allowNull: false},
    home: {type: DataTypes.STRING, allowNull: false},
    flat: {type: DataTypes.INTEGER, allowNull: false},
    door_code: {type: DataTypes.STRING, allowNull: false},
});

export default Address