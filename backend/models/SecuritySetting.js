import mongoose from "mongoose";

const SecuritySettingsSchema = new mongoose.Schema({
  twoFactorEnabled: { type: Boolean, default: false },
});

export default mongoose.model("SecuritySettings", SecuritySettingsSchema);
