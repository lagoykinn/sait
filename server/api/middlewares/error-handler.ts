import { NextFunction, Request, Response } from "express";
import ErrorHandler from "../exceptions/ErrorException";
import { Error } from "sequelize";
import { ModelException } from "../exceptions/ModelException";

export default function (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
) {
    console.log();
    if (err instanceof ErrorHandler) {
        return res
            .status(err.status)
            .json({ message: err.message, errors: err.errors });
    }
    return res.status(500).json({ message: "Incoming error!"})
}
