import { Size } from "../../database/Relations";

class SizeService {
    public static async create(dto) {
        const size = await Size.create({ ...dto });

        return size;
    }
    public static async getOne(dto, included?) {
        const size = await Size.findOne({ where: { ...dto } });

        return size;
    }
    public static async getAll(dto, included?) {}
    public static async deleteOne(dto, included?) {}
}

export default SizeService;
