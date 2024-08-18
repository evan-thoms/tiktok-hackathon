import React, { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { doc, getDoc } from "firebase/firestore";
import { firestore } from "@/firebase";

const LoginForm = ({ setErrorMessage }) => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    const userRef = doc(firestore, "users", email);
    const user = await getDoc(userRef);

    if (user.exists()) {
      const { password: correctPassword } = user.data();
      if (password === correctPassword) {
        const user_info = {
          username: user.data().username,
          fname: user.data().fname,
          lname: user.data().lname,
        };

        Cookies.set("user", JSON.stringify(user_info), { expires: 1 });
        router.push("/");
      } else {
        setErrorMessage("Incorrect password. Please try again");
      }
    } else {
      setErrorMessage("User does not exist. Please sign up");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login();
    setEmail("");
    setPassword("");
  };

  const handleSignUpRedirect = () => {
    router.push("/signup");
  };

  return (
    <div className="space-y-4 flex flex-col gap-5 py-7">
      <h4 className="text-2xl text-customBrighterRed font-semibold mb-4">Sign In Form</h4>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="p-2 border rounded-lg w-full"
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="p-2 border rounded-lg w-full"
      />
      <button
        onClick={handleSubmit}
        className="bg-customRed hover:bg-customBrighterRed text-white py-2 rounded-lg w-full"
      >
        Login
      </button>
      <div className="text-center my-4 text-gray-500">OR</div>
      <button
        onClick={handleSignUpRedirect}
        className="bg-customRed hover:bg-customBrighterRed text-white py-2 rounded-lg w-full"
      >
        Sign Up
      </button>
    </div>
  );
};

export default LoginForm;
