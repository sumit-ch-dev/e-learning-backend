import { Request, Response } from 'express';
import dotenv from 'dotenv';
import { app } from './app'

//For env File 
dotenv.config();

// const app: Application = express();s
const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log(`Server is Fire at http://localhost:${port}`);
});