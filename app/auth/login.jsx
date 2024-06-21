"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import logo from "@/app/assets/images/logo.png"
import axios from "axios";
import { FaEnvelopeOpen, FaLock, FaThumbsUp } from "react-icons/fa";
import Image from "next/image";
import { useUser } from "../context/UserContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [login, setLogin] = useState(false);
  const { setUser } = useUser();

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const token = localStorage.getItem("authToken");
        if (token) {
          router.replace("/");
        }
      } catch (error) {
        console.log(error);
      }
    };

    checkLoginStatus();
  }, [router]);

  const handleLogin = async () => {
    const user = { email, password };
    try {
      const response = await axios.post("http://192.168.43.167:8000/login", user);
      console.log(response);
      const token = response.data.token;
      const userInfo = response.data.user; // Assume your API returns user info
      localStorage.setItem("authToken", token);
      setUser(userInfo); // Set user info in context
      router.replace("/");
    } catch (error) {
      alert("Login error: Invalid login");
      console.log(error);
      setLogin(true);
    }
  };

  return (
    <div className="flex w-full h-full items-center bg-white h-full min-h-screen flex-col">
      <Image
        src={logo}
        alt="Logo"
        width={150}
        height={150}
      
      />
      <div className="flex flex-col items-center w-full">
        <h1 className="font-bold text-[#041e42] text-lg">
          Login to your account
        </h1>
      </div>
      <div className="my-20">
        <div className="bg-slate-200 my-5 flex items-center gap-2 py-1 px-2 w-fit  rounded-md">
          <FaEnvelopeOpen className="text-gray-600" size={24} />
          <input
            className=" my-3 bg-transparent outline-none"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="bg-slate-200 flex items-center gap-2 py-1 w-fit px-2 rounded-md">
          <FaLock className="text-gray-600" size={24} />
          <input
            type="password"
            className=" my-3 bg-transparent outline-none"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between mt-2">
          <span>Keep me logged in</span>
          <span className="text-blue-400 font-bold">Forgot password</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleLogin}
          className="rounded-md bg-red-400 w-48 h-12 flex items-center justify-center"
        >
          {login ? <FaThumbsUp /> : <span className="text-white font-bold text-xl">Login</span>}
        </button>
        <button onClick={() => router.push("/register")}>
          {"Don't have an account? Register"}
        </button>
      </div>
    </div>
  );
}
