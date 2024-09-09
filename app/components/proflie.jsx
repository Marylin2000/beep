"use client";
import React from "react";
import { useAuth } from "../context/AuthContext"; // Import useAuth hook
import Link from "next/link";
import Image from "next/image";
import { profileNav } from "../utils/profileNavs";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ProfileComponent = () => {
  const { user } = useAuth(); // Use the useAuth hook

  return (
    <div className="h-screen  w-full flex flex-col bg-gray-100">
      {user ? (
        <div className="">
          <div className="flex bg-red-400 items-center gap-6 p-2">
            <Image
              src={user.photoURL || "/default-profile.png"} // Default image if profile URL is not available
              alt="Profile"
              className="w-24 h-24 rounded-full"
              width={150}
              height={150}
            />
            <idv>
              <h1 className="text-md gap-2 flex">
                Welcome,
                <p className="">{user.displayName || "User"}</p>
              </h1>
              <p className="text-gray-600 mb-4">Email: {user.email}</p>
            </idv>
          </div>
          <section>
            {profileNav.map((item, index) => (
              <Link
              key={index}
                className="flex hover:bg-slate-200 justify-between items-center h-10 p-4"
                href={item.link}
              >
                <span className="flex items-center gap-4">
                  <span>{item.icon}</span>
                  <p>{item.title}</p>
                </span>

                <MdChevronRight size={25} />
              </Link>
            ))}
          </section>

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
          <Link
            href="/login"
            className="px-4 py-2 bg-blue-500 text-white rounded-md mb-2"
          >
            Login
          </Link>
          <Link
            href="/register"
            className="px-4 py-2 bg-green-500 text-white rounded-md"
          >
            Signup
          </Link>
        </div>
      )}
    </div>
  );
};

export default ProfileComponent;
