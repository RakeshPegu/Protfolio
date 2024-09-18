import express from 'express'
import { verifyToken } from '../middleWare/verifyToken.js'
import { createProject, deletProject, getProject, getProjects, updateProject } from '../Controllers/project.Controller.js'
const router = express.Router()
router.post('/create_post',createProject)
router.get('/posts', getProjects)
router.get('/post/:id', getProject)
router.put('/updateProject/:id',verifyToken,updateProject)
router.delete('/deleteProject/:id',verifyToken,deletProject)
export default router;