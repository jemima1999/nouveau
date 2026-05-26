'use client'
import { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 text-xs text-gray-500 border-b border-gray-100">
        <div />
        <div className="flex gap-6">
          <a href="#" className="hover:text-gray-800">FAQ</a>
          <a href="#" className="hover:text-gray-800">À propos de nous</a>
          <a href="/login" className="hover:text-gray-800 font-medium">Connexion</a>
          <a href="/register" className="hover:text-gray-800">S'inscrire</a>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-3 gap-8">
        {/* Logo */}
        <div className="flex-shrink-0">
          <span className="font-bold text-xl tracking-tight text-[#E8192C]">AWU TCHE</span>
        </div>

        {/* Search */}
        <div className="flex items-center border border-gray-200 rounded-full px-4 py-2 gap-2 w-64 bg-white">
          <input
            type="text"
            placeholder="Search here"
            className="text-sm outline-none w-full text-gray-600"
          />
          <Search size={16} className="text-gray-400 flex-shrink-0" />
        </div>

        {/* Nav links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <a href="#" className="flex items-center gap-1 hover:text-[#E8192C] transition-colors">
            Tous les catégories <ChevronDown size={14} />
          </a>
          <a href="#" className="hover:text-[#E8192C] transition-colors">Couturiers</a>
          <a href="#" className="hover:text-[#E8192C] transition-colors">Votre styliste</a>
          <a href="#" className="hover:text-[#E8192C] transition-colors">Accessoires</a>
        </nav>

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-100 flex flex-col gap-4 text-sm font-medium">
          <a href="#">Tous les catégories</a>
          <a href="#">Couturiers</a>
          <a href="#">Votre styliste</a>
          <a href="#">Accessoires</a>
        </div>
      )}
    </header>
  )
}
