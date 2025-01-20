import mongoose from "mongoose";
const userSchema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String },
    email: { type: String, required: true, unique: true },
    resume: { type: String },
    image: { type: String },
    password: { type: String },
  },
  { timestamps: true }
);

const User = mongoose.model("user", userSchema);
export default User;
