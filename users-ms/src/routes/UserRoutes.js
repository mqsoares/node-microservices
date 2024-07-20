import { Router } from "express";
import { UserController } from "../controller/UserController.js";
import { Auth } from "../middleware/Auth.js";

const router = Router();

router.get("/users", Auth, UserController.findAll);
router.get("/users/:username", UserController.findUserByName);
router.post("/users", Auth, UserController.save);

export default router;