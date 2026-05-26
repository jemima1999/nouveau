import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AWU TCHE - La mode africaine',
  description: 'Trouvez l\'inspiration mais aussi votre futur couturier',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
