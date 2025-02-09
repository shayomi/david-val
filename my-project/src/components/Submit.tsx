"use client";

import React from "react";
import Cookies from "js-cookie";
import emailjs from "emailjs-com";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { LaughIcon } from "lucide-react";

const Submit = () => {
  const sendEmail = () => {
    // Retrieve stored data from cookies
    const selectedDate = Cookies.get("selectedDate") || "Not selected";
    const selectedMeals = JSON.parse(Cookies.get("selectedMeals") || "[]");
    const selectedDesserts = JSON.parse(Cookies.get("selectedDeserts") || "[]");
    const selectedActivities = JSON.parse(
      Cookies.get("selectedActivities") || "[]"
    );
    const selectedGifts = JSON.parse(Cookies.get("selectedGifts") || "[]");

    // Format the data
    const emailData = {
      date: selectedDate,
      meals: selectedMeals.join(", "),
      desserts: selectedDesserts.join(", "),
      activities: selectedActivities.join(", "),
      gifts: selectedGifts.join(", "),
    };

    // Send email using EmailJS
    emailjs
      .send(
        "service_jppswdc",
        "template_aftcned",
        emailData,
        "0VTMw5SoJkebz5v3g"
      )
      .then(() => {
        alert("Email sent successfully!");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        alert("Failed to send email. Try again!");
      });
  };

  return (
    <div className="flex flex-col gap-4 justify-center  items-center">
      <Typography
        variant="h3"
        className="flex flex-row items-center text-black gap-2"
      >
        You&apos;ve done well my love <LaughIcon />
      </Typography>
      <Image
        src="/images/cheering.gif"
        alt="image here"
        height={400}
        width={300}
        className="mt-2 rounded-md border-[1px] border-white shadow-2xl"
      />
      <div className="flex flex-row justify-center">
        <Button variant="default" onClick={sendEmail}>
          Send Confirmation Email
        </Button>
      </div>
    </div>
  );
};

export default Submit;
