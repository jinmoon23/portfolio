import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import SkillSection from "./components/SkillSection/SkillSection";

function App() {
  return (
    <ReactFullpage
      scrollingSpeed={1000}
      credits={{ enabled: false }}
      render={() => {
        return (
          <div id="fullpage" style={{ zIndex: 1 }}>
            <div className="section">
              <Header />
              <MainSection />
            </div>
            <div className="section flex justify-center items-center h-screen">
              <CarouselSection />
            </div>
            <div className="section">
              <SkillSection />
            </div>
          </div>
        );
      }}
    />
  );
}

export default App;
