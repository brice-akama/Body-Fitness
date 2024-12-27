import mongoose from "mongoose";

const AccountSettingsSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

export default mongoose.model("AccountSettings", AccountSettingsSchema);
