import express from "express";
import AppearanceSettings from "../models/AppearanceSetting.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const settings = await AppearanceSettings.findOne();
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ message: "Error fetching appearance settings" });
  }
});

router.post("/", async (req, res) => {
  const { theme } = req.body;
  try {
    const settings = await AppearanceSettings.findOneAndUpdate(
      {},
      { theme },
      { upsert: true, new: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Error updating appearance settings" });
  }
});

export default router;
