import express from 'express';
import cors from 'cors';
import employeesRoutes from './routes/employees.routes.js'
import commentsRoutes from './routes/comments.routes.js' 
import indexRoutes from './routes/index.routes.js'
import { PORT } from './config.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use(indexRoutes)
app.use(employeesRoutes)
app.use(commentsRoutes)

app.use((req, res, next) => {
    res.status(404).json({
        message: "Page not found"
    })
})

app.listen(PORT)

console.log("Server running on port: ", PORT)