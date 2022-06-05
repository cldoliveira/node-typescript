import { createUser, findAllUsers, findOneUser, updateUser } from '@controller/UserController';
import express from 'express';

const router = express.Router()

router.post("/users", createUser)
router.get("/users", findAllUsers)
router.get("/users/:userId", findOneUser)
router.put("/users/:userId", updateUser)

export { router }