"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const gifts = [
  { id: 1, name: "Bunny", image: "/images/gift1.jpg" },
  { id: 3, name: "Shoes & Bag", image: "/images/gift3.jpg" },
  { id: 2, name: "Jewelries", image: "/images/gift2.jpg" },

  { id: 4, name: "Wigs", image: "/images/gift4.png" },
];

const Gift = () => {
  const [selectedGifts, setSelectedGifts] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve selected gifts from cookies on mount
    const storedGifts = Cookies.get("selectedGifts");
    if (storedGifts) {
      setSelectedGifts(JSON.parse(storedGifts));
    }
  }, []);

  const handleGiftSelection = (giftName: string) => {
    let updatedGifts;
    if (selectedGifts.includes(giftName)) {
      // Remove if already selected
      updatedGifts = selectedGifts.filter((gift) => gift !== giftName);
    } else {
      // Add to selection
      updatedGifts = [...selectedGifts, giftName];
    }

    setSelectedGifts(updatedGifts);
    Cookies.set("selectedGifts", JSON.stringify(updatedGifts), { expires: 7 });
    console.log("Stored in Cookies:", updatedGifts);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4">
      <Typography variant="h6" className="text-red-700 font-bold">
        What gift would you love?
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {gifts.map((gift) => (
          <button
            key={gift.id}
            onClick={() => handleGiftSelection(gift.name)}
            className={`flex flex-col items-center height-[300px] gap-2 p-2 rounded-lg shadow-md transition-all ${
              selectedGifts.includes(gift.name)
                ? "bg-red-600 text-white"
                : "bg-white hover:bg-red-200"
            }`}
          >
            <Image
              src={gift.image}
              alt={gift.name}
              height={300}
              width={200}
              className="rounded-md border-[1px] border-white shadow-lg object-cover max-w-[300px] max-h-[300px] w-full h-full"
            />
            <Typography variant="smallText">{gift.name}</Typography>
          </button>
        ))}
      </div>

      {selectedGifts.length > 0 && (
        <Typography variant="h6" className="mt-4 text-gray-700">
          You selected:{" "}
          <span className="text-red-600 font-bold">
            {selectedGifts.join(", ")}
          </span>
        </Typography>
      )}

      <Link href="/Submit">
        <Button variant="default">I hope you love it! 🎁</Button>
      </Link>
    </div>
  );
};

export default Gift;
