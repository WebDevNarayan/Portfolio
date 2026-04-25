import Navbar from "./components/Navbar";
import LoadingPreloader from "./components/LoadingPreloader";
import AboutMe from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <div className="page-bg bg-[#080808] text-white font-sans overflow-x-hidden cursor-none">
      <CustomCursor />
      <Navbar />
      <HeroSection />
      <AboutMe />
      <Experience />
      <Work />
      <Contact />
      <Footer />
      <LoadingPreloader />
    </div>
  );
}

export default App;
