import dotenv from "dotenv";
dotenv.config();
import Express, { json } from "express";
import { router } from "./routes/index";
import sequelize from "./database/db";
import errorHandler from "./api/middlewares/error-handler";
import cors from "cors";
import cookies from "cookie-parser";
import errorMiddlewares from "./api/middlewares/error-middlewares";
import fileUpload from 'express-fileupload'

const app = Express();
const PORT = process.env.PORT;

app.use(fileUpload({}))
app.use(json());
app.use(cookies());
app.use(
    cors({
        Credential: true,
        origin: process.env.CLIENT_URL,
    })
);
app.use("/api", router);
app.use(errorMiddlewares);

const start = async () => {
    try {
        await sequelize.authenticate();
        await sequelize.sync();
        // await sequelize.sync({alter: true, force: true});
        app.listen(PORT, () => {
            console.log(`Server listening on PORT => ${PORT}`);
        });
    } catch (error) {
        console.log(`Error ${error}`);
        process.exit(1);
    }
};

start();
