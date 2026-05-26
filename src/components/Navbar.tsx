'use client'
import { useState } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="w-full bg-white border-b border-gray-100">
      {/* Top bar */}
      <div className="flex items-center justify-between px-6 py-2 text-xs text-gray-500 border-b border-gray-100">
        <div />
        <div className="flex gap-6 items-center">
          <Link href="#" className="hover:text-gray-800">FAQ</Link>
          <Link href="#" className="hover:text-gray-800">À propos de nous</Link>
          <Link href="/login" className="hover:text-gray-800 font-medium">Connexion</Link>
          <Link
            href="/register"
            className="border border-[#E8192C] text-[#E8192C] px-4 py-1 rounded-full hover:bg-[#E8192C] hover:text-white transition-all"
          >
            S'inscrire
          </Link>
        </div>
      </div>

      {/* Main nav */}
      <div className="flex items-center justify-between px-6 py-3 gap-8">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <span className="font-bold text-xl tracking-tight text-[#E8192C]">AWU TCHE</span>
        </Link>

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
          <Link href="#" className="flex items-center gap-1 hover:text-[#E8192C] transition-colors">
            Tous les catégories <ChevronDown size={14} />
          </Link>
          <Link href="#" className="hover:text-[#E8192C] transition-colors">Couturiers</Link>
          <Link href="#" className="hover:text-[#E8192C] transition-colors">Votre styliste</Link>
          <Link href="#" className="hover:text-[#E8192C] transition-colors">Accessoires</Link>
        </nav>

        {/* Mobile menu */}
        <button className="md:hidden" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {mobileOpen && (
        <div className="md:hidden px-6 py-4 border-t border-gray-100 flex flex-col gap-4 text-sm font-medium">
          <Link href="#">Tous les catégories</Link>
          <Link href="#">Couturiers</Link>
          <Link href="#">Votre styliste</Link>
          <Link href="#">Accessoires</Link>
          <Link href="/login" className="text-[#E8192C]">Connexion</Link>
          <Link href="/register" className="text-[#E8192C]">S'inscrire</Link>
        </div>
      )}
    </header>
  )
}
