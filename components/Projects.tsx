import React from "react";
import { ProjectGrid } from "./card/project-grid";


export function Homepage() {

  return (
    <div>
    <div className="h-[12rem] flex flex-col justify-center items-center px-4">
      {/* Main Heading */}
      <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold text-center text-white leading-tight max-w-5xl">
        Explore how Ive helped <span className="text-[#ff4432]">businesses</span> <br className="hidden md:block" /> like yours grow through a perfect <br className="hidden md:block" />  website.
      </h1>
    </div>
      <ProjectGrid/>
    </div>
  );
}

export default Homepage;