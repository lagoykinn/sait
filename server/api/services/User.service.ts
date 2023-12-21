import ErrorHandler from "../exceptions/ErrorException";
import { hash } from "bcrypt";
import { v4 } from "uuid";
import MailService from "./dependecies/Mail.service";
import TokenService from "./dependecies/Token.service";
import UserDto from "../dto/user-dto";
import { compare } from "bcrypt";
import UserController from "../controllers/User.controller";
import { validationResult } from "express-validator";
import { User } from "../../database/Relations";

class UserService {

    // REGISTRATION

    public static async registration(model, dto) {
        const email = dto.email;
        const password = dto.password
        const candidate = await model.findOne({ where: { email } });
        if (candidate) {
            throw ErrorHandler.BadRequest("User with this email alredy exists");
        }
        const hashPassword = await hash(password, 3);
        const activationLink = await v4();

        const user = await model.create({
            ...dto,
            password: hashPassword,
            activationLink: activationLink,
        });

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });
        await MailService.sendActivationMail(
            email,
            `${process.env.API_URL}/api/activate/${activationLink}`
        );
        await TokenService.saveToken(userDto.id, tokens.refreshToken);

        return { ...tokens, user: userDto };
    }

    // LOGIN

    public static async login(model, dto?) {
        const password = dto.password;
        const user = await model.findOne({ where: {email: dto.email }})
        if (!user) {
            throw ErrorHandler.NotFound("User was not found");
        }
        const isEquals = await compare(password, user.password);
        
        if (!isEquals) {
            throw ErrorHandler.BadRequest("Incorrect password");
        }

        const userDto = new UserDto(user);
        const tokens = TokenService.generateTokens({ ...userDto });

        await TokenService.saveToken(userDto.id, tokens.refreshToken);
        return { ...tokens, user: userDto};
    }

    // LOGOUT

    public static async logout(refreshToken) {
        const token = await TokenService.removeToken(refreshToken)
        return token
    }

    public static async refresh(refreshToken) {
        if(!refreshToken) {
            throw ErrorHandler.UnauthorizedError('Incorrect refresh token')
        }
        const userData = TokenService.validateRefreshToken(refreshToken)
        const tokenFromDb = await TokenService.findToken(refreshToken)

        if(!userData) {
            throw ErrorHandler.UnauthorizedError('Cannot find token or user')
        }
        
        const user = await User.findOne({where: {id: userData.id}})
        const userDto = new UserDto(user)
        const tokens = TokenService.generateTokens({...userDto})

        await TokenService.saveToken(userDto.id, tokens.refreshToken)
        return {...tokens, user: userDto}
    }

    public static async getAll(model, dto) {
        const users = model.findAll()
        return users
    }

    public static async deleteOne(req, res, next) {}
}

export default UserService;
