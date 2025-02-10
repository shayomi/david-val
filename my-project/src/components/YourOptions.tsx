"use client";

import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

const meals = [
  { id: 1, name: "Steak and mash", image: "/images/steak.jpg" },
  { id: 2, name: "Vietnamese Food", image: "/images/viet.jpg" },
  { id: 3, name: "Sea Food", image: "/images/seafood.jpg" },
  { id: 4, name: "Burger King", image: "/images/burger.jpeg" },
  { id: 5, name: "McDonalds", image: "/images/mcdonald.jpg" },
  { id: 6, name: "African Meal", image: "/images/jollof.webp" },
];

const YourOptions = () => {
  const [selectedMeals, setSelectedMeals] = useState<string[]>([]);

  useEffect(() => {
    // Retrieve selected meals from cookies on mount
    const storedMeals = Cookies.get("selectedMeals");
    if (storedMeals) {
      setSelectedMeals(JSON.parse(storedMeals));
    }
  }, []);

  const handleMealSelection = (mealName: string) => {
    let updatedMeals;
    if (selectedMeals.includes(mealName)) {
      // Remove if already selected
      updatedMeals = selectedMeals.filter((meal) => meal !== mealName);
    } else {
      // Add to selection
      updatedMeals = [...selectedMeals, mealName];
    }

    setSelectedMeals(updatedMeals);
    Cookies.set("selectedMeals", JSON.stringify(updatedMeals), { expires: 7 });
    console.log("Stored in Cookies:", updatedMeals);
  };

  return (
    <div className="flex flex-col gap-4 justify-center items-center p-4 ">
      <Typography variant="h6" className="text-red-700 font-bold">
        What would you like to eat, pumpkin?
      </Typography>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {meals.map((meal) => (
          <button
            key={meal.id}
            onClick={() => handleMealSelection(meal.name)}
            className={`flex flex-col items-center height-[300px] gap-2 p-2 rounded-lg shadow-md transition-all ${
              selectedMeals.includes(meal.name)
                ? "bg-red-600 text-white"
                : "bg-white hover:bg-red-200"
            }`}
          >
            <Image
              src={meal.image}
              alt={meal.name}
              height={300}
              width={200}
              className="rounded-md border-[1px] border-white shadow-lg object-cover max-w-[300px] max-h-[300px] w-full h-full"
            />
            <Typography variant="smallText">{meal.name}</Typography>
          </button>
        ))}
      </div>

      {selectedMeals.length > 0 && (
        <Typography variant="h6" className="mt-4 text-gray-700">
          You selected:{" "}
          <span className="text-red-600 font-bold">
            {selectedMeals.join(", ")}
          </span>
        </Typography>
      )}
      <Link href="/deserts">
        <Button variant="default">Foodie , keep it rolling</Button>
      </Link>
    </div>
  );
};

export default YourOptions;
