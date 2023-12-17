'use client'
import Header from "./header/page";
import About from "./about/page";
import Contact from "./contact/page";
import Hero from "./hero/page";
import Projects from "./projects/page";
import TechStack from "./techstack/page";
export default function Home() {

  return (
    <div>
      <Header />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Contact />
    </div>
  );
}
