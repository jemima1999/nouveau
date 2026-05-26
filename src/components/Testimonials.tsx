'use client'
import { useState } from 'react'

const testimonials = [
  {
    text: 'Je trouve toujours le bon couturier pour mes tenues.',
    detail: 'Depuis j\'utilise AWU TCHE plus de soucis, je j\'ai trouvé ici parfaitement toujours ma tenue comme je l\'ai imaginé et dans les délais et ça ça n\'a pas de prix',
    author: 'Nonvignon Jemima',
  },
  {
    text: 'Une plateforme exceptionnelle pour la mode africaine.',
    detail: 'AWU TCHE m\'a permis de trouver le meilleur couturier de ma région. Je recommande fortement à toutes les personnes qui aiment la mode africaine.',
    author: 'Aïcha Traoré',
  },
  {
    text: 'Mon couturier idéal en quelques clics seulement.',
    detail: 'Je n\'aurais jamais pensé trouver un couturier aussi talentueux si facilement. Grâce à AWU TCHE, mes tenues sont toujours parfaites.',
    author: 'Kofi Mensah',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const t = testimonials[current]

  return (
    <section className="mx-6 md:mx-12 my-10 bg-[#E8192C] rounded-2xl px-8 md:px-16 py-12 text-white">
      <p className="text-xs font-medium opacity-70 mb-3">Ce qu'on dis de nous</p>
      <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-4 max-w-xl">
        {t.text}
      </h3>
      <p className="text-sm opacity-80 max-w-lg mb-6">{t.detail}</p>
      <p className="text-sm font-semibold">{t.author}</p>

      {/* Dots */}
      <div className="flex gap-2 mt-6">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white' : 'bg-white/40'}`}
          />
        ))}
      </div>
    </section>
  )
}
