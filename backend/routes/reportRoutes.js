import express from "express";
import Report from "../models/Report.js";

const router = express.Router();

// Fetch all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching reports" });
  }
});

// Create a new report
router.post("/", async (req, res) => {
  const { title, type, date, status } = req.body;
  try {
    const newReport = new Report({ title, type, date, status });
    await newReport.save();
    res.status(201).json(newReport);
  } catch (error) {
    res.status(500).json({ message: "Error creating report" });
  }
});

// Update an existing report
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, type, date, status } = req.body;
  try {
    const updatedReport = await Report.findByIdAndUpdate(
      id,
      { title, type, date, status },
      { new: true }
    );
    res.json(updatedReport);
  } catch (error) {
    res.status(500).json({ message: "Error updating report" });
  }
});

// Delete a report
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Report.findByIdAndDelete(id);
    res.json({ message: "Report deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting report" });
  }
});

export default router;
