import Header from "./components/Header/Header";
import About from "./components/ui/sections/About";
import Classes from "./components/ui/sections/Classes";
import Hero from "./components/ui/sections/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Classes />
      <About />
    </>
  );
}
