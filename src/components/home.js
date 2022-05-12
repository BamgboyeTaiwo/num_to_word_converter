import React, { useState } from "react";
import styles from "./home.module.css";

export default function Home() {
  const [Value, setValue] = useState("");
  const [Output, setOutput] = useState("");
  const [error, seterror] = useState("")

  const convert = (alue) => {
    console.log(isNaN(Value));
    console.log(Value);
    const value = parseInt(Value);
    setValue(value);
    console.log(isNaN(Value));
    const converter = require("number-to-words");

    var data = converter.toWords(Value);
    setOutput(data);
  };
  return (
    <div className=" container  mx-auto lg:p-5 sm:pt-5">
      <div
        className={` md:w-[70%] mb-5 sm:w-[90%] mx-auto mt-5  flex ${styles.input_div}`}
      >
        <input
          placeholder="Enter Number here..."
          type="text"
          className={` w-80 mr-3  py-4 px-3 rounded-lg ${styles.input}`}
          onChange={(e) => {
            if (isNaN(e.target.value)) {
              seterror('Value entered is not a number!')
            }
            else{
              seterror('')
            }
            setValue(e.target.value);
          }}
        />

        <button
          onClick={convert}
          className="py-4 px-3 sm:px-2 w-[20%] sm:w-[30%] rounded bg-[#00A85A] font-bold text-white"
        >
          Convert
        </button>
      </div>

      <div className="container mx-auto w-[fit-content] pt-1 text-red-600">
        { error}

      </div>

      <div className=" container p-4">

        
        <h1 className="font-bold text-[#163828] text-[30px]">
        {Output}

        </h1>

      </div>
    </div>
  );
}
