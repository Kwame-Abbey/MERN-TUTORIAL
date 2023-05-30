import express from 'express';
import goalRoutes from './routes/goalRoute.js'
import { errorHandler } from './middleware/errorHandler.js'

const port = process.env.PORT || 6000;

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended: false}))

app.use('/api/goals', goalRoutes)

app.use(errorHandler)

app.listen(port, () => console.log(`Server started on port ${port}`))