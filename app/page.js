'use client'
import Header from "./header/page";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Projects from "./projects/page";
import TechStack from "./techstack/page";
import Loader from "./loader/page";
import { useState,useEffect} from "react";
export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);
  return (
    <div>
      {loading ? (<Loader />) : (
        <div>
          <Header />
          <Hero />
          <About />
          <TechStack />
          <Projects />
          <Contact />
        </div>)}
    </div>
  );
}
