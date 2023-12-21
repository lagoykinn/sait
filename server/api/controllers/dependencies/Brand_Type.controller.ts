import { Type } from "../../../database/Relations"
import Brand from "../../../database/models/Brand"
import {ModelException} from "../../exceptions/ModelException"
import { isModelExists } from "../../middlewares/checkModel"
import BrandService from "../../services/Brand.service"
import TypeService from "../../services/Type.service"

class BrandTypeController {
    static async new_type_to_brand(req, res, next) {
        try {
            const param_brand = req.body.brand
            const param_type = req.body.type

            const hasType = await isModelExists(Type, {type: param_type})
            const hasBrand = await isModelExists(Brand, {brand: param_brand})

            if(hasType || hasBrand) {
               throw new ModelException(409, 'This model of type or brand has exists')
            } else {

            const newBrand = await BrandService.create({brand: param_brand}).catch(e => res.json(e))
            const type = await TypeService.create({type: param_type}).catch(e => res.json(e))

            await newBrand.addType(type)

            const brand = await BrandService.getAll({brand: param_brand}, [Type])

            return res.json(brand)
            }
        } catch (error) {
            next(error)
        }
    }

    static async new_brand_to_type(req, res, next) {
        try {
            const param_brand = req.body.brand
            const param_type = req.body.type

            const hasType = await isModelExists(Type, {type: param_type})
            const hasBrand = await isModelExists(Brand, {brand: param_brand})

            if(hasType || hasBrand) {
                throw new ModelException(409, 'This model of type or brand has exists')
            } else {
 
            const newType = await TypeService.create({type: param_type}).catch(e => res.json(e))
            const newBrand = await BrandService.create({brand: param_brand}).catch(e => res.json(e))
            
            await newType.addBrand(newBrand)
            
            const type = await TypeService.getAll({type: param_type}, [Brand])

            return res.json(type)
            }
        } catch (error) {
            next(error)
        }        
    }

    static async type_to_brand(req, res, next) {
        try {
            const param_brand = req.body.brand
            const param_type = req.body.type

            const hasType = await isModelExists(Type, {type: param_type})

            if(hasType) {
                throw new ModelException(500, 'Error in creating model')
            }

            const brand = await BrandService.getOne({brand: param_brand}).catch(e => res.json(e))
            const newType = await TypeService.create({type: param_type}).catch(e => res.json(e))

            await brand.addType(newType)

            const brands = await BrandService.getAll({brand: param_brand}, [Type])

            return res.json(brands)

        } catch (error) {
            next(error)
        }
    }

    static async brand_to_type(req, res, next) {
        try {
            const param_brand = req.body.brand
            const param_type = req.body.type

            const type = await TypeService.getOne({type: param_type}).catch(e => res.json(e))
            const newBrand = await BrandService.create({brand: param_brand}).catch(e => res.json(e))

            const brand_type = await type.addBrand(newBrand)

            const types = await TypeService.getAll({type: param_type}, [Brand])

            return res.json(types)
        } catch (error) {
            next(error)
        }
    }

    static async getAllBrandsAndTypes(req, res, next) {
        const types_brand = await BrandService.getAll({}, [Type])

        return res.json(types_brand)
    }

    static async getAllTypesAndBrand(req, res, next) {
        const brands_type = await TypeService.getAll({}, [Brand])

        return res.json(brands_type)
    }
}

export default BrandTypeController