import mongoose from "mongoose";

const userDetailSchema = new mongoose.Schema(
  {
    username: String,
    email: String,
    age: Number,
    phonenumber: Number,
    message: String,
    file: String,
  },
  {
    collection: "UserInfo",
  }
);

export default mongoose.model("UserInfo", userDetailSchema);
