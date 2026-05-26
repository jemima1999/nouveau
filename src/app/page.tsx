import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import EvenementSpecial from '@/components/EvenementSpecial'
import Tendances from '@/components/Tendances'
import ExplorerParTissu from '@/components/ExplorerParTissu'
import Testimonials from '@/components/Testimonials'
import PourquoiChoisir from '@/components/PourquoiChoisir'
import CouturierCTA from '@/components/CouturierCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <EvenementSpecial />
      <Tendances />
      <ExplorerParTissu />
      <Testimonials />
      <PourquoiChoisir />
      <CouturierCTA />
      <Footer />
    </main>
  )
}
