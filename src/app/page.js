'use client'
import React from "react";
import { useRouter } from "next/navigation";
import ButtonWel from "./components/buttonWelcome";
const WelcomePage = () => {
  //Intializing the router
  const router = useRouter();
  //Handle routing to Calculator 

  const handleClick = () => {
    router.push('/calculator')
  }

  return (
    <div className="flex justify-center items-center h-screen w-screen flex-col">
      <div className="welcome-message w-1/2 m-9 text-center text-5xl">
        Welcome to Uzair's Calculator
      </div>
      <div className="">
        <ButtonWel/>
      </div>
    </div>
  );
};

export default WelcomePage;
