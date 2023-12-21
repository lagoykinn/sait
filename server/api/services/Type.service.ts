import { Type } from "../../database/Relations"
import { ModelException } from "../exceptions/ModelException"
import { isModelExists } from "../middlewares/checkModel"

class TypeService {
    static async create(params?) {
        const param_type = params?.type

        const hasType = await isModelExists(Type, {type: param_type})

        if(hasType) {
            throw new ModelException(409, 'This type has exists')
        }
        
        const type = await Type.create({...params})

        return type
    }

    static async getOne(params?, included?) {
        const type = await Type.findOne({where: {...params}, include: included})

        return type
    }

    static async getAll(params?, included?) {
        const types = await Type.findAndCountAll({where: {...params}, include: included})

        return types
    }
}

export default TypeService