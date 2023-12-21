import { Type } from "../../database/Relations"
import Brand from "../../database/models/Brand"
import Season from "../../database/models/Season"
import TypeService from "../services/Type.service"

class TypeController {
    public static async create(req, res, next) {
        try {
            const params = req.body

            const type = await TypeService.create(params)
            
            return res.json(type)
        } catch (error) {
            next(error)
        }
    }

    public static async getAll(req, res, next) {
        try {
            const params = req?.body
            
            const types = await TypeService.getAll({...params}, [Brand])

            return res.json(types)
        } catch (error) {
            next(error)
        }
    }

    public static async getOne(req, res, next) {
        try {
            const params = req.body

            const type = await TypeService.getOne({...params}, [Brand, Season])
        } catch (error) {
            next(error)
        }
    }
}

export default TypeController