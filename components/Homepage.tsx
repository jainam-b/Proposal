import React from "react";
import { FlipWords } from "./ui/flip-words";
import { Tooltip } from "./Tooltip";
import { Button } from "./ui/button";

export function Homepage() {
  const words = ["functional", "aesthetic", "sales-boosting", "high-converting"];

  return (
    <div className="h-[40rem] flex flex-col justify-center items-center px-4">
      {/* Header Section */}
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex flex-row justify-center items-center space-x-5">
          <Tooltip />
        </div>
      </div>

      {/* Main Heading */}
      <div className="text-7xl mx-auto font-normal text-white text-center">
        I develop <FlipWords words={words} /> <br /> websites for businesses
      </div>

      {/* Description Section */}
      <div className="flex flex-col justify-center text-xl items-center w-full text-white mt-6">
        <p
          className="text-[#c2c2c2] mb-8 md:max-w-lg max-w-xs mx-auto md:text-lg text-sm font-light text-center"
          style={{ opacity: 1, filter: "blur(0px)", willChange: "auto", transform: "none" }}
        >
          I create websites that bring in visitors, turn them into customers, and help your business grow.
        </p>
      </div>

      {/* Call-to-Action Button */}
      <Button className="bg-[#ff4432] hover:shadow-[0_0_30px_#f64231] font-medium flex items-center space-x-2 px- py-5 rounded-xl text-white transition-all duration-300">
        <img
          src="https://jainambagrecha.vercel.app/_next/image?url=%2Fjainam.jpeg&w=128&q=75"
          alt="Logo"
          className="rounded-[45%] w-6 h-7 object-cover"
        />
        <span>Book a Call With Jainam</span>
      </Button>

    </div>
  );
}

export default Homepage;
