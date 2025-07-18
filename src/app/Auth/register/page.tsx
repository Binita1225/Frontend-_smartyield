"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Logo from "@/components/UI/Logo";
import LoginButton from "@/components/UI/LoginButton";

const RegisterPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    Username: "",
    Email: "",
    Password: "",
    ConfirmPassword: "",
    RoleId: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const errs: any = {};
    if (!form.Username) errs.Username = "Please enter your name";
    if (!form.Email) errs.Email = "Please enter your email address";
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.Email))
      errs.Email = "Invalid email address";
    if (!form.Password) errs.Password = "Please enter password";
    if (!form.ConfirmPassword) errs.ConfirmPassword = "Fill this field";
    if (
      form.Password &&
      form.ConfirmPassword &&
      form.Password !== form.ConfirmPassword
    )
      errs.ConfirmPassword = "Password not matched";
    if (!form.RoleId) errs.RoleId = "Please select a role";
    return errs;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitting(true);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/User/register",
          {
            username: form.Username,
            email: form.Email,
            password: form.Password,
            confirmPassword: form.ConfirmPassword,
            roleId: Number(form.RoleId),
          }
        );

        console.log("REGISTER RESPONSE", response.data);
        // Check backend status (4 = Ok)
        if (
          response.data?.status === 4 ||
          response.data?.Status === 4 ||
          response.data?.Status === "Ok" ||
          response.data?.status === "Ok"
        ) {
          alert("Registration successful! Please login.");
          router.push("/Auth/login");
        } else {
          alert(
            response.data?.message ||
              response.data?.Message ||
              "Registration failed. Please try again."
          );
        }
      } catch (error: any) {
        alert(
          error?.response?.data?.message ||
            "Registration failed. Please try again."
        );
      } finally {
        setSubmitting(false);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2ECDB] bg-cover">
      <div className="w-[900px] h-[500px] bg-[url('/login-bg.svg')] bg-no-repeat bg-contain flex items-center justify-center">
        <div className="w-[400px] bg-white p-10 rounded-md shadow-lg">
          {/* <div className="flex items-center justify-center mb-4">
            <Logo />
          </div> */}
          <h2 className="text-xl font-semibold text-center mb-6">Register</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="Username"
                value={form.Username}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
              {errors.Username && (
                <p className="text-red-500 text-sm mt-1">{errors.Username}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="Email"
                value={form.Email}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
              {errors.Email && (
                <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="Password"
                value={form.Password}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
              {errors.Password && (
                <p className="text-red-500 text-sm mt-1">{errors.Password}</p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Confirm Password
              </label>
              <input
                type="password"
                name="ConfirmPassword"
                value={form.ConfirmPassword}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              />
              {errors.ConfirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.ConfirmPassword}
                </p>
              )}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                name="RoleId"
                value={form.RoleId}
                onChange={handleChange}
                className="mt-1 block w-full p-2 rounded-md border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
              >
                <option value="">Select Role</option>
                <option value="1">Admin</option>
                <option value="2">User</option>
              </select>
              {errors.RoleId && (
                <p className="text-red-500 text-sm mt-1">{errors.RoleId}</p>
              )}
            </div>

            <div className="w-full mb-2">
              <LoginButton name={submitting ? "Registering..." : "Register"} />
            </div>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{" "}
            <a href="/Auth/login" className="text-blue-600">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
