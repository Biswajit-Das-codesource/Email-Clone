import React from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase";
import { useDispatch } from "react-redux";
import { setuser } from "../redux/Slicer";

function Login() {
  const dispatch = useDispatch()
  async function handlegoogle() {
    try {
      const res = await signInWithPopup(auth, provider);
      console.log(res);
      dispatch(setuser({
        dislayname:res.user.displayName,
        email:res.user.email,
        photourl:res.user.photoURL
      }))
    } catch (err) {
      console.log(err);
    }
  }
  return (
    <div className="h-screen w-full bg-blue-100">
      <h1>login</h1>
      <GoogleButton onClick={handlegoogle} />
    </div>
  );
}

export default Login;
