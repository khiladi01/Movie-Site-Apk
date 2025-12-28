import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          setError("Session expired. Please log in again.");
          setLoading(false);
          return;
        }

        const response = await fetch(
          "http://localhost:5000/api/users/profile",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Failed to fetch profile data");
        }

        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center text-xl text-white bg-black">
        Loading your profile...
      </div>
    );
  }

  if (error) {
    return (
      <div className="h-screen flex items-center justify-center text-red-400 bg-black">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black flex items-center justify-center px-4">
      <div className="w-full max-w-md backdrop-blur-xl bg-white/10 border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
        
        {/* Header */}
        <div className="text-center mb-6">
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-tr from-purple-500 to-pink-500 flex items-center justify-center text-3xl font-bold shadow-lg">
            {user.name?.charAt(0).toUpperCase()}
          </div>
          <h1 className="text-2xl font-semibold mt-4 tracking-wide">
            {user.name}
          </h1>
          <p className="text-sm text-gray-400">{user.email}</p>
        </div>

        {/* Details */}
        <div className="space-y-4 text-sm">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400">Role</span>
            <span className="font-medium">{user.role}</span>
          </div>

          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-gray-400">Status</span>
            <span className="text-green-400 font-medium">Active</span>
          </div>
        </div>

        {/* Actions */}
        <button
          onClick={handleLogout}
          className="w-full mt-8 py-3 rounded-xl bg-red-500/90 hover:bg-red-600 transition-all duration-300 font-semibold tracking-wide"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
