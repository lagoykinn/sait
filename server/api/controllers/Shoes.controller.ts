import { v4 } from 'uuid';
import { Model, Shoes, Size, Type } from "../../database/Relations";
import Brand from "../../database/models/Brand";
import ErrorHandler from "../exceptions/ErrorException";
import { ModelException } from "../exceptions/ModelException";
import BrandService from "../services/Brand.service";
import ModelService from "../services/Model.service";
import SeasonService from "../services/Season.service";
import ShoesService from "../services/Shoes.service";
import SizeService from "../services/Size.service";
import TypeService from "../services/Type.service";
import { IShoesParams } from "../../types/params";
import Season from "../../database/models/Season";
import { Request, Response } from "express";
import path from 'path';

class ShoesController {
  public static async createNew(req: Request, res: Response, next) {
    try {
      const { shoes, type, price, brand, model, season, size }: IShoesParams =
        req.body;
      
      // @ts-ignore
      const { img } = req.files

      let filename = v4() + ".png"
      img.mv(path.resolve(__dirname, '..', 'static', filename))

      const _type = await TypeService.getOne({ type: type });

      const _brand = await BrandService.getOne({ brand: brand });

      const _season = await SeasonService.getOne({ season: season });

      const _model = await ModelService.getOne({ model: model });

      const _size = await SizeService.create({ size: size });

      const models = [_type, _brand, _size, _model];

      for (let i = 0; i < models.length; i++) {
        if (!models[i]) {
          throw new ModelException(404, `Model #${i} is undefined`);
        }
      }

      const _shoes = await ShoesService.create({
        shoes: shoes,
        price: price,
        typeId: _type.dataValues.id,
        brandId: _brand.dataValues.id,
        seasonId: _season.dataValues.id,
        sizeId: _size.dataValues.id,
        modelId: _model.dataValues.id,
        img: filename
      });

      // const newShoes = await ShoesService.getOne(
      //   { shoes: _shoes.dataValues.shoes },
      //   [Type, Brand, Size, Model]
      // );

      return res.json(_shoes);
    } catch (error) {
      next(error);
    }
  }
  public static async getOne(req, res, next) {}
  public static async getAll(req, res, next) {
    const params = req.body;
    const shoes = await ShoesService.getAll({ ...params });

    return res.json(shoes);
  }
  public static async deleteOne(req, res, next) {}
}

export default ShoesController;
