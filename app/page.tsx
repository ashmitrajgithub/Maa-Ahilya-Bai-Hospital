import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Facilities } from "@/components/facilities"
import { Services } from "@/components/services"
import { Pathology } from "@/components/pathology"
import { Doctors } from "@/components/doctors"
import { Gallery } from "@/components/gallery"
import { Consultation } from "@/components/consultation"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Facilities />
      <Services />
      <Pathology />
      <Doctors />
      <Gallery />
      <Consultation />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  )
}
