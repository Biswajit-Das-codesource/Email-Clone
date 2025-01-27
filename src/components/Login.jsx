import React from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setuser } from "../redux/Slicer";

function Login() {
  const dispatch = useDispatch();

  async function handlegoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      dispatch(
        setuser({
          displayname: res.user.displayName,
          email: res.user.email,
          photourl: res.user.photoURL,
        })
      );
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-blue-400 to-indigo-500">
      <div className="bg-white rounded-2xl shadow-lg w-[90%] max-w-md p-8 flex flex-col items-center text-center">
        <img
          src="https://ssl.gstatic.com/ui/v1/icons/mail/rfr/logo_gmail_lockup_default_2x_r5.png"
          alt="Gmail Logo"
          className="w-32 mb-4"
        />
        <h1 className="text-3xl font-bold mb-4 text-gray-800">
          Welcome to <span className="text-blue-500">Biswajit Email Clone</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Sign in with Google to access your account and experience a simplified email management system.
        </p>
        <GoogleButton onClick={handlegoogle} className="mb-6" />
        <p className="text-sm text-gray-400">Crafted by Biswajit</p>
      </div>
    </div>
  );
}

export default Login;
