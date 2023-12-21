import ErrorHandler from "../exceptions/ErrorException"
import TokenService from "../services/dependecies/Token.service"
import verify from 'jsonwebtoken'

const authMiddleware = (req, res, next) => {
    try {
        const authorizationHeader = req.headers.authorization
        if(!authorizationHeader) {
            return next(ErrorHandler.UnauthorizedError('No authorization header'))
        }
    
        const accessToken = authorizationHeader.split(' ')[1]
        if(!accessToken) {
            return next(ErrorHandler.UnauthorizedError('No token was added to request'))
        }
    
        const userData = TokenService.validateAccessToken(accessToken)
    
        if(!userData) {
            return next(ErrorHandler.UnauthorizedError('Incorrect token'))
        }
    
        req.user = userData
        console.log(userData)
        next()
    } catch (error) {
        return next(ErrorHandler.UnauthorizedError())
    }
}

export default authMiddleware