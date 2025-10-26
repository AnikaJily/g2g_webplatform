'use client';

import { useState } from 'react';
import Footer from '@/components/Footer/Footer';
import MerchSlider from '@/components/MerchSlider/MerchSlider';
import MerchMarquee from '@/components/MerchMarquee/MerchMarquee';
import MerchProducts from '@/components/MerchProducts/MerchProducts';
import CartIcon from '@/components/CartIcon/CartIcon';
import Cart from '@/components/Cart/Cart';

export default function MerchPage() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartIcon onOpenCart={() => setCartOpen(true)} />
      <Cart 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
      />
      
      <main className="main-content">
        <MerchSlider />
        <MerchMarquee />
        <MerchProducts />
      </main>
      <Footer />
    </>
  );
}

