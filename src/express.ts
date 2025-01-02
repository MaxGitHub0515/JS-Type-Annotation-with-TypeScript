
import express, {Request, Response} from "express";
import dotenv from "dotenv";
dotenv.config()
const app = express();
const port = process.env.PORT || 8000;


app.get('/', (req:Request,res: Response) => {
    res.json("Typescript with Express")
});
app.listen(port, () => {
    console.log("Server is running on port " + port);
});
