import express from "express";
import mongoose from "mongoose";
import UserInfo from "./userDetails.js";
import cors from "cors";
import sendEmail from "./sendmail.js";

const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 4000;

const mongourl =
  "mongodb+srv://Vignesh:XnRtrg7uqTuxnPnu@cluster0.dv4roiz.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(mongourl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connnected");
  })
  .catch((e) => console.log(e));

const db = mongoose.connection;

app.get("/", (req, res) => {
  console.log("hi");
});

app.post("/register", async (req, res) => {
  const { username, email, age, phonenumber, message, file } = req.body;
  try {
    await UserInfo.create({
      username,
      email,
      age,
      phonenumber,
      message,
      file,
    });
    sendEmail();
    console.log(username, email, age, phonenumber, message);
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error" });
  }
});
// app.listen(4000, () => {
//   console.log("hello hi");
// });

app.listen(port, () => console.log(`Listening to localhost: ${port}`));
