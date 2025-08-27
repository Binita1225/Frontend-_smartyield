"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { port } from "@/constants/appl.constant";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";

const UsersPage = () => {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Edit state
  const [editingUserId, setEditingUserId] = useState<number | null>(null);
  const [editFormData, setEditFormData] = useState({
    username: "",
    email: "",
    roleId: 2, // default user
  });

  // Fetch users from API
  const fetchUsers = async () => {
    try {
      const response = await axios.get(`${port}/Admin/users`);
      setUsers(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch users");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Start editing a user
  const startEditUser = (user: any) => {
    setEditingUserId(user.userId);
    setEditFormData({
      username: user.username,
      email: user.email,
      roleId: user.roleName === "Admin" ? 1 : 2,
    });
  };

  // Handle form input changes
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEditFormData({ ...editFormData, [e.target.name]: e.target.value });
  };

  // Save changes
  const saveUserChanges = async () => {
    if (!editingUserId) return;
    try {
      await axios.put(`${port}/Admin/users/${editingUserId}`, editFormData, {
        headers: { "Content-Type": "application/json" },
      });
      setEditingUserId(null);
      fetchUsers();
    } catch (err) {
      console.error("Failed to update user", err);
    }
  };

  // Delete user
  const deleteUser = async (userId: number) => {
    if (!confirm("Are you sure you want to delete this user?")) return;
    try {
      await axios.delete(`${port}/Admin/users/${userId}`);
      fetchUsers();
    } catch (err) {
      console.error("Failed to delete user", err);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Users</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Username</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Role</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.userId}>
              <td className="border p-2">{user.userId}</td>
              <td className="border p-2">
                {editingUserId === user.userId ? (
                  <input
                    type="text"
                    name="username"
                    value={editFormData.username}
                    onChange={handleEditChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.username
                )}
              </td>
              <td className="border p-2">
                {editingUserId === user.userId ? (
                  <input
                    type="email"
                    name="email"
                    value={editFormData.email}
                    onChange={handleEditChange}
                    className="border p-1 rounded"
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="border p-2">
                {editingUserId === user.userId ? (
                  <select
                    name="roleId"
                    value={editFormData.roleId}
                    onChange={handleEditChange}
                    className="border p-1 rounded"
                  >
                    <option value={1}>Admin</option>
                    <option value={2}>User</option>
                  </select>
                ) : (
                  user.roleName
                )}
              </td>
              <td className="border p-2 w-[200px] gap-2">
                <div className="flex gap-2 justify-center">
                  {editingUserId === user.userId ? (
                    <>
                      <PrimaryButton name="Save" onClick={saveUserChanges} />
                      <SecondaryButton
                        name="Cancel"
                        onClick={() => setEditingUserId(null)}
                      />
                    </>
                  ) : (
                    <>
                      <PrimaryButton
                        name="Edit"
                        onClick={() => startEditUser(user)}
                      />
                      <SecondaryButton
                        name="Delete"
                        onClick={() => deleteUser(user.userId)}
                      />
                    </>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersPage;
