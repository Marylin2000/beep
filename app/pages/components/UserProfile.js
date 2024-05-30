import Image from "next/image";
import React from "react";
import userImage from "@/app/assets/images/user.png";
import { FaUser, FaUserCircle } from "react-icons/fa";

function UserProfile() {
  return (
    <div className="flex items-center justify-center flex-col">
      <FaUserCircle className="h-10 w-10 text-gray-500 rounded-full" />
      <p className="text-xs text-gray-600">User Name</p>
    </div>
  );
}

export default UserProfile;
