import express, { Express, Request, Response } from "express";
import helmet from "helmet";
import cors from "cors";
import User from "./models/user";
import mongoose from "mongoose";

const port = process.env.PORT;

const app = express();
app.use(express.json());
// app.use(helmet());
// app.use(cors());
mongoose.set("strictQuery", true);
mongoose.connect("mongodb://127.0.0.1:27017/abaseppuku-api", {
  dbName: "abaseppukuDB",
});

app.post("/users", (req: Request, res: Response) => {
  console.log(req.body);
  console.log("Arash");
  const user = new User(req.body);

  user
    .save()
    .then(() => {
      res.send(user);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(port, () => {
  console.log(`now listening on port ${port}`);
});
