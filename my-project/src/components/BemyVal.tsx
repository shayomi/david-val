"use client";
import React, { useState } from "react";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { Button } from "./ui/button";
import Accepted from "./Accepted"; // Import the Accepted component

const BemyVal = () => {
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="flex flex-col gap-4 mt-6 justify-center items-center">
      {accepted ? (
        <Accepted />
      ) : (
        <>
          <Typography
            variant="h3"
            className="flex flex-row items-center text-black gap-2"
          >
            Hi Baby, Will you be my{" "}
            <span className="text-red-700 font-bold">Val ?</span>
          </Typography>
          <Image
            src="/images/f1.png"
            alt="image here"
            height={400}
            width={700}
            className="mt-2 rounded-md border-[1px] border-white shadow-2xl"
          />
          <div className="flex flex-row justify-between max-w-[600px] w-full">
            <Button variant="default" onClick={() => setAccepted(true)}>
              Yes, I will be honoured
            </Button>
            <Button variant="outline">No, I will pass</Button>
          </div>
          <Typography variant="smallText">
            please accept only if you really love me
          </Typography>
        </>
      )}
    </div>
  );
};

export default BemyVal;
