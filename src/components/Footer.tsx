const footerLinks = {
  'POPULAIRE': ['Accueil', 'Catégories', 'Nos Couturiers', 'Blog'],
  'MENU': ['Couturiers', 'Votre Styliste', 'Accessoires', 'Contact'],
  'OTHER': ['Politique Privée', 'Conditions', 'Support AWU TCHE'],
}

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-white px-6 md:px-12 py-12 mt-8">
      <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
        {/* Brand */}
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-bold text-lg mb-2">AWU TCHE</h3>
          <p className="text-xs text-gray-400 leading-relaxed mb-4">
            La plateforme de la mode africaine qui vous connecte aux meilleurs couturiers.
          </p>
          <button className="border border-white/30 text-white text-xs px-5 py-2 rounded-full hover:bg-white hover:text-black transition-all">
            S'abonner
          </button>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([title, links]) => (
          <div key={title}>
            <h4 className="text-xs font-semibold text-gray-400 mb-4">{title}</h4>
            <ul className="space-y-2">
              {links.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Social */}
        <div>
          <h4 className="text-xs font-semibold text-gray-400 mb-4">RÉSEAUX</h4>
          <div className="flex gap-3">
            {['f', 't', 'in', 'ig'].map(s => (
              <a
                key={s}
                href="#"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-xs hover:border-white transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 flex flex-wrap justify-between items-center gap-4 text-xs text-gray-500">
        <div className="flex gap-6">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
          <a href="#">Support AWU TCHE</a>
        </div>
        <p>© Copyright 2026. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
