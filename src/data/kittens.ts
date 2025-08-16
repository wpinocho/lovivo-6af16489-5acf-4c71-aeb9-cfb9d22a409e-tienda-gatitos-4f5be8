import { Kitten } from '@/types/kitten';
import { v4 as uuidv4 } from 'uuid';

export const kittens: Kitten[] = [
  {
    id: uuidv4(),
    name: "Luna",
    breed: "Persa",
    age: 3,
    price: 800,
    image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=300&fit=crop",
    description: "Una hermosa gatita persa con pelaje sedoso y ojos azules brillantes.",
    color: "Blanco",
    gender: "female",
    vaccinated: true
  },
  {
    id: uuidv4(),
    name: "Simba",
    breed: "Maine Coon",
    age: 4,
    price: 1200,
    image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=400&h=300&fit=crop",
    description: "Un majestuoso Maine Coon con personalidad juguetona y cariñosa.",
    color: "Naranja",
    gender: "male",
    vaccinated: true
  },
  {
    id: uuidv4(),
    name: "Mimi",
    breed: "Siamés",
    age: 2,
    price: 600,
    image: "https://images.unsplash.com/photo-1573865526739-10659fec78a5?w=400&h=300&fit=crop",
    description: "Una elegante gatita siamesa muy inteligente y comunicativa.",
    color: "Crema y marrón",
    gender: "female",
    vaccinated: true
  },
  {
    id: uuidv4(),
    name: "Oliver",
    breed: "Británico de pelo corto",
    age: 5,
    price: 900,
    image: "https://images.unsplash.com/photo-1596854407944-bf87f6fdd49e?w=400&h=300&fit=crop",
    description: "Un gato británico tranquilo y gentil, perfecto para familias.",
    color: "Gris",
    gender: "male",
    vaccinated: true
  },
  {
    id: uuidv4(),
    name: "Bella",
    breed: "Ragdoll",
    age: 3,
    price: 1000,
    image: "https://images.unsplash.com/photo-1615789591457-74a63395c990?w=400&h=300&fit=crop",
    description: "Una dulce Ragdoll que adora los abrazos y es muy relajada.",
    color: "Blanco y gris",
    gender: "female",
    vaccinated: true
  },
  {
    id: uuidv4(),
    name: "Max",
    breed: "Bengalí",
    age: 2,
    price: 1500,
    image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=300&fit=crop",
    description: "Un exótico gato bengalí con patrones únicos y mucha energía.",
    color: "Dorado con manchas",
    gender: "male",
    vaccinated: true
  }
];