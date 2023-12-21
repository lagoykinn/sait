import { Model } from "sequelize";
import { Shoes, Type } from "../../database/Relations";
import Brand from "../../database/models/Brand";

class ShoesService {
    public static async create(dto, included?)   {
        const shoes = await Shoes.create({...dto})

        return shoes
    }
    public static async getOne(dto, included?) {
        const shoes = await Shoes.findOne({where : {...dto}, include: included})

        return shoes
    }
    public static async getAll(dto) {
        const shoes = await Shoes.findAndCountAll({where: dto, limit: 40, include: [Type, Brand]})
        return shoes
    }
    public static async deleteOne(model, properties) {
        const shoes = await model.destroy({where : properties ? properties : {}})
        return shoes
    }
}

export default ShoesService;
