"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const activities = [
  { id: 1, name: "Taking a walk", image: "/images/act1.jpg" },
  { id: 2, name: "Sightseeing", image: "/images/act2.jpg" },
  { id: 3, name: "Movies", image: "/images/act3.webp" },
  { id: 4, name: "The things adults do", image: "/images/act4.jpg" },
];

const WhatToDo = () => {
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve selected activities from cookies on mount
    const storedActivities = Cookies.get("selectedActivities");
    if (storedActivities) {
      setSelectedActivities(JSON.parse(storedActivities));
    }
  }, []);

  const handleActivitySelection = (activityName: string) => {
    let updatedActivities;
    if (selectedActivities.includes(activityName)) {
      // Remove if already selected
      updatedActivities = selectedActivities.filter(
        (activity) => activity !== activityName
      );
    } else {
      // Add to selection
      updatedActivities = [...selectedActivities, activityName];
    }

    setSelectedActivities(updatedActivities);
    Cookies.set("selectedActivities", JSON.stringify(updatedActivities), {
      expires: 7,
    });
    console.log("Stored in Cookies:", updatedActivities);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 mt-12">
      <Typography variant="h6" className="text-red-700 font-bold">
        What should we do next, love?
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        {activities.map((activity) => (
          <button
            key={activity.id}
            onClick={() => handleActivitySelection(activity.name)}
            className={`flex flex-col items-center  gap-2 p-2 rounded-lg shadow-md transition-all ${
              selectedActivities.includes(activity.name)
                ? "bg-red-600 text-white"
                : "bg-white hover:bg-red-200"
            }`}
          >
            <Image
              src={activity.image}
              alt={activity.name}
              height={300}
              width={200}
              className="rounded-md border-[1px] border-white shadow-lg object-cover max-w-[300px] max-h-[300px] w-full h-full"
            />
            <Typography variant="smallText">{activity.name}</Typography>
          </button>
        ))}
      </div>

      {selectedActivities.length > 0 && (
        <Typography variant="h6" className="mt-4 text-gray-700">
          You selected:{" "}
          <span className="text-red-600 font-bold">
            {selectedActivities.join(", ")}
          </span>
        </Typography>
      )}

      <Link href="/gifts">
        <Button variant="default">Ready to buy you the world</Button>
      </Link>
    </div>
  );
};

export default WhatToDo;
