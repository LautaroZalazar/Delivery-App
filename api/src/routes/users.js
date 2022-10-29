import { Router } from "express";
import deleteUser from "../controllers/users/DELETE/deleteUser.js";
import getAllUsers from "../controllers/users/GET/getAllUsers.js";
import getUserById from "../controllers/users/GET/getUserById.js";
import createUser from "../controllers/users/POST/createUser.js";
import updateUser from "../controllers/users/PUT/updateUser.js";

const router = Router()

router.get('/', getAllUsers)

router.get('/:id', getUserById)

router.post('/', createUser)

router.put('/:id', updateUser)

router.delete('/:id', deleteUser)

export default router