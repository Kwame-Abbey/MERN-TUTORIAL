import express from 'express'
const router = express.Router()
import { registerUser, loginUser, getUserGoals } from '../controllers/userController.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', getUserGoals)

export default router