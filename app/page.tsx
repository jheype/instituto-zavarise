'use client';

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";

// Icons
import { PiDna, PiLeaf, PiSparkle, PiBrain, PiMapPin, PiPhone, PiInstagramLogo, PiEnvelope, PiCaretDown } from "react-icons/pi";
import { FaWhatsapp } from "react-icons/fa";
import { HiMenuAlt3, HiX } from "react-icons/hi";

// --- COMPONENTS ---

// 1. NAVBAR
const NAV_ITEMS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Sobre", href: "#sobre" },
  { label: "Corpo Clínico", href: "#especialistas" },
  { label: "Contato", href: "#localizacao" },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header 
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled 
            ? "bg-[#F9F7F5]/90 backdrop-blur-md py-4 shadow-sm" 
            : "bg-transparent py-6"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="#inicio" className="group relative z-50">
            <div className={`flex flex-col leading-none transition-colors duration-300 ${scrolled ? 'text-[#5E4B35]' : 'text-[#5E4B35] md:text-white'}`}>
              <span className="text-[10px] uppercase tracking-[0.3em] font-sans font-semibold opacity-80">Instituto</span>
              <span className="text-2xl font-serif tracking-wide font-medium">Zavarise</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-all duration-300 hover:-translate-y-0.5 ${
                  scrolled ? 'text-[#5E4B35] hover:text-[#A88F7C]' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            
            <a 
              href="https://wa.me/5527998151536?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." 
              target="_blank" 
              rel="noopener noreferrer"
              className={`px-8 py-3 text-[12px] uppercase tracking-[0.1em] font-bold rounded-sm transition-all duration-300 ${
                scrolled 
                  ? 'bg-[#A88F7C] text-white hover:bg-[#8F7663]' 
                  : 'bg-white text-[#A88F7C] hover:bg-[#F2F0ED]'
              }`}
            >
              Agendar
            </a>
          </nav>

          {/* Mobile Toggle */}
          <button 
            className={`md:hidden z-50 p-2 ${scrolled ? 'text-[#5E4B35]' : 'text-[#5E4B35]'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
             {mobileMenuOpen ? <HiX size={28} /> : <HiMenuAlt3 size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[#F9F7F5] flex flex-col items-center justify-center gap-8 transition-transform duration-500 md:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {NAV_ITEMS.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileMenuOpen(false)}
            className="text-2xl font-serif text-[#5E4B35]"
          >
            {item.label}
          </Link>
        ))}
        <a 
          href="https://wa.me/5527998151536" 
          className="mt-4 px-10 py-4 bg-[#A88F7C] text-white text-sm uppercase tracking-widest font-bold rounded-sm"
        >
          Agendar Consulta
        </a>
      </div>
    </>
  );
}

// 2. HERO SECTION
function Hero() {
  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/herosection.png"
          alt="Instituto Zavarise Ambiente"
          fill
          priority
          quality={90}
          className="object-cover"
          style={{ objectPosition: "center center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center pt-20">
        <div data-aos="fade-up" data-aos-duration="1000">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.4em] text-white/80">
            Saúde Integrativa & Bem-estar
          </p>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#F9F7F5] leading-tight">
            Instituto <br/> 
            <span className="italic text-[#CDBBA7]">Zavarise</span>
          </h1>
          
          <div className="mt-8 h-px w-24 bg-white/40 mx-auto" />
          
          <p className="mx-auto mt-8 max-w-lg text-lg text-white/90 font-light leading-relaxed">
            Um espaço dedicado ao cuidado completo, unindo ciência e acolhimento para promover sua melhor versão.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://wa.me/5527998151536" 
              className="px-10 py-4 bg-[#A88F7C] text-white text-[13px] uppercase tracking-[0.2em] font-semibold hover:bg-[#967d6a] transition-colors shadow-lg shadow-black/20"
            >
              Agendar Consulta
            </a>
            <a 
              href="#servicos" 
              className="px-10 py-4 border border-white/30 text-white text-[13px] uppercase tracking-[0.2em] font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Conheça o Instituto
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <PiCaretDown size={24} />
      </div>
    </section>
  );
}

// 3. SPECIALTIES
const SPECIALTIES = [
  {
    title: "Endocrinologia",
    desc: "Equilíbrio hormonal e metabólico para uma vida plena.",
    icon: PiDna,
  },
  {
    title: "Nutrição",
    desc: "Reeducação alimentar focada em performance e saúde.",
    icon: PiLeaf,
  },
  {
    title: "Dermatologia",
    desc: "Cuidados estéticos e clínicos para a saúde da sua pele.",
    icon: PiSparkle,
  },
  {
    title: "Psiquiatria",
    desc: "Acolhimento e tratamento ético para saúde mental.",
    icon: PiBrain,
  },
];

function Specialties() {
  return (
    <section id="servicos" className="bg-[#F9F7F5] py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div data-aos="fade-right">
            <span className="text-[#A88F7C] text-xs font-bold uppercase tracking-[0.25em]">Nossos Serviços</span>
            <h2 className="mt-4 text-4xl md:text-5xl font-serif text-[#5E4B35]">Especialidades</h2>
          </div>
          <p className="max-w-md text-[#5E4B35]/70 leading-relaxed text-sm md:text-base text-right md:text-right text-left" data-aos="fade-left">
            Oferecemos uma abordagem multidisciplinar, onde cada especialista trabalha em sintonia para o seu cuidado integral.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SPECIALTIES.map((item, idx) => (
            <div 
              key={item.title}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative bg-white p-8 md:p-10 border border-[#EBE5E0] hover:border-[#A88F7C]/30 transition-all duration-500 hover:shadow-[0_20px_40px_-15px_rgba(168,143,124,0.15)]"
            >
              <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#F6F2EE] text-[#A88F7C] group-hover:bg-[#A88F7C] group-hover:text-white transition-colors duration-500">
                <item.icon size={26} />
              </div>
              <h3 className="mb-3 text-xl font-serif text-[#5E4B35]">{item.title}</h3>
              <p className="text-sm text-[#5E4B35]/60 leading-relaxed">{item.desc}</p>
              
              <div className="mt-6 h-px w-8 bg-[#A88F7C]/30 group-hover:w-full transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 4. ABOUT SECTION (Redesigned)
function About() {
  return (
    <section id="sobre" className="relative py-24 bg-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative" data-aos="fade-right">
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-sm">
              <Image 
                src="/about.png" 
                alt="Interior Instituto Zavarise" 
                fill 
                className="object-cover hover:scale-105 transition-transform duration-1000"
              />
            </div>
            {/* Elemento Decorativo */}
            <div className="absolute -bottom-8 -right-8 h-40 w-40 bg-[#F6F2EE] -z-10 rounded-full blur-2xl opacity-70" />
            <div className="absolute -top-8 -left-8 h-64 w-64 border border-[#A88F7C]/20 -z-10" />
          </div>

          {/* Text Side */}
          <div data-aos="fade-left">
            <span className="text-[#A88F7C] text-xs font-bold uppercase tracking-[0.25em]">Sobre Nós</span>
            <h2 className="mt-4 text-4xl lg:text-5xl font-serif text-[#5E4B35] leading-tight mb-8">
              Um refúgio para sua <span className="italic text-[#A88F7C]">saúde</span> e bem-estar.
            </h2>
            
            <div className="space-y-6 text-[#5E4B35]/70 leading-relaxed font-light text-lg">
              <p>
                O Instituto Zavarise nasceu do desejo de proporcionar uma medicina mais humana, atenta e personalizada. Acreditamos que a saúde vai além da ausência de doenças; trata-se de vitalidade e equilíbrio.
              </p>
              <p>
                Nossa estrutura foi desenhada para acolher. Desde a recepção até o consultório, cada detalhe inspira tranquilidade, permitindo que você se sinta seguro para cuidar do que tem de mais precioso.
              </p>
            </div>

            <div className="mt-10 flex gap-8">
              <div>
                <span className="block text-3xl font-serif text-[#A88F7C]">4+</span>
                <span className="text-xs uppercase tracking-wider text-[#5E4B35]/60">Especialidades</span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#A88F7C]">100%</span>
                <span className="text-xs uppercase tracking-wider text-[#5E4B35]/60">Dedicação</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// 5. EXPERTS (Clean & Minimal)
const EXPERTS = [
  { name: "Dra. Bianca Zavarise", role: "Endocrinologia", crm: "CRM 12345", img: "/experts/expert-1.jpg" },
  { name: "Dra. Nome Sobrenome", role: "Nutrição", crm: "CRN 67890", img: "/experts/expert-2.jpg" },
  { name: "Dra. Nome Sobrenome", role: "Dermatologia", crm: "CRM 54321", img: "/experts/expert-3.jpg" },
];

function Experts() {
  return (
    <section id="especialistas" className="bg-[#5E4B35] py-24 text-[#F9F7F5]">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-serif mb-16" data-aos="fade-up">Corpo Clínico</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {EXPERTS.map((expert, idx) => (
            <div key={idx} className="group cursor-pointer" data-aos="fade-up" data-aos-delay={idx * 150}>
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-800 mb-6">
                <Image 
                  src={expert.img} 
                  alt={expert.name} 
                  fill 
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100" 
                />
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500" />
              </div>
              
              <h3 className="text-xl font-serif tracking-wide">{expert.name}</h3>
              <p className="text-[#A88F7C] text-sm uppercase tracking-widest mt-1 font-medium">{expert.role}</p>
              <p className="text-white/40 text-xs mt-2">{expert.crm}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// 6. LOCATION & CONTACT
function Location() {
  return (
    <section id="localizacao" className="relative py-24 bg-[#F9F7F5]">
       <div className="mx-auto max-w-7xl px-6">
          <div className="grid lg:grid-cols-5 gap-8 overflow-hidden rounded-2xl bg-white shadow-2xl shadow-[#A88F7C]/10">
            
            {/* Info Side */}
            <div className="lg:col-span-2 p-10 lg:p-14 flex flex-col justify-center bg-white relative z-10">
              <h2 className="text-3xl font-serif text-[#5E4B35] mb-8">Entre em contato</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#F6F2EE] text-[#A88F7C]"><PiMapPin size={24}/></div>
                  <div>
                    <h4 className="font-bold text-[#5E4B35] text-sm uppercase tracking-wider mb-1">Endereço</h4>
                    <p className="text-[#5E4B35]/70 text-sm">Av. Hans Schmoger, 224, Nossa Senhora da Conceição<br/>Linhares - ES, 29900-495</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#F6F2EE] text-[#A88F7C]"><PiPhone size={24}/></div>
                  <div>
                    <h4 className="font-bold text-[#5E4B35] text-sm uppercase tracking-wider mb-1">Telefone / WhatsApp</h4>
                    <p className="text-[#5E4B35]/70 text-sm">(27) 99815-1536</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-[#F6F2EE] text-[#A88F7C]"><PiEnvelope size={24}/></div>
                  <div>
                    <h4 className="font-bold text-[#5E4B35] text-sm uppercase tracking-wider mb-1">Email</h4>
                    <p className="text-[#5E4B35]/70 text-sm">contato@institutozavarise.com</p>
                  </div>
                </div>
              </div>

              <a 
                href="https://wa.me/5527998151536" 
                className="mt-10 inline-flex items-center justify-center gap-2 w-full py-4 bg-[#5E4B35] text-white text-sm uppercase tracking-widest font-bold hover:bg-[#4a3b2a] transition-colors"
              >
                <FaWhatsapp size={18} />
                Agendar Agora
              </a>
            </div>

            {/* Map Side */}
            <div className="lg:col-span-3 min-h-[400px] relative bg-neutral-200">
               <iframe
                title="Localização Instituto Zavarise"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
                src={`https://maps.google.com/maps?q=${encodeURIComponent("Instituto Zavarise")}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

          </div>
       </div>
    </section>
  );
}

// 7. FOOTER
function Footer() {
  return (
    <footer className="bg-[#2A2218] text-[#F9F7F5] py-16 border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-serif mb-1">Instituto Zavarise</h2>
          <p className="text-white/40 text-xs uppercase tracking-widest">Saúde Integrativa</p>
        </div>

        <div className="flex gap-6">
           <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#A88F7C] transition-colors"><PiInstagramLogo size={20} /></a>
           <a href="#" className="p-2 rounded-full bg-white/5 hover:bg-[#A88F7C] transition-colors"><PiEnvelope size={20} /></a>
        </div>

        <div className="text-center md:text-right text-xs text-white/30">
          <p>&copy; {new Date().getFullYear()} Instituto Zavarise.</p>
          <a href="https://jheype.dev" className="hover:text-white transition-colors">Dev by Jheype Studios</a>
        </div>
      </div>
    </footer>
  );
}

// 8. FLOATING BUTTON
function FloatingWhatsApp() {
    return (
        <a 
            href="https://wa.me/5527998151536?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta."
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-green-900/20 hover:scale-110 transition-transform duration-300"
            aria-label="Falar no WhatsApp"
        >
            <FaWhatsapp size={28} />
        </a>
    )
}

// --- MAIN PAGE ---

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out-cubic'
    });
  }, []);

  return (
    <main className="antialiased selection:bg-[#A88F7C] selection:text-white">
      <Navbar />
      <Hero />
      <Specialties />
      <About />
      <Experts />
      <Location />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}