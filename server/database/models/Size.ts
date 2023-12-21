import { DataTypes } from "sequelize";
import sequelize from "../db";

const Size = sequelize.define('size', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    size: {type: DataTypes.JSON, 
        set(value) {
            console.log(value)
            this.setDataValue('size', JSON.stringify(value))
        },
        get() {
            return JSON.parse(this.getDataValue('size'))
        }
    }
})

export default Size