import Footer from '@/components/Footer/Footer';

export default function VolunteerPage() {
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
            margin: '80px 0'
          }}>
            Волонтерство
          </h1>
        </div>
      </main>
      <Footer />
    </>
  );
}


