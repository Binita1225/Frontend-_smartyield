"use client";
import React, { useState } from "react";
import axios from "axios";
import { port } from "@/constants/appl.constant";
import Logo from "@/components/UI/Logo";
import LoginButton from "@/components/UI/LoginButton";
// import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

// type userData = {
//   email: string;
//   name: string;
//   role: string;
// };

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = { email, password };

    try {
      const response = await axios.post(`${port}/user/login`, payload, {
        headers: { "Content-Type": "application/json" },
      });
      console.log(response.data);

      localStorage.setItem("token", response.data.accessToken);
      localStorage.setItem("userData", JSON.stringify(response.data));

      Cookies.set("token", response.data.accessToken, {
        expires: 1,
        path: "/",
      });

      const user = {
        id: response.data[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier"
        ],
        name: response.data[
          "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name"
        ],
        email:
          response.data[
            "http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress"
          ],
        role: response.data[
          "http://schemas.microsoft.com/ws/2008/06/identity/claims/role"
        ],
      };

      Cookies.set(
        "userData",
        JSON.stringify({
          email: user.email,
          name: user.name,
          role: user.role,
        }),
        { expires: 1, path: "/" }
      );

      if (user.role === "SuperAdmin" || user.role === "Admin") {
        window.location.href = "/admin";
      } else {
        window.location.href = "/";
      }
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F2ECDB] bg-cover ">
      <div className="w-[900px] bg-[url('/login-bg.svg')] bg-no-repeat bg-contain h-[50vh]">
        <div className="w-[400px] mx-auto bg-white p-10 rounded-md">
          <div className="flex items-center justify-center">
            <Logo />
          </div>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 rounded-md  border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
                placeholder="user@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full p-2 rounded-md  border-2 border-gray-300 shadow-sm focus:outline-none focus:border-[#4C6F35] sm:text-sm"
                placeholder="••••••••"
                required
              />
            </div>

            <div className="w-full">
              <LoginButton name="Login" />
            </div>
          </form>
          <div style={{ marginTop: 16 }}>
            Don&apos;t have an account? <a href="/Auth/register">Register</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
