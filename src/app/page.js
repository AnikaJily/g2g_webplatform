import HeroSection from '../components/HeroSection/HeroSection';
import DomesticViolenceSection from '../components/DomesticViolenceSection/DomesticViolenceSection';
import RulesSection from '../components/RulesSection/RulesSection';
import Join_us from '../components/Join_us/Join_us';
import Urgent_help from '../components/Urgent_help/Urgent_help';
import Feedback from '../components/Feedback/Feedback';
import Footer from '../components/Footer/Footer';
import LeftDecor from '../components/LeftDecor/LeftDecor';
import MainWomanDecor from '@/components/MainWomanDecor/MainWomanDecor';
import JoinKnotDecor from '@/components/JoinKnotDecor/JoinKnotDecor';

export default function Home() {
  return (
    <>
      <main className="main-content">
        <LeftDecor />
        <div className="hero-wrapper">
          <MainWomanDecor />
          <div className="container">
            <HeroSection />
          </div>
        </div>
        <RulesSection />
        <DomesticViolenceSection />
        <Join_us />
        <Urgent_help />
        <Feedback />
        {/* <JoinKnotDecor /> */}
      </main>
      <Footer />
    </>
  );
}
