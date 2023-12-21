import { DataTypes } from "sequelize";
import sequelize from "../db";

const Season = sequelize.define("season", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    season: { type: DataTypes.STRING },
});

export default Season