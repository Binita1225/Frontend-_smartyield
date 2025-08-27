"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { port } from "@/constants/appl.constant";
import { startTransition } from "react";
import LoginButton from "@/components/UI/LoginButton";
import Logo from "@/components/UI/Logo";

export default function RegisterPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    roleId: 2,
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${port}/user/register`, formData, {
        headers: { "Content-Type": "application/json" },
      });

      console.log(response.data);
      if (response.data.status === 0 || response.data.status === "Ok") {
        setSuccess("Registration successful. Redirecting to login...");
        setTimeout(() => {
          startTransition(() => {
            router.push("/Auth/login");
          });
        }, 2000);
      } else {
        setError(response.data.message || "Registration failed");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error("Registration error:", err);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-[#F2ECDB] bg-cover">
      <div className="mt-6 w-[900px] bg-[url('/login-bg.svg')] bg-no-repeat bg-contain h-[60vh]">
        <div className="w-[400px] mx-auto bg-white p-10 pt-2 pb-3 rounded-md">
          <div className="flex items-center justify-center mb-2">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
            {error && (
              <div className="mb-4 text-red-600 text-sm font-semibold">
                {error}
              </div>
            )}
            {success && (
              <div className="mb-4 text-green-600 text-sm font-semibold">
                {success}
              </div>
            )}

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="roleId"
                value={formData.roleId}
                onChange={handleChange}
                required
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              >
                <option value={2}>Registered User</option>
                {/* Admin role should not be selectable by normal users */}
              </select>
            </div>

            <div className="w-full">
              <LoginButton name="Register" />
            </div>
          </form>

          <div style={{ marginTop: 16 }}>
            Already have an account? <a href="/Auth/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
