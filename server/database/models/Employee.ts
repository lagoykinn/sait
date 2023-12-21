import { DataTypes } from "sequelize";
import sequelize from "../db";

const Employee = sequelize.define("employee", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    employee_firstname: { type: DataTypes.STRING },
    employee_lastname: { type: DataTypes.STRING },
});

export default Employee