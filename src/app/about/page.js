import Footer from '@/components/Footer/Footer';
import AboutHistory from '@/components/AboutHistory/AboutHistory';
import AboutMission from '@/components/AboutMission/AboutMission';

export default function AboutPage() {
  return (
    <>
      <main className="main-content">
        <AboutHistory />
        <AboutMission />
      </main>
      <Footer />
    </>
  );
}


