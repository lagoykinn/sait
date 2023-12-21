import { Shoes, Size } from "../../database/Relations"
import SizeService from "../services/Size.service"

class SizeController {
    public static async create(req, res, next) {
        const params = req.body

        const size = await SizeService.create(params)

        return res.json(size)
    }
    public static async getAll(req, res, next) {
        const params = req.body
        const size = await SizeService.getAll(params)
        
        return size
    }
    public static async getOne(req, res, next) {
        const params = req.body

        const size = await SizeService.getOne(params, [Shoes])
    }
}

export default SizeController