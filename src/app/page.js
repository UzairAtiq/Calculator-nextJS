'use client'
import React from "react";
import ButtonWel from "./components/buttonWelcome";
const WelcomePage = () => {
  //Handle routing to Calculator 
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
