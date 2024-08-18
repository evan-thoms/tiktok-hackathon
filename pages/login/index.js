import React, { useState } from "react";
import LoginForm from "../../components/LoginForm";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


function LoginPage() {
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div className="bg-customBeige">
      <Header />
      <div className="flex justify-center items-center h-screen">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
          <LoginForm setErrorMessage={setErrorMessage} />
          {errorMessage && (
            <p className="text-center text-red-500 mt-4">{errorMessage}</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
