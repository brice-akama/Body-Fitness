import mongoose from "mongoose";

const GeneralSettingsSchema = new mongoose.Schema({
  siteTitle: { type: String, required: true },
  timezone: { type: String, default: "UTC" },
});

export default mongoose.model("GeneralSettings", GeneralSettingsSchema);
