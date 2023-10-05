import Navbar from "./components/Navbar";
import LoadingPreloader from "./components/LoadingPreloader";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import SliderComponent from "./components/Slider";

function App() {
  return (
    <div className="bg-slate-800 text-white font-sans">
      <div className="hero">
        <Navbar />
      </div>
      <div className="container mt-10">
        <Main />
      </div>
      <div className="container mt-5 px-10">
        <Portfolio />
        <SliderComponent />
      </div>
      <LoadingPreloader />
    </div>
  );
}

export default App;
