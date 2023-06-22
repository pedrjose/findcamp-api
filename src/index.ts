import * as express from "express";
import { connectDatabase } from "./database/db";
import * as dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();

app.listen(port, () => console.log(`\nSERVER RUNNING ON ${port} PORT!\n`));