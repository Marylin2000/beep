import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import { FaEnvelope, FaLock, FaUserAlt } from "react-icons/fa";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleRegister = async () => {
    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    const url = "http://192.168.43.167:8000/register";
    const user = { name, email, password };

    try {
      const response = await axios.post(url, user);
      if (response.status !== 200) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      console.log(response.data);
      alert("Registration successful, check your email for verification code");
      setName("");
      setEmail("");
      setPassword("");
      router.push("/"); // Redirect to login after successful registration
    } catch (error) {
      console.error("An error occurred", error);
      alert("Failed to register");
    }
  };

  return (
    <div className="flex items-center bg-white h-full min-h-screen flex-col">
      <Image
        className="h-24 w-36 my-10"
        src="/logo.png"
        alt="Logo"
        width={150}
        height={100}
      />
      <div className="flex flex-col items-center w-full">
        <h1 className="font-bold text-[#041e42] text-lg">Sign up account</h1>
      </div>
      <div className="my-20">
        <div className="flex items-center gap-2 bg-gray-300 rounded-md px-2 py-1 my-5">
          <FaUserAlt size={25} color={"gray"} />
          <input
            className="flex-1 my-3 p-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter Username"
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-300 rounded-md px-2 py-1 my-5 w-72">
          <FaEnvelope color={"gray"} size={24} />
          <input
            className="flex-1 my-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your Email"
          />
        </div>
        <div className="flex items-center gap-2 bg-gray-300 rounded-md px-2 py-1 w-72">
          <FaLock size={30} color={"gray"} />
          <input
            type="password"
            className="flex-1 my-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
          />
        </div>
        <div className="flex justify-between mt-2">
          <div className="flex items-center">
            <span>Keep me logged in</span>
          </div>
          <span className="text-blue-400 font-bold">Forgot password</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-4">
        <button
          onClick={handleRegister}
          className="rounded-md bg-red-400 w-48 h-12 flex items-center justify-center"
        >
          <span className="text-white font-bold text-xl">Register</span>
        </button>
        <button
          onClick={() => router.push("/login")}
          className="cursor-pointer text-red-400"
        >
          {" have an account? Login"}
        </button>
      </div>
    </div>
  );
}
