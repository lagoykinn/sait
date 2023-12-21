import { Model } from "../../database/Relations"

class ModelService {
    public static async create(dto) {
        const model = await Model.create({...dto})

        return model
    }
    public static async getOne(dto, included?) {
        const model = await Model.findOne({where: {...dto}, include: included})

        return model
    }
    public static async getAll(dto, included?) {
        const model = await Model.findAndCountAll({where: {...dto}, include: included})

        return model
    }
    public static async deleteOne(dto) {
        const _model = await Model.findOne({where: {model: dto.model}})

        const deletedModel = await Model.destroy({where: {id: _model.dataValues.id}})

        return {_model, deletedModel}
    }
}

export default ModelService