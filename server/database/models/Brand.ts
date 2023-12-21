import { DataTypes } from "sequelize";
import sequelize from "../db";

const Brand = sequelize.define('brand', {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    brand: { type: DataTypes.STRING }
})

export default Brand