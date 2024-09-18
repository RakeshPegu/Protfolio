import express from 'express'
import authRouter from './routes/auth.route.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import userRouter from './routes/user.route.js'
import projectRouter from './routes/project.route.js'
const app = express()

app.use(express.json())
app.use(cookieParser())
app.use(cors({origin: process.env.CLIENT_URL, credentials:true}))
app.use('/api/auth',authRouter)
app.use('/api/user', userRouter)
app.use('/api/project', projectRouter)
app.listen(8000, ()=>{
    console.log("The  server is listening on port 8000")
})