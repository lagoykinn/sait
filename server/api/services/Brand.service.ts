import { Type } from "../../database/Relations";
import Brand from "../../database/models/Brand";
import { ModelException } from "../exceptions/ModelException";
import { isModelExists } from "../middlewares/checkModel";

class BrandService {
    public static async create(params) {

        const param_brand = params?.brand

        const hasBrand = await isModelExists(Brand, {brand: param_brand})

        if(hasBrand) {
            throw new ModelException(409, 'This brand has exists')
        }

        const brand = await Brand.create({ ...params });

        return brand;
    }
    public static async getAll(params?, included?) {
        const brands = await Brand.findAndCountAll({ where: { ...params }, include: included });

        return brands
    }
    public static async getOne(params?, included?) {
        const brand = await Brand.findOne({where: {...params}, include: included})
        
        return brand
    }
    public static async deleteOne(model, dto) {
        const deletedBrand = await model.destroy({where: {...dto}})
        
        return deletedBrand
    }
}

export default BrandService;
