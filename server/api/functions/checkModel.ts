export async function isModelExists(model, params) {
    const result = await model.findAndCountAll({where: {...params}})
    return result.count > 0
}