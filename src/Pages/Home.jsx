import React, { Suspense, useMemo } from "react";
import TypingHeading from "../Components/TypingHeading";
import StarsBackground from "../Components/StarsBackground";
import { Link } from "react-scroll";
import { FaChevronDown } from "react-icons/fa";

const headings = [
  "Hi, I'm Vishw Prajapati!",
  "I'm a Mern Stack Developer!",
  "I'm a Stand-Up Comedian",
  "I'm a Problem Solver!",
];

export default function Home() {
  return (
    <div
      id="home"
      className=" h-screen w-screen flex justify-center items-center fixed top-0 overflow-hidden bg-[rgb(6,4,12)] text-white"
    >
      <StarsBackground />
      <TypingHeading headings={headings} className="font-semibold " />
      <Link
        to={"about"}
        smooth={true}
        duration={1000}
        offset={-100}
        className="fixed bottom-6"
      >
        <FaChevronDown className="text-3xl animate-bounce" />
      </Link>
    </div>
  );
}
