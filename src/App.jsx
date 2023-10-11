import Navbar from "./components/Navbar";
import LoadingPreloader from "./components/LoadingPreloader";
import Main from "./components/Main";
import AboutMe from "./components/About.jsx";
import Experience from "./components/Experience.jsx";
import Contact from "./components/Contact.jsx";
import Work from "./components/Work.jsx";

function App() {
  return (
    <div className="bg-slate-800 text-white font-sans overflow-hidden">
      <div className="hero">
        <Navbar />
      </div>
      <div className="sm:mt-4 md:mt-5 lg:mt-[100px] lg:px-20 px-10">
        <Main />
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
      <div className="lg:px-20 px-10 h-[100dvh]">
        <Contact />
      </div>
      <LoadingPreloader />
    </div>
  );
}

export default App;
