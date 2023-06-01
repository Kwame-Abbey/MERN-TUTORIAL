import express from 'express';
import goalRoutes from './routes/goalRoute.js'
import userRoutes from './routes/userRoutes.js'
import dotenv from 'dotenv';
dotenv.config()
import colors from 'colors';
import { errorHandler } from './middleware/errorHandler.js'
import connectDB from './config/db.js'


connectDB()

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)
app.use('/api/users', userRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))