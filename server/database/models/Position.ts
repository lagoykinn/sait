import { DataTypes } from "sequelize";
import sequelize from "../db";

const Position = sequelize.define("position", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    position: {type: DataTypes.STRING, allowNull: false},
    salary: {type: DataTypes.FLOAT}
});

export default Position