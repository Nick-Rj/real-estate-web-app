import { DarkModeProvider } from "./components/common/DarkModeContext";
import Header from "./components/common/Header";
import Hero from "./pageSections/Hero";
import About from "./pageSections/About";
import PopularAreas from "./pageSections/PopularAreas";
import Properties from "./pageSections/Properties";
import Services from "./pageSections/Services";
import Clients from "./pageSections/Clients";
import Contact from "./pageSections/Contact";
import Footer from "./components/common/Footer";

export default function App() {
  return (
    <>
      <DarkModeProvider>
        <Header />
        <Hero />
        <About />
        <PopularAreas />
        <Properties />
        <Services />
        <Clients />
        <Contact />
        <Footer />
      </DarkModeProvider>
    </>
  );
}
