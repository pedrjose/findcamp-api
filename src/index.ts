import * as express from "express";
import { connectDatabase } from "./database/db";
import * as dotenv from "dotenv";
dotenv.config();

import accountRouter from "./routes/account.route";
import profileRouter from "./routes/profile.route";

const port = process.env.PORT || 3000;
const app = express();

connectDatabase();

app.use(express.json());
app.use("/account", accountRouter);
app.use("/profile", profileRouter);

app.listen(port, () => console.log(`\nSERVER RUNNING ON ${port} PORT!`));
