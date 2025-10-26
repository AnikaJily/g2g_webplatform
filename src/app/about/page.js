import Footer from '@/components/Footer/Footer';
import AboutHistory from '@/components/AboutHistory/AboutHistory';
import AboutMission from '@/components/AboutMission/AboutMission';

export default function AboutPage() {
  return (
    <>
      <main className="main-content">
        <div className="container">
          <h1 style={{ 
            fontFamily: 'var(--font-header)', 
            fontStyle: 'italic',
            fontSize: '64px', 
            fontWeight: '400',
            color: 'var(--color-text-dark-and-foreground)',
            margin: '0'
          }}>
            О нас
          </h1>
        </div>
        <AboutHistory />
        <AboutMission />
      </main>
      <Footer />
    </>
  );
}


