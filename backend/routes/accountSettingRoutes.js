import express from "express";
import AccountSettings from "../models/AccountSetting.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const settings = await AccountSettings.findOne();
    res.json(settings || {});
  } catch (err) {
    res.status(500).json({ message: "Error fetching account settings" });
  }
});

router.post("/email", async (req, res) => {
  const { email } = req.body;
  try {
    const settings = await AccountSettings.findOneAndUpdate(
      {},
      { email },
      { upsert: true, new: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Error updating email" });
  }
});

router.post("/password", async (req, res) => {
  const { password } = req.body;
  try {
    const settings = await AccountSettings.findOneAndUpdate(
      {},
      { password },
      { upsert: true, new: true }
    );
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: "Error updating password" });
  }
});

export default router;
