import Nav from '@/components/Nav/Nav'
import Hero from '@/components/Hero/Hero'
import MarqueeSection from '@/components/Marquee/MarqueeSection'
import Origin from '@/components/Origin/Origin'
import Tasting from '@/components/Tasting/Tasting'
import CaddyDetail from '@/components/CaddyDetail/CaddyDetail'
import Ritual from '@/components/Ritual/Ritual'
import Heritage from '@/components/Heritage/Heritage'
import Cta from '@/components/Cta/Cta'
import Footer from '@/components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <MarqueeSection />
        <Origin />
        <Tasting />
        <CaddyDetail />
        <Ritual />
        <Heritage />
        <Cta />
      </main>
      <Footer />
    </>
  )
}
