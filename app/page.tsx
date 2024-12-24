import { ProjectGrid } from "@/components/card/project-grid";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import { Process } from "@/components/Process";
// import { NavbarDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";


export default function Home() {
  return (
    <div className="">
      <Header/>
        <Homepage />
        <Projects />
       <Process/>
    </div>
  );
}
