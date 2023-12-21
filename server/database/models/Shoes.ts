import { DataTypes } from "sequelize";
import sequelize from "../db";

const Shoes = sequelize.define("shoes", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  shoes: { type: DataTypes.STRING },
  price: { type: DataTypes.FLOAT, allowNull: false },
  color: {
    type: DataTypes.JSON,
    allowNull: false,
    defaultValue: { black: 0, white: 0 },
  },
  info: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "cool choice for any season!",
  },
  img: {type: DataTypes.STRING}
});

export default Shoes;
