import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Settings = () => {
  const [loading, setLoading] = useState(false);
  

const [seoTitle, setSeoTitle] = useState('');
const [seoDescription, setSeoDescription] = useState('');
  
  // General Settings
  const [siteTitle, setSiteTitle] = useState("");
  const [timezone, setTimezone] = useState("UTC");

  // Account Settings
  const [email, setEmail] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Security Settings
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  // Appearance Settings
  const [theme, setTheme] = useState("light");

  // Fetch all settings on load
  useEffect(() => {
    const fetchSettings = async () => {
      try {
        setLoading(true);
        const [generalRes, accountRes, securityRes, appearanceRes] = await Promise.all([
          axios.get("http://localhost:4000/api/settings/general"),
          axios.get("http://localhost:4000/api/settings/account"),
          axios.get("http://localhost:4000/api/settings/security"),
          axios.get("http://localhost:4000/api/settings/appearance"),
        ]);

        // Update states with fetched data
        setSiteTitle(generalRes.data.siteTitle);
        setTimezone(generalRes.data.timezone);
        setEmail(accountRes.data.email);
        setTwoFactorEnabled(securityRes.data.twoFactorEnabled);
        setTheme(appearanceRes.data.theme);
      } catch (error) {
        toast.error("Failed to load settings. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSaveSeoSettings = (e) => {
    e.preventDefault();
    // Save SEO settings
    alert('SEO settings saved successfully!');
  };


  // Handlers for each settings update
  const handleSaveGeneralSettings = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/settings/general", { siteTitle, timezone });
      toast.success("General settings updated successfully!");
    } catch (error) {
      toast.error("Failed to update general settings.");
    }
  };

  const handleSaveAccountSettings = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      return toast.error("Passwords do not match.");
    }
    try {
      await axios.post("http://localhost:4000/api/settings/account/email", { email });
      await axios.post("http://localhost:4000/api/settings/account/password", { currentPassword, newPassword });
      toast.success("Account settings updated successfully!");
    } catch (error) {
      toast.error("Failed to update account settings.");
    }
  };

  const handleSaveSecuritySettings = async () => {
    try {
      await axios.post("http://localhost:4000/api/settings/security", { twoFactorEnabled });
      toast.success("Security settings updated successfully!");
    } catch (error) {
      toast.error("Failed to update security settings.");
    }
  };

  const handleSaveAppearanceSettings = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/settings/appearance", { theme });
      toast.success(`Theme changed to ${theme}`);
    } catch (error) {
      toast.error("Failed to update appearance settings.");
    }
  };

  if (loading) {
    return <div>Loading settings...</div>;
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Settings</h1>

      {/* General Settings */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">General Settings</h2>
        <form onSubmit={handleSaveGeneralSettings}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Site Title</label>
            <input
              type="text"
              value={siteTitle}
              onChange={(e) => setSiteTitle(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Timezone</label>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
            >
              <option value="UTC">UTC</option>
              <option value="PST">PST</option>
              <option value="EST">EST</option>
              <option value="GMT">GMT</option>
            </select>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save General Settings
          </button>
        </form>
      </section>

      {/* Account Settings */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Account Settings</h2>
        <form onSubmit={handleSaveAccountSettings}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Current Password</label>
            <input
              type="password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">New Password</label>
            <input
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md p-2"
              required
            />
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
            Save Account Settings
          </button>
        </form>
      </section>

      {/* Security Settings */}
      <section className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Security Settings</h2>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            checked={twoFactorEnabled}
            onChange={() => setTwoFactorEnabled((prev) => !prev)}
            className="mr-2"
          />
          <span className="text-gray-700">Enable Two-Step Verification</span>
        </div>
        <button
          onClick={handleSaveSecuritySettings}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Security Settings
        </button>
      </section>
    <section>
      {/* SEO Settings */}
<div className="bg-white shadow-md rounded-lg p-6 mb-6">
<h2 className="text-xl font-semibold text-gray-700 mb-4">SEO Settings</h2>
<form onSubmit={handleSaveSeoSettings}>
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">SEO Title</label>
    <input
      type="text"
      value={seoTitle}
      onChange={(e) => setSeoTitle(e.target.value)}
      className="w-full border-gray-300 rounded-md p-2"
      required
    />
  </div>
  <div className="mb-4">
    <label className="block text-gray-700 font-medium mb-2">SEO Description</label>
    <textarea
      value={seoDescription}
      onChange={(e) => setSeoDescription(e.target.value)}
      className="w-full border-gray-300 rounded-md p-2"
      rows="4"
      required
    />
  </div>
  <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
    Save SEO Settings
  </button>
</form>
</div>
    </section>
      {/* Appearance Settings */}
      <section className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Appearance Settings</h2>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-2">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border-gray-300 rounded-md p-2"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <button
          onClick={handleSaveAppearanceSettings}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Save Appearance Settings
        </button>
      </section>
    </div>
  );
};

export default Settings;
``
