import { DataTypes } from "sequelize";
import sequelize from "../db";

const Photo = sequelize.define("photo", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    photo: {type: DataTypes.STRING}
});

export default Photo