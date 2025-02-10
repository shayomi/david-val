"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const deserts = [
  { id: 1, name: "Cookies", image: "/images/des1.webp" },
  { id: 2, name: "Pancakes", image: "/images/des2.webp" },
  { id: 3, name: "Fruits and yoghurt", image: "/images/des3.jpg" },
  { id: 4, name: "Strawberry Pie", image: "/images/des4.jpg" },
  { id: 5, name: "Chocolates", image: "/images/des5.jpg" },
  { id: 6, name: "Butter Cakes", image: "/images/des6.jpg" },
];

const Deserts = () => {
  const [selectedDeserts, setSelectedDeserts] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve selected meals from cookies on mount
    const storedDeserts = Cookies.get("selectedDeserts");
    if (storedDeserts) {
      setSelectedDeserts(JSON.parse(storedDeserts));
    }
  }, []);

  const handleDesertSelection = (desertName: string) => {
    let updatedDeserts;
    if (selectedDeserts.includes(desertName)) {
      // Remove if already selected
      updatedDeserts = selectedDeserts.filter(
        (desert) => desert !== desertName
      );
    } else {
      // Add to selection
      updatedDeserts = [...selectedDeserts, desertName];
    }

    setSelectedDeserts(updatedDeserts);
    Cookies.set("selectedDeserts", JSON.stringify(updatedDeserts), {
      expires: 7,
    });
    console.log("Stored in Cookies:", updatedDeserts);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <Typography variant="h6" className="text-red-700 font-bold">
        What&apos;s for desert baby?
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {deserts.map((desert) => (
          <button
            key={desert.id}
            onClick={() => handleDesertSelection(desert.name)}
            className={`flex flex-col items-center height-[300px] gap-2 p-2 rounded-lg shadow-md transition-all ${
              selectedDeserts.includes(desert.name)
                ? "bg-red-600 text-white"
                : "bg-white hover:bg-red-200"
            }`}
          >
            <Image
              src={desert.image}
              alt={desert.name}
              height={300}
              width={200}
              className="rounded-md border-[1px] border-white shadow-lg object-cover max-w-[300px] max-h-[300px] w-full h-full"
            />
            <Typography variant="smallText">{desert.name}</Typography>
          </button>
        ))}
      </div>

      {selectedDeserts.length > 0 && (
        <Typography variant="h6" className="mt-4 text-gray-700">
          You selected:{" "}
          <span className="text-red-600 font-bold">
            {selectedDeserts.join(", ")}
          </span>
        </Typography>
      )}

      <Link href="/activities">
        <Button variant="default">Sure? keep going</Button>
      </Link>
    </div>
  );
};

export default Deserts;
