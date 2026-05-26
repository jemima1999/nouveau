export default function EvenementSpecial() {
  return (
    <section className="px-6 md:px-12 py-12 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
      {/* Left text */}
      <div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#E8192C] leading-tight mb-4">
          UN évenement Spécail ?
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Dis nous tout, nous trouvons pour la tenue idéale et le meilleur couturier proche de vous pour le réaliser.
        </p>
        <button className="border border-[#E8192C] text-[#E8192C] text-sm px-6 py-2.5 rounded-full hover:bg-[#E8192C] hover:text-white transition-all">
          Découvrir
        </button>
      </div>

      {/* Card femme */}
      <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1583912267550-d974f6b4c0a4?w=600&q=80"
          alt="Couturier tenue femme"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-semibold text-sm">Trouvez un couturier</p>
          <p className="font-bold text-base">tenue femme</p>
        </div>
        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-white flex items-center justify-center">
          <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Card homme */}
      <div className="relative rounded-2xl overflow-hidden h-64 group cursor-pointer">
        <img
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&q=80"
          alt="Couturier tenue homme"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 text-white">
          <p className="font-semibold text-sm">Trouvez un couturier</p>
          <p className="font-bold text-base">tenue homme</p>
        </div>
        <div className="absolute bottom-4 right-4 w-7 h-7 rounded-full border border-white flex items-center justify-center">
          <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
