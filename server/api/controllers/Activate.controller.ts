import ActivateService from "../services/dependecies/Activate.service";

class ActivateController {
    public static async activate(req, res, next) {
        try {
            const activationLink = req.params.link;
            await ActivateService.activate(activationLink);
            
            return res.redirect(process.env.CLIENT_URL);
        } catch (error) {
            next(error);
        }
    }
}

export default ActivateController;
