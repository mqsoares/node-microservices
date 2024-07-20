import { Router } from "express";
import { PostController } from "../controller/PostController.js";
import { Auth } from "../middleware/Auth.js";

const router = Router();

router.get("/posts", Auth, PostController.findAll);
router.get("/posts/user/:user_id", Auth, PostController.findByUserId);
router.post("/posts", Auth, PostController.save)

export default router;