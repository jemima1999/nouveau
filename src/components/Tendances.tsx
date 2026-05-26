'use client'
import { useState } from 'react'
import { Heart } from 'lucide-react'

const categories = ['FEMMES', 'HOMMES', 'ENFANTS', 'Mariage', 'Accessoires']

const products = [
  { id: 1, name: 'robe longue', price: '$225', img: 'https://images.unsplash.com/photo-1583912267550-d974f6b4c0a4?w=400&q=80' },
  { id: 2, name: 'pantalon ample', price: '$125', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&q=80' },
  { id: 3, name: 'jacket en pagne', price: '$125', img: 'https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=400&q=80' },
  { id: 4, name: 'jupe et habit', price: '$125', img: 'https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=400&q=80' },
  { id: 5, name: 'boubou', price: '$125', img: 'https://images.unsplash.com/photo-1613963931023-5dc59437c8a6?w=400&q=80' },
  { id: 6, name: 'robe courte', price: '$159', img: 'https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=400&q=80' },
]

export default function Tendances() {
  const [active, setActive] = useState('Mariage')
  const [liked, setLiked] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLiked(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id])
  }

  return (
    <section className="px-6 md:px-12 py-8">
      {/* Header + filters */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold">Tendances</h2>
        <div className="flex flex-wrap gap-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all ${
                active === cat
                  ? 'bg-[#E8192C] text-white border-[#E8192C]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#E8192C] hover:text-[#E8192C]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map(product => (
          <div key={product.id} className="group relative cursor-pointer product-card">
            <div className="relative rounded-xl overflow-hidden aspect-[3/4] bg-gray-100">
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Wishlist button */}
              <button
                onClick={() => toggleLike(product.id)}
                className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Heart
                  size={16}
                  className={liked.includes(product.id) ? 'fill-[#E8192C] text-[#E8192C]' : 'text-gray-500'}
                />
              </button>
            </div>
            <div className="mt-2">
              <p className="text-sm font-medium text-gray-800">{product.name}</p>
              <p className="text-sm text-gray-500">{product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
