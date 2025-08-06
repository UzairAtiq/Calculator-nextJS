"use client";
import React from "react";
import Calculator from "../components/calculator";
import { Button } from "react-bootstrap";
import { useRouter } from "next/navigation";
const CalculatorPage = () => {
  const router = useRouter();
  //Naviagte to Home page
  const clickHandler = () => {
    router.push("/");
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div>
        <Calculator />
      </div>
      <div>
        <Button variant="dark" onClick={clickHandler}>Go to Home</Button>
      </div>
    </div>
  );
};

export default CalculatorPage;
