import Link from 'next/link'

const footerLinks = {
  'POPULAR': ['Femmes', 'Hommes', 'Enfants', 'Mariage', 'Accessories'],
  'MENU': ['All Category', 'Gift Cards', 'Special Events', 'Testimonial', 'Blog'],
  'OTHER': ['Tracking Package', 'FAQ', 'About Us', 'Contact Us', 'Terms and Conditions'],
}

interface AuthLayoutProps {
  children: React.ReactNode
  navRight?: React.ReactNode
  imageSlide?: 'client' | 'couturier'
}

export default function AuthLayout({ children, navRight, imageSlide = 'client' }: AuthLayoutProps) {
  const images = {
    client: 'https://images.unsplash.com/photo-1583912267550-d974f6b4c0a4?w=800&q=80',
    couturier: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80',
  }

  return (
    <div className="min-h-screen flex flex-col bg-white font-['Sora',sans-serif]">
      {/* Top nav */}
      <header className="border-b border-gray-100 px-8 py-3 flex items-center justify-end gap-6 text-sm">
        <a href="#" className="text-gray-600 hover:text-gray-900">FAQ</a>
        <a href="#" className="text-gray-600 hover:text-gray-900">À propos de nous</a>
        {navRight}
      </header>

      {/* Main content */}
      <main className="flex-1 px-8 md:px-16 py-16">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          {/* Left: form */}
          <div>{children}</div>

          {/* Right: image */}
          <div className="hidden md:block">
            <div className="rounded-3xl overflow-hidden border-2 border-[#E8192C]/20 h-[500px]">
              <img
                src={images[imageSlide]}
                alt="AWU TCHE fashion"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#E8192C] text-white px-8 md:px-16 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-2">AWU TCHE</h3>
            <p className="text-sm text-white/80 leading-relaxed mb-6">
              Restez à l'affût des nouvelles tendances mode et beauté à travers le continent. Abonnez-vous à notre newsletter pour ne rien rater !
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Type your email address"
                className="flex-1 bg-transparent border border-white/40 rounded-full px-4 py-2 text-sm placeholder-white/60 outline-none focus:border-white"
              />
              <button className="bg-white text-[#E8192C] px-5 py-2 rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                S'abonner
              </button>
            </div>
          </div>
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-xs font-bold tracking-widest mb-4 text-white/70">{title}</h4>
              <ul className="space-y-2">
                {links.map(link => (
                  <li key={link}>
                    <a href="#" className="text-sm text-white/80 hover:text-white transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  )
}
