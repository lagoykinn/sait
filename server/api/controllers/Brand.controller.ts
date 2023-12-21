import { Model, Type } from "../../database/Relations"
import Brand from "../../database/models/Brand"
import Season from "../../database/models/Season"
import BrandService from "../services/Brand.service"

class BrandController {
    public static async create(req, res, next) {
        try {
            const params = req.body
            
            const brand = await BrandService.create({...params})
            
            return res.json(brand)
        } catch (error) {
            next(error)
        }
    }
    public static async getAll(req, res, next) {
        try {
            const params = req.body
            const brands = await BrandService.getAll(params, [Type, Season, Model])

            return res.json(brands)
        } catch (error) {
            next(error)
        }
    }

    public static async getOne(req, res, next) {
        try {
            const properties = req.body
            const brands = await BrandService.getOne(properties, [Type, Season, Model])
            
            return res.json(brands)
        } catch (error) {
            next(error)
        }
    }

    public static async deleteOne(req, res, next) {
        try {
            const properties = req.body
            const deletedBrand = await BrandService.deleteOne(Brand, properties)
    
            return res.json(`${deletedBrand} was succesfully deleted!`)
        } catch (error) {
            next(error)
        }
    }
}

export default BrandController