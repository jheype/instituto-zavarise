import NavBar from "@/components/NavBar"
import Hero from "@/components/HeroSection"
import Specialties from "@/components/Specialties"
import About from "@/components/About"
import Experts from "@/components/Experts"
import Location from "@/components/Location"
import Footer from "@/components/Footer"

export default function Home() {
  return(
    <>
      <NavBar />
      <Hero />
      <Specialties />
      <About />
      <Experts />
      <Location />
      <Footer />
    </>
  )
}