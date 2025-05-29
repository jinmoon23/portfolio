import ReactFullpage from "@fullpage/react-fullpage";
import Header from "./components/Header/Header";
import MainSection from "./components/MainSection/MainSection";
import CarouselSection from "./components/CarouselSection/CarouselSection";
import SkillSection from "./components/SkillSection/SkillSection";
import ContactSection from "./components/ContactSection/ContactSection";
import { ThemeProvider } from "./context/ThemeContext";
import ThemeToggle from "./components/ThemeToggle";

function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
      <ReactFullpage
        scrollingSpeed={1000}
        credits={{ enabled: false }}
        scrollOverflow={true}
        normalScrollElements=".fp-scrollable"
        render={() => {
          return (
            <div id="fullpage" style={{ zIndex: 1 }}>
              <div className="section">
                <Header />
                <MainSection />
              </div>
              <div className="section h-screen">
                <CarouselSection />
              </div>
              <div className="section">
                <SkillSection />
              </div>
              <div className="section">
                <ContactSection />
              </div>
            </div>
          );
        }}
      />
    </ThemeProvider>
  );
}

export default App;
