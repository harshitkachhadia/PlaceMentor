import {Router} from "express"
import {profile} from "../controllers/userProfile.js"
import auth from "../middleware/auth.js";

const userProfile = Router();


userProfile.get("/",auth,profile)

export default userProfile;