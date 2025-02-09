"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { Typography } from "./ui/typography";
import Link from "next/link";
import { Button } from "./ui/button";

const PickaDate = () => {
  const [selectedDate, setSelectedDate] = useState<string | null>(null);

  useEffect(() => {
    // Retrieve stored date from cookies on component mount
    const storedDate = Cookies.get("selectedDate");
    if (storedDate) {
      setSelectedDate(storedDate);
    }
  }, []);

  const handleDateSelection = (day: number) => {
    const formattedDate = `${day}th Feb 2025`; // Format date
    setSelectedDate(formattedDate);
    Cookies.set("selectedDate", formattedDate, { expires: 7 }); // Store in cookies (expires in 7 days)
    console.log("Stored in Cookies:", formattedDate); // Log to console
  };

  const daysInFebruary = Array.from({ length: 29 }, (_, i) => i + 1); // Leap year compatible

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 bg-pink-100 rounded-lg shadow-lg">
      <Typography variant="h3" className="text-red-600 font-bold">
        When are you free?
      </Typography>
      <Typography variant="h5" className="text-sm text-gray-600">
        select a date
      </Typography>

      <div className="grid grid-cols-7 gap-2 bg-white p-4 rounded-md shadow-md">
        {/* Days of the week */}
        <div className="col-span-7 grid grid-cols-7 gap-2 text-center font-bold text-gray-700">
          {["S", "M", "T", "W", "T", "F", "S"].map((day, index) => (
            <div key={index} className="text-red-700">
              {day}
            </div>
          ))}
        </div>

        {/* Dates of February */}
        {daysInFebruary.map((day) => (
          <button
            key={day}
            className={`w-10 h-10 flex items-center justify-center text-lg font-medium rounded-md ${
              selectedDate === `${day}th Feb 2025`
                ? "bg-red-600 text-white"
                : "hover:bg-red-200 text-gray-800"
            }`}
            onClick={() => handleDateSelection(day)}
          >
            {day}
          </button>
        ))}
      </div>

      {selectedDate && (
        <Typography variant="h6" className="mt-2 text-gray-700">
          You selected:{" "}
          <span className="text-red-600 font-bold">{selectedDate}</span>
        </Typography>
      )}

      <Link href="/options">
        <Button variant="default">Lets keep it rolling baby</Button>
      </Link>
    </div>
  );
};

export default PickaDate;
