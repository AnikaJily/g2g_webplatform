import Footer from '@/components/Footer/Footer';
import MerchSlider from '@/components/MerchSlider/MerchSlider';
import MerchMarquee from '@/components/MerchMarquee/MerchMarquee';
import MerchProducts from '@/components/MerchProducts/MerchProducts';

export default function MerchPage() {
  return (
    <>
      <main className="main-content">
        <MerchSlider />
        <MerchMarquee />
        <MerchProducts />
      </main>
      <Footer />
    </>
  );
}

