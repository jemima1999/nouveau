'use client'
import Link from 'next/link'
import AuthLayout from '@/components/auth/AuthLayout'
import GoogleButton from '@/components/auth/GoogleButton'

export default function LoginPage() {
  return (
    <AuthLayout
      imageSlide="client"
      navRight={
        <Link
          href="/login"
          className="border border-[#E8192C] text-[#E8192C] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#E8192C] hover:text-white transition-all"
        >
          Connexion
        </Link>
      }
    >
      <h1 className="text-2xl font-bold mb-8">Connexion à votre compte</h1>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Mot de passe</label>
          <input
            type="password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600 cursor-pointer">
            <input type="checkbox" className="w-4 h-4 rounded border-gray-300 accent-[#E8192C]" />
            Se souvenir de moi
          </label>
          <Link href="/forgot-password" className="text-sm text-[#E8192C] hover:underline">
            Mot de passe oublié
          </Link>
        </div>

        <button className="w-full bg-[#E8192C]/40 text-white py-3 rounded-full text-sm font-medium hover:bg-[#E8192C] transition-colors">
          Connexion
        </button>

        <p className="text-center text-sm text-gray-600">
          Vous n'avez pas de compte ?{' '}
          <Link href="/register" className="text-[#E8192C] font-medium hover:underline">
            Inscription
          </Link>
        </p>

        <GoogleButton />
      </div>
    </AuthLayout>
  )
}
