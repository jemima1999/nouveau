'use client'
import Link from 'next/link'
import { ChevronLeft } from 'lucide-react'
import AuthLayout from '@/components/auth/AuthLayout'

export default function VerifyCodePage() {
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

      <h1 className="text-2xl font-bold text-[#E8192C] mb-3">Verify code</h1>
      <p className="text-sm text-gray-500 mb-8">
        Don't worry, happens to all of us. Enter your email below to recover your password
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Entrez le code</label>
          <input
            type="text"
            maxLength={6}
            placeholder=""
            className="w-full border border-[#E8192C]/30 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] tracking-widest text-center text-lg transition-colors"
          />
        </div>

        <Link href="/reset-password">
          <button className="w-full bg-[#E8192C]/40 text-white py-3 rounded-full text-sm font-medium hover:bg-[#E8192C] transition-colors mt-1">
            Vérifier
          </button>
        </Link>

        <p className="text-center text-sm text-gray-600">
          Vous n'avez pas reçu de code ?{' '}
          <button className="text-[#E8192C] font-medium hover:underline">
            Renvoyer
          </button>
        </p>
      </div>
    </AuthLayout>
  )
}
