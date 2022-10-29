import { Router } from "express";
import getAllUsers from "../controllers/users/GET/getAllUsers.js";
import getUserById from "../controllers/users/GET/getUserById.js";
import createUser from "../controllers/users/POST/createUser.js";

const router = Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

export default router