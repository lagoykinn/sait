import { User } from "../../../database/Relations"
import ErrorHandler from "../../exceptions/ErrorException"

class ActivateService {
    static async activate(activationLink) {
        const user = await User.findOne({where: {activationLink: activationLink}})
        if(!user) {
            throw ErrorHandler.BadRequest('Incorrect activation link')
        }
        await user.update({'isActivated': true})
        console.log(user)
    }
}

export default ActivateService