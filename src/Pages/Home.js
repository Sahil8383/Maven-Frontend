import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";

export const Home = () => {
  const { isSignedIn, user, isLoaded } = useUser();
  const { userId } = useAuth();

  const auth = async () => {
    if(!userId) return;
    axios.post("http://localhost:4000/auth/clerk", { userId }).then((res) => {
      if (res.status === 200) {
        localStorage.setItem("Token", JSON.stringify(res.data.token));
        window.location.href = "/home";
      } else {
        alert("Invalid credentials");
      }
    });
  };

  useEffect(() => {
    auth();
  }, [userId]);

  return (
    <div className="flex flex-col items-center justify-center h-screen space-y-6 text-black">
      <div className="">
        <div className="flex space-x-5">
          <h1 className="mb-4 text-7xl">Welcome to </h1>
          <span className="font-bold text-transparent text-7xl bg-gradient-to-r bg-clip-text from-blue-400 to-blue-800">
            MAVEN
          </span>
        </div>
        <p className="mb-8 text-lg">
          Watch thousands of movies, TV shows, and exclusive content. Anytime.
          Anywhere.
        </p>
      </div>
      <div className="flex space-x-4">
        <div>
          <SignedOut>
            <SignInButton className="px-10 py-4 font-bold text-white bg-blue-500 rounded hover:bg-blue-600" />
          </SignedOut>
        </div>
      </div>
    </div>
  );
};
