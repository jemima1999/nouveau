export default function CouturierCTA() {
  return (
    <section className="px-6 md:px-12 py-10">
      <p className="text-sm font-medium text-gray-500 mb-4">Vous êtes couturier(ères) ou acteur de la mode ?</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden h-64 md:h-72">
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80"
            alt="Couturiers au travail"
            className="w-full h-full object-cover"
          />
        </div>
        {/* Text */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
            Découvrez comment<br />AWU TCHE peut vous<br />aider.
          </h2>
          <p className="text-sm text-gray-500 mb-6 leading-relaxed">
            Maybe you don't need to buy new clothes to have nice, cool, fresh looking outfit everyday. Maybe what you need is to combine your clothes collections. Mix and match is the key.
          </p>
          <button className="border border-gray-800 text-gray-800 text-sm px-6 py-2.5 rounded-full hover:bg-gray-800 hover:text-white transition-all">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  )
}
