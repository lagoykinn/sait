import { DataTypes } from "sequelize";
import sequelize from "../db";

const Order = sequelize.define("order", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    price: { type: DataTypes.FLOAT },
    description: { type: DataTypes.STRING },
});

export default Order;
