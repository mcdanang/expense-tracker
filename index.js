import dotenv from "dotenv";
import express from 'express';
import bodyParser from "body-parser";
import { expenseRouter } from "./routes/expenseRoute.js";

dotenv.config();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(process.env.PORT, () => {
  console.log(`server started on port ${process.env.PORT}`);
});

app.use("/expenses", expenseRouter);