import mongoose from "mongoose";

const AppearanceSettingsSchema = new mongoose.Schema({
  theme: { type: String, default: "light" },
});

export default mongoose.model("AppearanceSettings", AppearanceSettingsSchema);
