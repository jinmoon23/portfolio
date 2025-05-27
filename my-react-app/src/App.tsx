import Fullpage, {
  FullPageSections,
  FullpageSection,
} from '@ap.cx/react-fullpage';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import CarouselSection from './components/CarouselSection/CarouselSection';
import SkillSection from './components/SkillSection/SkillSection';

function App() {
  return (
    <Fullpage>
      <FullPageSections>
        <FullpageSection>
          <Header />
          <MainSection />
        </FullpageSection>
        <FullpageSection>
          <CarouselSection />
        </FullpageSection>
        <FullpageSection>
          <SkillSection />
        </FullpageSection>
      </FullPageSections>
    </Fullpage>
  );
}

export default App;
