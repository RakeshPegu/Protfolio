import express from 'express'
import { deleteUser, getUser, getUsers, updateUser } from '../Controllers/user.Controller.js';
import { verifyToken } from '../middleWare/verifyToken.js';
const router = express.Router();
router.get('/', getUsers)
router.get("/:id",verifyToken, getUser)
router.put('/:id',verifyToken, updateUser)
router.delete('/:id',verifyToken, deleteUser)
export default router;