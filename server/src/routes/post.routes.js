import { Router } from "express";
import { getposts } from '../controllers/post.controller.js'
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { limiter } from "../utils/RateLimit.js";

const router = Router()


// router.route("/getposts").get(verifyJWT, limiter, getposts )
router.route("/getposts").get( limiter, getposts )
    

export default router