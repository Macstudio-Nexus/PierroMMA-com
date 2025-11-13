import Header from "./components/Header/Header";
import About from "./components/ui/sections/About";
import Classes from "./components/ui/sections/Classes";
import Contact from "./components/ui/sections/contact/Contact";
import Hero from "./components/ui/sections/Hero";
import Schedule from "./components/ui/sections/schedule/Schedule";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <Schedule />
      <About />
      <Contact />
    </>
  );
}
