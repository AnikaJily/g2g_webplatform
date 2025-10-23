import HeroSection from '../components/HeroSection/HeroSection';
import DomesticViolenceSection from '../components/DomesticViolenceSection/DomesticViolenceSection';
import RulesSection from '../components/RulesSection/RulesSection';
import Join_us from '../components/Join_us/Join_us';
import LeftDecor from '../components/LeftDecor/LeftDecor';
import MainWomanDecor from '@/components/MainWomanDecor/MainWomanDecor';
import JoinKnotDecor from '@/components/JoinKnotDecor/JoinKnotDecor';

export default function Home() {
  return (
    <>
      <main className="main-content">
        <LeftDecor />
        <MainWomanDecor />
        <div className="container">
          <HeroSection />
        </div>
        <RulesSection />
        <div className="container">
          <DomesticViolenceSection />
          <Join_us />
        </div>
        <JoinKnotDecor />
      </main>
    </>
  );
}
