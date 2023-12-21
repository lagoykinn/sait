export const isModelExists =  async (model, dto) => {
    const res = await model.findAndCountAll({where: {...dto}})
    return res.count > 0
}