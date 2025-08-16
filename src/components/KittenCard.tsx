import React from 'react';
import { Heart, ShoppingCart } from 'lucide-react';
import { Kitten } from '@/types/kitten';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface KittenCardProps {
  kitten: Kitten;
}

const KittenCard: React.FC<KittenCardProps> = ({ kitten }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    console.log('Adding kitten to cart:', kitten.name);
    addToCart(kitten);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={kitten.image}
          alt={kitten.name}
          className="w-full h-48 object-cover"
        />
        <div className="absolute top-2 right-2">
          <Button variant="ghost" size="sm" className="bg-white/80 hover:bg-white">
            <Heart className="h-4 w-4" />
          </Button>
        </div>
        {kitten.vaccinated && (
          <Badge className="absolute top-2 left-2 bg-green-500">
            Vacunado
          </Badge>
        )}
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{kitten.name}</h3>
          <span className="text-xl font-bold text-blue-600">${kitten.price}</span>
        </div>
        
        <p className="text-sm text-gray-600 mb-2">{kitten.breed}</p>
        <p className="text-sm text-gray-500 mb-3 line-clamp-2">{kitten.description}</p>
        
        <div className="flex justify-between items-center text-xs text-gray-500 mb-3">
          <span>Edad: {kitten.age} meses</span>
          <span>Color: {kitten.color}</span>
          <span>{kitten.gender === 'male' ? '♂' : '♀'}</span>
        </div>
        
        <Button 
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700"
        >
          <ShoppingCart className="h-4 w-4 mr-2" />
          Agregar al carrito
        </Button>
      </div>
    </div>
  );
};

export default KittenCard;