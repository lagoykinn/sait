import { sign, verify } from "jsonwebtoken";
import Token from "../../../database/models/Token";

class TokenService {
    generateTokens(payload) {
        const accessToken = sign(payload, process.env.JWT_ACCESS_SECRET, {
            expiresIn: "15m",
        });

        const refreshToken = sign(payload, process.env.JWT_REFRESH_SECRET, {
            expiresIn: "15m",
        });

        return {
            accessToken, 
            refreshToken
        }
    }

    validateAccessToken(token) {
        try {
            const userData = verify(token, process.env.JWT_ACCESS_SECRET);
            return userData
        } catch (error) {
            return null
        }
    }

    validateRefreshToken(token) {
        try {
            const userData = verify(token, process.env.JWT_REFRESH_SECRET)
            return userData 
        } catch (error) {
            return null
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await Token.findOne({where: {userId}})

        if(tokenData) {
            tokenData.update({refreshToken: refreshToken})
            return tokenData
        }
        
        const token = await Token.create({user: userId, refreshToken})
        return token
    }

    async removeToken(refreshToken) {
        try {
            
            const tokenData = await Token.destroy({where: {refreshToken}})
            return tokenData
        } catch (error) {
            return null   
        }
    }

    async findToken(refreshToken) {
        const tokenData = await Token.findOne({where: {refreshToken}})
        return tokenData
    }
}

export default new TokenService()