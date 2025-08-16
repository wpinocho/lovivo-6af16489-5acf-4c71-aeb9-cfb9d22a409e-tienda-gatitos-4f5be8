import React, { useState } from 'react';
import { kittens } from '@/data/kittens';
import KittenCard from './KittenCard';
import Header from './Header';
import Cart from './Cart';
import { CartProvider } from '@/contexts/CartContext';

const KittenStore: React.FC = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  console.log('KittenStore rendered with', kittens.length, 'kittens');

  return (
    <CartProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Nuestros Adorables Gatitos
            </h2>
            <p className="text-gray-600">
              Encuentra tu compañero felino perfecto. Todos nuestros gatitos están vacunados y listos para un hogar amoroso.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {kittens.map((kitten) => (
              <KittenCard key={kitten.id} kitten={kitten} />
            ))}
          </div>
        </main>

        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
      </div>
    </CartProvider>
  );
};

export default KittenStore;