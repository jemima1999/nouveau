'use client'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'
import AuthLayout from '@/components/auth/AuthLayout'

export default function ResetPasswordPage() {
  const [show1, setShow1] = useState(false)
  const [show2, setShow2] = useState(false)

  return (
    <AuthLayout
      imageSlide="client"
      navRight={
        <span className="text-sm text-gray-600">Support</span>
      }
    >
      <h1 className="text-2xl font-bold text-[#E8192C] leading-tight mb-3">
        Mettre à jour votre mot<br />de passe
      </h1>
      <p className="text-sm text-gray-500 mb-8">
        Your previous password has been reseted. Please set a new password for your account.
      </p>

      <div className="space-y-5">
        <div>
          <label className="block text-sm text-gray-600 mb-1.5">mot de passe</label>
          <div className="relative">
            <input
              type={show1 ? 'text' : 'password'}
              className="w-full border border-[#E8192C]/30 rounded-lg px-4 py-3 pr-12 text-sm outline-none focus:border-[#E8192C] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShow1(!show1)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {show1 ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1.5">confirmer le mot de passe</label>
          <div className="relative">
            <input
              type={show2 ? 'text' : 'password'}
              className="w-full border border-[#E8192C]/30 rounded-lg px-4 py-3 pr-12 text-sm outline-none focus:border-[#E8192C] transition-colors"
            />
            <button
              type="button"
              onClick={() => setShow2(!show2)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {show2 ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>

        <button className="w-full bg-[#E8192C]/40 text-white py-3 rounded-full text-sm font-medium hover:bg-[#E8192C] transition-colors">
          Mettre à jour
        </button>
      </div>
    </AuthLayout>
  )
}
