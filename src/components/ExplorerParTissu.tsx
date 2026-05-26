const tissus = [
  { name: 'Wax hollandais', color: '#F4A224' },
  { name: 'Bogolan', color: '#8B4513' },
  { name: 'Bazin riche', color: '#4A90D9' },
  { name: 'Kente', color: '#2ECC71' },
  { name: 'Indigo africain', color: '#1A3A6E' },
  { name: 'Soie', color: '#E91E8C' },
  { name: 'Coton', color: '#E8192C' },
  { name: 'Satin', color: '#9B59B6' },
  { name: 'Dentelle', color: '#27AE60' },
]

export default function ExplorerParTissu() {
  return (
    <section className="px-6 md:px-12 py-10">
      <div className="flex flex-wrap items-start gap-8">
        <h2 className="text-2xl md:text-3xl font-bold leading-tight min-w-[160px]">
          Explorer<br />par tissu
        </h2>
        <div className="flex flex-wrap gap-2">
          {tissus.map(tissu => (
            <button
              key={tissu.name}
              className="flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 text-sm font-medium hover:border-gray-400 transition-colors bg-white"
            >
              <span
                className="w-3.5 h-3.5 rounded-full flex-shrink-0"
                style={{ backgroundColor: tissu.color }}
              />
              {tissu.name}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
