import { isModelExists } from '../middlewares/checkModel';
import { Model, Type } from "../../database/Relations";
import Season from "../../database/models/Season";
import ModelService from "../services/Model.service";
import SeasonService from "../services/Season.service";
import { ModelException } from '../exceptions/ModelException';
import Brand from '../../database/models/Brand';
import BrandService from '../services/Brand.service';
import TypeService from '../services/Type.service';

class ModelController {
    public static async create(req, res, next) {
        try {
            const params = req.body;
            
            const _season = await SeasonService.getOne({season: params.season})
            const _brand = await BrandService.getOne({brand: params.brand})
            const _type = await TypeService.getOne({type: params.type})

            const _models = [_season, _brand, _type]

            for(let i = 0; i < _models.length; i++) {
                if(!_models[i]) {
                    throw new ModelException(404, `Param #${i} was undefined`)
                }
            }

            const hasModel = await isModelExists(Model, {model: params.model})

            if(hasModel) {
                throw new ModelException(409, 'This model of footwear has exists')
            }

            const model = await ModelService.create({model: params.model, brandId: _brand.dataValues.id, typeId: _type.dataValues.id}).catch(e => res.json(e))

            await model.addSeason(_season)
            
            const newModel = await ModelService.getOne({model: params.model}, [Season, Type, Brand])

            return res.json(newModel);
        } catch (error) {
            next(error);
        }
    }
    public static async getOne(req, res, next) {
        try {
            const params = req.body

            const _model = await ModelService.getOne({...params}, [Season, Brand, Type])

            return res.json(_model)
        } catch (error) {
            next(error)
        }
    }
    public static async getAll(req, res, next) {
        try {
            const _models = await ModelService.getAll({}, [Season, Type, Brand])
            
            return res.json(_models)
        } catch (error) {
            next(error)
        }
    }
    public static async deleteOne(req, res, next) {
        try {
            const params = req.body
            const _model = await ModelService.deleteOne({...params})
    
            return res.json(_model)
        } catch (error) {
            next(new ModelException(404, "Model doesn't exists"))
        }
    }
}

export default ModelController;
