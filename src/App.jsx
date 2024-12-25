import Header from './components/Header';
import AboutSection from './components/AboutSection';
import HeroBlock from './components/heroSection/HeroBlock';
import TeamSection from './components/teamSection/TeamSection';
import GallerySection from './components/GallerySection';
import SupportSection from './components/SupportSection';
import PublicationsSection from './components/publicationsSections/PublicationsSection';
import FaqSection from './components/FaqSection';
function App() {
  return (
    <div className='w-full flex items-center flex-col'>
      <Header />
      <HeroBlock />
      <AboutSection />
      <div className='w-full flex items-center flex-col bg-light-gray'>
        <TeamSection />
        <GallerySection />
      </div>
      <SupportSection />
      <PublicationsSection />
      <FaqSection />
    </div>
  );
}

export default App;
