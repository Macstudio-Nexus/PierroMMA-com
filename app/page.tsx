import TopOfPage from "./components/buttons/TopOfPage";
import Header from "./components/Header/Header";
import About from "./components/ui/sections/About";
import Classes from "./components/ui/sections/Classes";
import Contact from "./components/ui/sections/contact/Contact";
import Hero from "./components/ui/sections/Hero";
import Schedule from "./components/ui/sections/schedule/Schedule";

export default function Home() {
  return (
    <>
      <div className="">
        <Header />
        <Hero />
        <Classes />
        <Schedule />
        <About />
        <Contact />
      </div>
      <div className="fixed bottom-3 right-2">
        <TopOfPage />
      </div>
    </>
  );
}
