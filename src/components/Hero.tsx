export default function Hero() {
  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-[1fr_1fr] gap-1 h-[500px] md:h-[560px] overflow-hidden">
      {/* Left big image */}
      <div className="relative col-span-1 row-span-2 bg-gray-800 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1589156229687-496a31ad1d1f?w=800&q=80"
          alt="Femme en tenue africaine"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="absolute bottom-10 left-8 text-white max-w-[220px]">
          <h1 className="text-2xl md:text-3xl font-bold leading-tight mb-3">
            Des tenues qui vous ressemble vraiment
          </h1>
          <p className="text-sm text-white/80 mb-4">
            Trouvez l'inspiration mais aussi votre futur couturier
          </p>
          <button className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-black transition-all">
            <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Right top image */}
      <div className="relative bg-gray-700 overflow-hidden h-[248px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1590735213920-68192a487bc2?w=600&q=80"
          alt="Homme en costume africain"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Right bottom image */}
      <div className="relative bg-gray-600 overflow-hidden h-[248px] md:h-auto">
        <img
          src="https://images.unsplash.com/photo-1604671368394-2240d0b1bb6c?w=600&q=80"
          alt="Enfants en tenues africaines"
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-3 right-3 w-7 h-7 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
          <svg width="12" height="12" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>
    </section>
  )
}
