import { Sequelize } from "sequelize";

const db_name = process.env.DB_NAME ?? "";
const db_password = process.env.DB_PASSWORD ?? "";
const db_user = process.env.DB_USER ?? "";

const sequelize = new Sequelize(db_name, db_user, db_password, {
    dialect: "postgres",
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT
});



export default sequelize;
