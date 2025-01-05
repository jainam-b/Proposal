
import FAQSection from "@/components/FAQSection";
import Header from "@/components/Header";
import { Homepage } from "@/components/Homepage";
import PricingSection from "@/components/Pricing";
import { Process } from "@/components/Process";
// import { NavbarDemo } from "@/components/Navbar";
import Projects from "@/components/Projects";
import { AnimatedTestimonialsDemo } from "@/components/Testimonials";
import { WhyMeSection } from "@/components/WhyMe";


export default function Home() {
  return (
    <div className="">
      <Header/>
        <Homepage />
        <Projects />
       <Process/>
       <AnimatedTestimonialsDemo/>
       <WhyMeSection/>
       <PricingSection/>
       <FAQSection />
    </div>
  );
}

// todo