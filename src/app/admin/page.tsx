"use client";
import React, { useState } from "react";
import UsersPage from "./user/page";
import DiseasesPage from "./disease/page";
import PrimaryButton from "@/components/UI/PrimaryButton";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState<"users" | "diseases">("users");

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-5 text-center">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-6">
        <PrimaryButton
          name="Manage Users"
          onClick={() => setActiveTab("users")}
        />
        <PrimaryButton
          name="Manage Disease Treatments"
          onClick={() => setActiveTab("diseases")}
        />
      </div>

      {/* Content */}
      <div className="mt-5">
        {activeTab === "users" && <UsersPage />}
        {activeTab === "diseases" && <DiseasesPage />}
      </div>
    </div>
  );
};

export default AdminDashboard;
