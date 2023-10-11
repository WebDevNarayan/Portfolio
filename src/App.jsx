import Navbar from "./components/Navbar";
import LoadingPreloader from "./components/LoadingPreloader";
import AboutMe from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Work from "./components/Work.jsx";
import Footer from "./components/Footer";
import MainSection from "./components/Main";

function App() {
  return (
    <div className="bg-slate-800 text-white font-sans overflow-hidden">
      <div className="hero">
        <Navbar />
      </div>
      <div className="sm:mt-4 md:mt-5 lg:mt-[100px] lg:px-20 px-10">
        <MainSection />
      </div>
      <div className="lg:px-20 px-10 h-[100dvh]">
        <AboutMe />
      </div>
      <div className="lg:px-20 px-10 h-[100dvh]">
        <Experience />
      </div>
      <div className="lg:px-20 px-10 h-[100%]">
        <Work />
      </div>
      <div className="lg:px-20 px-10 lg:h-[80dvh] h-[40dvh]">
        <Contact />
      </div>
      <Footer />
      <LoadingPreloader />
    </div>
  );
}

export default App;
