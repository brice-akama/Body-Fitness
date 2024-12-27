import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  title: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  status: { type: String, enum: ["Completed", "In Progress"], default: "In Progress" },
});

const Report = mongoose.model("Report", reportSchema);

export default Report;
