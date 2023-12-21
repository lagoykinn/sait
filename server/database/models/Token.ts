import { DataTypes } from "sequelize";
import sequelize from "../db";

const Token = sequelize.define("token", {
    refreshToken: { type: DataTypes.STRING, allowNull: true },
});

export default Token