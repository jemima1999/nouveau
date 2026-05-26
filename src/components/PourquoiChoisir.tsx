import { Heart, Phone, RefreshCw } from 'lucide-react'

const reasons = [
  {
    icon: <Heart size={28} className="text-white" />,
    title: 'La tenue idéale pour chaque occasion',
    desc: 'Vous aimez les tenues élégantes, uniques et qu\'on ne voit pas partout ? Alors vous allez adorer traîner ici ! Vous êtes au meilleur endroit pour être sapé(e) avec style',
  },
  {
    icon: <Phone size={28} className="text-white" />,
    title: 'Le couturier compétent pour chaque tenue',
    desc: 'La bonne tenue, c\'est bien... mais après ? Nous délichons le meilleur couturier pour la réaliser pour vous, tout en respectant votre budget et les délais.',
  },
  {
    icon: <RefreshCw size={28} className="text-white" />,
    title: 'AWU TCHE la plateforme de la mode Africaine',
    desc: 'Refund is a such bad experience and we don\'t want that thing happen to you. But when it\'s happen we will make sure you will through smooth and friendly process.',
  },
]

export default function PourquoiChoisir() {
  return (
    <section className="px-6 md:px-12 py-10">
      <h2 className="text-2xl md:text-3xl font-bold mb-10">
        Pourquoi choisir<br />Awu Tche ?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <div key={i}>
            <div className="w-14 h-14 rounded-full bg-[#E8192C] flex items-center justify-center mb-4">
              {r.icon}
            </div>
            <h3 className="font-bold text-base mb-2">{r.title}</h3>
            <p className="text-sm text-gray-500 leading-relaxed">{r.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
