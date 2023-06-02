import express from 'express'
const router = express.Router()
import { registerUser, loginUser, getUserGoals } from '../controllers/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/me', protect, getUserGoals)

export default router