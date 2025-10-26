import Footer from '@/components/Footer/Footer';
import VolunteerHero from '@/components/VolunteerHero/VolunteerHero';
import VolunteerSpecialties from '@/components/VolunteerSpecialties/VolunteerSpecialties';
import VolunteerBenefits from '@/components/VolunteerBenefits/VolunteerBenefits';

export default function VolunteerPage() {
  return (
    <>
      <main className="main-content">
        <div className="container">
          <VolunteerHero />
          <VolunteerSpecialties />
          <VolunteerBenefits />
        </div>
      </main>
      <Footer />
    </>
  );
}


