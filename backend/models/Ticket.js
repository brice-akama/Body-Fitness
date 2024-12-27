import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema({
  title: String,
  status: { type: String, enum: ["Pending", "Resolved"], default: "Pending" },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Ticket", ticketSchema);
