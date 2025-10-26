'use client';

import { useState } from 'react';
import CartIcon from '../CartIcon/CartIcon';
import Cart from '../Cart/Cart';

export default function CartIconWrapper() {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <>
      <CartIcon onOpenCart={() => setCartOpen(true)} />
      <Cart 
        isOpen={cartOpen} 
        onClose={() => setCartOpen(false)} 
      />
    </>
  );
}

