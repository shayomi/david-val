import React from "react";
import { Button } from "./ui/button";
import { Typography } from "./ui/typography";
import Image from "next/image";
import { LaughIcon } from "lucide-react";
import Link from "next/link";

const Accepted = () => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <Typography
        variant="h3"
        className="flex flex-row items-center text-black gap-2"
      >
        You got me scared for a min <LaughIcon />
      </Typography>
      <Image
        src="/images/kiss.gif"
        alt="image here"
        height={400}
        width={900}
        className="mt-2 rounded-md border-[1px] border-white shadow-2xl"
      />
      <div className="flex flex-row justify-center">
        <Link href="/pickadate">
          <Button variant="default">Click here cutie to get started </Button>
        </Link>
      </div>
    </div>
  );
};

export default Accepted;
