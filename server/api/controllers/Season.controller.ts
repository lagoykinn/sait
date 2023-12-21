import SeasonService from "../services/Season.service"

class SeasonController {
    public static async create(req, res, next) {
        const params = req.body

        const season = await SeasonService.create({...params})

        return res.json(season)
    }
    public static async getOne(req, res, next) {
        const params = req.body

        const season = await SeasonService.getOne({...params})

        return res.json(season)
    }
    public static async getAll(req, res, next) {}
    public static async deleteOne(req, res, next) {}
}

export default SeasonController