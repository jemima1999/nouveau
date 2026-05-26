'use client'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import AuthLayout from '@/components/auth/AuthLayout'
import GoogleButton from '@/components/auth/GoogleButton'

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      imageSlide="client"
      navRight={
        <span className="text-sm text-gray-600">Support</span>
      }
    >
      <Link
        href="/login"
        className="inline-flex items-center gap-1 text-sm text-[#E8192C] mb-6 hover:underline"
      >
        <ChevronLeft size={16} />
        Retour à la page de connexion
      </Link>

      <h1 className="text-2xl font-bold text-[#E8192C] leading-tight mb-3">
        Vous avez oublié votre<br />mot de passé ?
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Don't worry, happens to all of us. Enter your email below to recover your password
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            className="w-full border border-[#E8192C]/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <button className="w-full bg-[#E8192C]/40 text-white py-3 rounded-full text-sm font-medium hover:bg-[#E8192C] transition-colors">
          Soumettre
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
