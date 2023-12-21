import Router from "express";
import UserController from "../api/controllers/User.controller";
import { body } from "express-validator";
import authMiddleware from "../api/middlewares/auth-middleware";
const router = Router();

router.post(
    "/registration",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 32 }),
    UserController.registration
);
router.post("/logout", UserController.logout)
router.post('/login', UserController.login)
router.get('/refresh', UserController.refresh)
router.get("/user", authMiddleware, UserController.getAll);

export default router;
