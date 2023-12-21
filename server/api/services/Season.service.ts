import Season from "../../database/models/Season";

class SeasonService {
    public static async create(dto, included?) {
        const season = await Season.create({...dto})

        return season
    }
    public static async getOne(dto , included?) {
        const season = await Season.findOne({where: {...dto}, include: included})

        return season
    }
    public static async getAll({ dto }, included) {}
    public static async deleteOne({ dto }, included) {}
}

export default SeasonService;
