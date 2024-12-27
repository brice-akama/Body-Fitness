import express from "express";
import GeneralSettings from "../models/GeneralSetting.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const settings = await GeneralSettings.findOne();
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ message: "Error fetching general settings" });
  }
});

router.post("/", async (req, res) => {
  const { siteTitle, timezone } = req.body;
  try {
    const settings = await GeneralSettings.findOneAndUpdate(
      {},
      { siteTitle, timezone },
      { upsert: true, new: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Error updating general settings" });
  }
});

export default router;
