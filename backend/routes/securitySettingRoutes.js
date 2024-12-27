import express from "express";
import SecuritySettings from "../models/SecuritySetting.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const settings = await SecuritySettings.findOne();
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ message: "Error fetching security settings" });
  }
});

router.post("/", async (req, res) => {
  const { twoFactorEnabled } = req.body;
  try {
    const settings = await SecuritySettings.findOneAndUpdate(
      {},
      { twoFactorEnabled },
      { upsert: true, new: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Error updating security settings" });
  }
});

export default router;

