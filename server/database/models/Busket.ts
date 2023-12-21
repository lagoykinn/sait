import { DataTypes } from "sequelize";
import sequelize from "../db";

const Basket = sequelize.define("basket", {
    id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
    order_items: {type: DataTypes.JSON, allowNull: false},
    price: {type: DataTypes.INTEGER}
});

export default Basket