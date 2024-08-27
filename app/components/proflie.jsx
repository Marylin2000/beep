"use client";
import React from "react";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import Link from "next/link";

const ProfileComponent = () => {
  const { user } = useAuth(); // Use the useAuth hook

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {user ? (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <img
            src={user.photoURL || "/default-profile.png"} // Default image if profile URL is not available
            alt="Profile"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h1 className="text-xl font-bold mb-2">{user.displayName || "User"}</h1>
          <p className="text-gray-600 mb-4">{user.email}</p>
          <button
            onClick={() => {
              // Add logic for logging out
              auth.signOut().then(() => {
                alert("You have been logged out.");
                window.location.href = "/login"; // Redirect to login page
              });
            }}
            className="px-4 py-2 bg-red-500 text-white rounded-md"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-xl font-bold mb-4">You are not logged in</h1>
          <Link href="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2">
            Login
          </Link>
          <Link href="/signup" className="px-4 py-2 bg-green-500 text-white rounded-md">
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
