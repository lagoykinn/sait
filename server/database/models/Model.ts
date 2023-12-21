import { DataTypes } from "sequelize";
import sequelize from "../db";

const Model = sequelize.define("model", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    model: { type: DataTypes.STRING, allowNull: false },
});

export default Model;
