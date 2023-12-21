import { DataTypes } from "sequelize";
import sequelize from "../db";

const Type = sequelize.define("type", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    type: { type: DataTypes.STRING },
});

export default Type;
