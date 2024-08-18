import React, { useState } from "react";
import { useRouter } from "next/router";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { firestore } from "@/firebase";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import MultiSelect from "../../components/multiselect";

const SignUpPage = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [username, setUsername] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [validSignUp, setValidSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);

  const tags = [
    "Travel",
    "Programming",
    "Cars",
    "Market",
    "Photography",
    "Miscellaneous",
  ];

  const handleSignUp = async () => {
    const userRef = doc(firestore, "users", email);
    const user = await getDoc(userRef);

    if (user.exists()) {
      setErrorMessage("User already exists. Please login");
    } else {
      await setDoc(doc(firestore, "users", email), {
        password,
        username,
        fname,
        lname,
        tags: selectedTags,
      });

      setErrorMessage("User created! Please login");
      router.push("/login");
    }
  };

  const validateSignUp = (
    password,
    confirmPassword,
    email,
    username,
    fname,
    lname
  ) => {
    setValidSignUp(
      password === confirmPassword &&
        password !== "" &&
        confirmPassword !== "" &&
        email !== "" &&
        username !== "" &&
        fname !== "" &&
        lname !== ""
    );
  };

  return (
    <div className="bg-customBeige">
      <Header />
      <div className="flex mb-20 justify-center items-center h-screen">
        <div className="bg-white p-6 flex flex-col gap-5 rounded-lg shadow-lg max-w-md w-full">
          <h4 className="text-3xl text-customBrighterRed font-semibold mb-4">
            Sign Up Form
          </h4>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              validateSignUp(
                password,
                rePassword,
                email,
                e.target.value,
                fname,
                lname
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="First Name"
            value={fname}
            onChange={(e) => {
              setFname(e.target.value);
              validateSignUp(
                password,
                rePassword,
                email,
                username,
                e.target.value,
                lname
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lname}
            onChange={(e) => {
              setLname(e.target.value);
              validateSignUp(
                password,
                rePassword,
                email,
                username,
                fname,
                e.target.value
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateSignUp(
                password,
                rePassword,
                e.target.value,
                username,
                fname,
                lname
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validateSignUp(
                e.target.value,
                rePassword,
                email,
                username,
                fname,
                lname
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />
          <input
            type="password"
            placeholder="Re-enter Password"
            value={rePassword}
            onChange={(e) => {
              setRePassword(e.target.value);
              validateSignUp(
                password,
                e.target.value,
                email,
                username,
                fname,
                lname
              );
            }}
            className="p-2 mb-4 border rounded-lg w-full"
          />  
          <MultiSelect
            formFieldName={"tag-select"}
            options={tags}
            onChange={(e) => {
              setSelectedTags(e);
              console.log(selectedTags);
            }}
            prompt="Choose your interests"
          />
          <button
            disabled={!validSignUp}
            onClick={handleSignUp}
            className={`${
              validSignUp
                ? "bg-customRed hover:customBrighterRed"
                : "bg-gray-400"
            } text-white py-2 rounded-lg w-full`}
          >
            Sign Up
          </button>
          {errorMessage && (
            <p className="text-center text-red-500 mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUpPage;
