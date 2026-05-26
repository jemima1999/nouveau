'use client'
import { useState } from 'react'
import Link from 'next/link'
import AuthLayout from '@/components/auth/AuthLayout'
import GoogleButton from '@/components/auth/GoogleButton'

export default function RegisterPage() {
  const [role, setRole] = useState<'client' | 'couturier'>('client')

  return (
    <AuthLayout
      imageSlide={role}
      navRight={
        <Link
          href="/register"
          className="border border-[#E8192C] text-[#E8192C] px-5 py-1.5 rounded-full text-sm font-medium hover:bg-[#E8192C] hover:text-white transition-all"
        >
          S'inscrire
        </Link>
      }
    >
      {/* Role selector */}
      <p className="text-sm text-gray-500 mb-4">Comment vous voulez vous créer votre compte</p>
      <div className="flex gap-3 mb-8">
        <button
          onClick={() => setRole('client')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium transition-all ${
            role === 'client'
              ? 'border-[#E8192C] text-[#E8192C] bg-[#E8192C]/5'
              : 'border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            role === 'client' ? 'border-[#E8192C]' : 'border-gray-300'
          }`}>
            {role === 'client' && <span className="w-2 h-2 rounded-full bg-[#E8192C]" />}
          </span>
          comme client
        </button>
        <button
          onClick={() => setRole('couturier')}
          className={`flex items-center gap-2 px-6 py-3 rounded-lg border text-sm font-medium transition-all ${
            role === 'couturier'
              ? 'border-[#E8192C] text-[#E8192C] bg-[#E8192C]/5'
              : 'border-gray-200 text-gray-600 hover:border-gray-300'
          }`}
        >
          <span className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
            role === 'couturier' ? 'border-[#E8192C]' : 'border-gray-300'
          }`}>
            {role === 'couturier' && <span className="w-2 h-2 rounded-full bg-[#E8192C]" />}
          </span>
          comme couturier(ère)
        </button>
      </div>

      {/* Form */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Créer un compte</h1>
        <Link href="/login" className="text-sm text-gray-700 underline hover:text-[#E8192C]">
          Connexion
        </Link>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Nom & Prénom</label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Email</label>
          <input
            type="email"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">mot de passe</label>
          <input
            type="password"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">Localisation</label>
          <input
            type="text"
            className="w-full border border-gray-200 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#E8192C] transition-colors"
          />
        </div>

        <div className="flex items-start gap-2 pt-1">
          <input
            type="checkbox"
            defaultChecked
            className="w-4 h-4 mt-0.5 rounded border-gray-300 accent-[#E8192C]"
          />
          <p className="text-sm text-gray-600">
            By creating an account, I agree to our{' '}
            <Link href="#" className="font-bold text-gray-800 hover:text-[#E8192C]">Terms of use</Link>
            {' '}and{' '}
            <Link href="#" className="font-bold text-gray-800 hover:text-[#E8192C]">Privacy Policy</Link>
          </p>
        </div>

        <button className="w-full bg-[#E8192C]/40 text-white py-3 rounded-full text-sm font-medium hover:bg-[#E8192C] transition-colors">
          Create an account
        </button>

        <GoogleButton />
      </div>
    </AuthLayout>
  )
}
