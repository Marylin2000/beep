"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import logo from "@/app/assets/images/logo.png";
import { TypeAnimation } from "react-type-animation";
import { FaEnvelopeOpen, FaLock, FaUserAlt, FaFacebook, FaGoogle } from "react-icons/fa";
import { auth, googleProvider} from "../../firebase"; // Ensure correct import

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

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Optionally, you can update the user's profile with their name
      await user.updateProfile({
        displayName: name,
      });

      alert("Registration successful, check your email for verification.");
      setName("");
      setEmail("");
      setPassword("");
      router.push("/login"); // Redirect to login after successful registration
    } catch (error) {
      console.error("An error occurred", error);
      alert("Failed to register");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log("Google Sign-In successful:", user);
  
      // Redirect to home page
      router.push("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Google Sign-In failed. Please try again.");
    }
  };




  return (
    <main className="block lg:grid grid-cols-2">
      <section className={`background hidden lg:block bg-[url('../app/assets/images/foodpanda-food.gif')] w-full h-full bg-no-repeat bg-cover`}>
        <div className="bg-black/70 flex items-center justify-center flex-col  backdrop-blur-[1.5px] h-full w-full">
          <div className="my-5">
            <p className="text-3xl font-bold text-slate-300 ">Welcome to Beep</p>
            <p className="underline italic text-slate-400 text-xs">your best online market</p>
          </div>
          <p>We offer</p>
          <TypeAnimation
            sequence={[
              'Fast Delivery',
              1000,
              'Secure payments',
              1000,
              'Reliability',
              1000,
              'Best products and services',
              1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block', color:"rgba(248 113 113)" }}
            repeat={Infinity}
          />
        </div>
      </section>

      <div className="flex items-center lg:justify-center bg-white h-full min-h-screen flex-col">
        <Image
          src={logo}
          alt="Logo"
          width={150}
          height={150}
        />
        <div className="flex flex-col items-center w-full">
          <h1 className="font-bold text-[#041e42] text-lg">Sign up account</h1>
        </div>
        <div className="my-4">
          <div className="flex items-center gap-3 bg-slate-200 rounded-md px-2 py-1 my-5">
            <FaUserAlt size={25} color={"gray"} />
            <input
              className="my-3 bg-transparent outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Username"
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-200 rounded-md px-2 py-1 my-5">
            <FaEnvelopeOpen color={"gray"} size={25} />
            <input
              className="my-3 bg-transparent outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your Email"
            />
          </div>
          <div className="flex items-center gap-3 bg-slate-200 rounded-md px-2 py-1 w-fit">
            <FaLock size={25} color={"gray"} />
            <input
              type="password"
              className="flex-1 my-3 bg-transparent outline-none"
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
          <div className="flex gap-4 mt-4">
            <button
              onClick={handleGoogleSignIn}
              className="rounded-md bg-red-400 w-48 h-12 flex items-center justify-center"
            >
              <FaGoogle size={25} color={"white"} />
              <span className="text-white font-bold text-xs ml-2">Sign in with Google</span>
            </button>
           
          </div>
        </div>
      </div>
    </main>
  );
}
