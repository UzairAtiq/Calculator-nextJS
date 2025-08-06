"use client";
import React, { useState } from "react";
const Calculator = () => {
  const [number, setNumber] = useState("");
  const [operation, setOperation] = useState("");
  const [numOne, setNumOne] = useState("");
  const [numTwo, setNumTwo] = useState("");
  const [result, setResult] = useState("");
  //Function to update the number
  const updateNumber = (e) => {
    if(result){
      clearAll();
    }
    let value = parseInt(e.target.textContent);
    const updatedValue = number + value;
    setNumber(updatedValue);
    if (operation === "") {
      setNumOne(updatedValue);
    } else if (operation) {
      setNumTwo(updatedValue);
    }
  };
  //Function to perform operation
  const performOperation = (e) => {
    setOperation(e.target.textContent);
    //Setting value in numOne
    if (number) {
      setNumOne(number);
    }
    setNumber("");
  };
  //Function to get the result and add the second number
  const getResult = () => {
    const onumOne = parseInt(numOne);
    const onumTwo = parseInt(numTwo);
    if (operation === "+") {
      setResult(onumOne + onumTwo);
    } else if (operation === "-") {
      setResult(onumOne - onumTwo);
    } else if (operation === "x") {
      setResult(onumOne * onumTwo);
    } else if (operation === "/") {
      setResult(onumOne / onumTwo);
    }
    setNumOne("");
    setNumTwo("");
    setOperation("");
    setNumber("");
  };
  //Function to clear all
  const clearAll = () => {
    setNumber("");
    setNumOne("");
    setNumTwo("");
    setOperation("");
    setResult("");
  };

  return (
    <div className="container flex items-center justify-center m-10 text-6xl">
      <div className="calculator-container flex flex-col h-[80%]">
        <div className="top text-center rounded-2xl border-1 border-amber-400 h-30 flex justify-center items-center" >
          {numOne}
          {operation}
          {numTwo}
          {result}
        </div>
       
        <div className="buttons grid grid-rows-4 grid-cols-4 gap-x-12 gap-y-15 border-amber-600 border-1 rounded-2xl  *:p-6 *:bg-[var(--coolers)] *:rounded-3xl *:hover:bg-blue-700" style={{backgroundColor : `#${'000814'}`}}>
      
       
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            9
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            8
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            7
          </div>
          <div
          className="button m-4 text-center hover:text-amber-300"
          onClick={clearAll}
        >
          AC
        </div>

          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            6
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            5
          </div>
         
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            4
          </div>
            <div
            className="button m-4 text-center hover:text-amber-300 "
            onClick={performOperation}
          >
            x
          </div>
         
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            3
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            2
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            1
          </div>
           <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={performOperation}
          >
            +
          </div>

          <div
            className="button m-4 text-center hover:text-amber-300 "
            onClick={performOperation}
          >
            -
          </div>
          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={updateNumber}
          >
            0
          </div>

          <div
            className="button m-4 text-center hover:text-amber-300 "
            onClick={performOperation}
          >
            /
          </div>

          <div
            className="button m-4 text-center hover:text-amber-300"
            onClick={getResult}
          >
            =
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Calculator;
