import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  // For form fields
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [forgotPassword, setForgotPassword] = useState({ email: "" });

  const navigate = useNavigate();

  // Handle login form submission
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/login", loginForm);
      const { token } = response.data;

      // Save token to local storage
      localStorage.setItem("token", token);

      // Show success toast notification
      toast.success("Login successful!");

      // Redirect to the home page after success
      setTimeout(() => navigate("/"), 2000); // Wait for the toast to display
    } catch (error) {
      toast.error(error.response?.data?.message || "Login failed. Please try again.");
    }
  };

  // Handle register form submission
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/register", registerForm);
      toast.success("Account created successfully! Please log in.");
      setShowRegister(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Registration failed. Please try again.");
    }
  };

  // Handle forgot password form submission
  const handleForgotPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/forgot-password", forgotPassword);
      toast.success("Password reset link sent to your email.");
      setShowForgotPassword(false);
    } catch (error) {
      toast.error(error.response?.data?.message || "Password reset failed. Please try again.");
    }
  };

  return (
    <section className="py-16">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 rounded-lg shadow-md mt-10">
        {!showRegister && !showForgotPassword && (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">Login</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={loginForm.email}
                  onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={loginForm.password}
                  onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                Log In
              </button>
            </form>
            <div className="mt-4 text-center">
              <button onClick={() => setShowForgotPassword(true)} className="text-blue-600">
                Forgot Password?
              </button>
            </div>
            <div className="mt-4 text-center">
              <p>
                Don't have an account?{" "}
                <button onClick={() => setShowRegister(true)} className="text-blue-600">
                  Create Account
                </button>
              </p>
            </div>
          </>
        )}

        {showRegister && (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">Create Account</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                  type="text"
                  value={registerForm.name}
                  onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={registerForm.email}
                  onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Password</label>
                <input
                  type="password"
                  value={registerForm.password}
                  onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  value={registerForm.confirmPassword}
                  onChange={(e) => setRegisterForm({ ...registerForm, confirmPassword: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                Register
              </button>
            </form>
            <div className="mt-4 text-center">
              <p>
                Already have an account?{" "}
                <button onClick={() => setShowRegister(false)} className="text-blue-600">
                  Login Here
                </button>
              </p>
            </div>
          </>
        )}

        {showForgotPassword && (
          <>
            <h2 className="text-3xl font-bold text-center mb-8">Forgot Password</h2>
            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <label className="block text-gray-700">Email Address</label>
                <input
                  type="email"
                  value={forgotPassword.email}
                  onChange={(e) => setForgotPassword({ ...forgotPassword, email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg">
                Reset Password
              </button>
            </form>
            <div className="mt-4 text-center">
              <p>
                Remember your password?{" "}
                <button onClick={() => setShowForgotPassword(false)} className="text-blue-600">
                  Login Here
                </button>
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default Login;
