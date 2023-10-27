require('dotenv').config()
import express, { Application, NextFunction, Request, Response } from 'express'
export const app: Application = express()

import cors from 'cors'
import cookieParser from 'cookie-parser'


app.use(express.json({limit: '50mb'}))

app.use(cookieParser())

app.use(cors({
    origin: process.env.ORIGIN,
    credentials: true
}))

// testing api
app.get('/test', (req: Request, res: Response, next: NextFunction) => {
    res.send('Welcome to Express & TypeScript Server');
})

app.all('*', (req: Request, res: Response, next: NextFunction) => {
    const err = new Error(`Route ${req.originalUrl} Not Found`) as any
    err.statusCode = 404
    next(err)
})