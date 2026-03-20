import {
  About,
  Contact,
  Footer,
  Hero,
  Navbar,
  Services,
  Staff,
  WhatsAppButton
} from "@/components/site";

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Staff />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}