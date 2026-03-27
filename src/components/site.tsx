"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { montserrat } from "@/app/fonts";
import {
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone
} from "lucide-react";
import { Reveal } from "@/components/reveal";

const services = [
  {
    title: "Endocrinologia",
    description:
      "Diagnóstico e tratamento dos distúrbios hormonais, com abordagem integrada do metabolismo, incluindo tireoide, diabetes, menopausa, transtornos alimentares, obesidade e emagrecimento, promovendo o equilíbrio da saúde endócrina."
  },
  {
    title: "Dermatologia",
    description:
      "Cuidado médico especializado da pele, cabelos e unhas, associado a procedimentos de alta performance, com abordagem individualizada que alia precisão, naturalidade e refinamento estético."
  },
  {
    title: "Nutrição",
    description:
      "Acompanhamento nutricional altamente individualizado, com avaliação aprofundada do metabolismo, saúde intestinal e composição corporal, incluindo o manejo cuidadoso dos transtornos alimentares e desenvolvimento da consciência alimentar."
  },
  {
    title: "Psiquiatria",
    description:
      "Cuidado especializado em saúde mental, com abordagem altamente aprofundada, voltada ao manejo dos transtornos psiquiátricos, equilíbrio emocional, regulação do sono, ansiedade e humor, promovendo estabilidade, clareza mental e qualidade de vida."
  }
];

const professionals = [
  {
    name: "Dra. Bianca Zavarise",
    role: "Endocrinologia",
    image:
      "/bianca.jpg"
  },
  {
    name: "Dra. Ana Carolina Ceolin",
    role: "Nutrição",
    image:
      "/anacarol.jpeg"
  },
  {
    name: "Dra. Mliena Cipriano",
    role: "Dermatologia",
    image:
      "/milena-two.jpeg"
  },
  {
    name: "Dra. Danielly Calais",
    role: "Psiquiatria",
    image:
      "/danielly.jpeg"
  }
];

const quickLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Corpo Clínico", href: "#corpo-clinico" },
  { label: "Contato", href: "#contato" }
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="mb-4 block text-xs font-medium uppercase tracking-[0.32em] text-[var(--accent)]">
      {children}
    </span>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto max-w-7xl px-6 md:px-10 ${className}`}>{children}</div>;
}

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[rgba(137,116,95,0.1)] bg-[rgba(241,238,233,0.82)] backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <Link href="#top" className="font-[var(--font-serif)] text-xl uppercase tracking-[0.24em] text-[var(--accent)]">
          Instituto Zavarise
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {quickLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium uppercase tracking-[0.18em] transition-colors hover:text-[var(--accent)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contato"
          className="rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90"
        >
          AGENDE UMA CONSULTA
        </Link>
      </Container>
    </header>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden pt-20">
      <div className="absolute inset-0">
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-[var(--background)] via-[rgba(241,238,233,0.82)] to-transparent" />
        <Image
          src="/herosection.png"
          alt="Clínica moderna"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </div>

      <Container className="relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <span className="mb-4 block text-sm font-medium uppercase tracking-[0.32em] text-[var(--accent)]">
            Bem-vindo ao
          </span>
          <h1 className={`${montserrat.className} uppercase text-5xl text-[#665746] leading-[0.98] md:text-7xl lg:text-8xl`}>
            Instituto <br />
            <span>Zavarise</span>
          </h1>
          <p className="mt-6 max-w-xl text-base text-justify leading-8 text-[rgba(45,36,30,0.72)] md:text-lg">
            Descubra o prazer de se cuidar em um espaço pensado para acolher, transformar e elevar a sua saúde.
No Instituto Zavarize, cada detalhe foi criado para proporcionar uma experiência única, com olhar individualizado, ciência e cuidado em cada etapa da sua jornada.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#servicos"
              className="uppercase inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-8 py-4 text-base font-medium text-white transition-all hover:opacity-90"
            >
              Nossos Serviços
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link
              href="#sobre"
              className="uppercase inline-flex items-center justify-center rounded-full border border-[var(--accent)] px-8 py-4 text-base font-medium text-[var(--accent)] transition-all hover:bg-[var(--accent)] hover:text-white"
            >
              Conheça o Instituto
            </Link>
          </div>
        </motion.div>
      </Container>

      <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="h-12 w-px animate-pulse bg-[rgba(137,116,95,0.32)]" />
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="sobre" className="bg-white py-24">
      <Container>
        <div className="grid items-center gap-16 md:grid-cols-2">
          <Reveal className="relative" x={-40}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl">
              <Image
                src="/herosection.png"
                alt="Ambiente do Instituto Zavarise"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </Reveal>

          <Reveal x={40}>
            <SectionLabel>Nossa História</SectionLabel>
            <div className="mt-8 space-y-6 text-[rgba(45,36,30,0.7)] leading-8">
              <p>
                O Instituto Zavarize nasce da visão da Dra. Bianca Zavarize, construída a partir de um propósito muito claro: oferecer um cuidado que acolhe, integra e respeita a singularidade de cada paciente. Sua forma de enxergar a saúde parte de um princípio essencial: o paciente não pode ser fragmentado. Cuidar exige um olhar amplo, preciso e verdadeiramente integrado.
              </p>
              <p>
                Movida por esse propósito, idealizou um espaço onde diferentes especialidades atuam de forma complementar, oferecendo um cuidado contínuo, estratégico e personalizado. O Instituto reúne uma equipe integrada nas áreas de endocrinologia integrativa, nutrição, psiquiatria e dermatologia, permitindo uma abordagem completa, que respeita a individualidade e a complexidade de cada paciente.
              </p>
              <p>
                Mais do que um espaço de saúde, o Instituto Zavarize traduz um propósito de cuidado genuíno.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Services() {
  return (
    <section id="servicos" className="bg-[var(--background)] py-24">
      <Container>
        <Reveal className="mb-16 text-center">
          <SectionLabel>Especialidades</SectionLabel>
          <h2 className="uppercase font-[var(--font-serif)] text-4xl md:text-5xl">Nossos Serviços</h2>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => (
            <Reveal key={service.title} delay={index * 0.08} y={18}>
              <article className="group h-full rounded-[1.75rem] border border-[rgba(137,116,95,0.08)] bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-[rgba(137,116,95,0.22)]">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--background)] transition-colors group-hover:bg-[var(--accent)]">
                  <ArrowRight className="h-6 w-6 text-[var(--accent)] transition-colors group-hover:text-white" />
                </div>
                <h3 className="font-[var(--font-serif)] text-2xl">{service.title}</h3>
                <p lang="pt-BR" className="mt-4 text-justify leading-7 hyphens-auto text-sm text-[rgba(45,36,30,0.64)]">{service.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Staff() {
  return (
    <section id="corpo-clinico" className="bg-white py-24">
      <Container>
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal className="max-w-2xl">
            <SectionLabel>Excelência Médica</SectionLabel>
            <h2 className="uppercase font-[var(--font-serif)] text-4xl md:text-5xl">Corpo Clínico</h2>
          </Reveal>

          <Reveal>
            <Link
              href="#contato"
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.24em] text-[var(--accent)] transition-all hover:gap-3"
            >
              Ver todos os profissionais
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-4">
          {professionals.map((person, index) => (
            <Reveal key={person.name} delay={index * 0.08}>
              <article className="group">
                <div className="relative mb-6 aspect-[3/4] overflow-hidden rounded-[1.75rem]">
                  <Image
                    src={person.image}
                    alt={person.name}
                    fill
                    className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-[rgba(45,36,30,0.82)] via-transparent to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex gap-4 text-white">
                      <Instagram className="h-5 w-5" />
                    </div>
                  </div>
                </div>
                <h3 className="font-[var(--font-serif)] text-2xl">{person.name}</h3>
                <p className="mt-1 text-sm uppercase tracking-[0.2em] text-[var(--accent)]">{person.role}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="bg-[var(--background)] py-24">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <Reveal>
              <SectionLabel>Contato</SectionLabel>
            </Reveal>

            <div className="mt-10 space-y-8">
              <Reveal className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <MapPin className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium">Localização</h4>
                  <p className="mt-1 text-sm leading-7 text-[rgba(45,36,30,0.64)]">
                    Av. Hans Schmoger, 224 - Nossa Senhora da Conceição
                    <br />
                    Linhares - ES, 29900-495    
                  </p>
                </div>
              </Reveal>

              <Reveal className="flex items-start gap-4" delay={0.06}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Phone className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium">Telefone/Whatsapp</h4>
                  <p className="mt-1 text-sm text-[rgba(45,36,30,0.64)]">(27) 99815-1536</p>
                </div>
              </Reveal>

              <Reveal className="flex items-start gap-4" delay={0.12}>
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                  <Mail className="h-5 w-5 text-[var(--accent)]" />
                </div>
                <div>
                  <h4 className="font-medium">E-mail</h4>
                  <p className="mt-1 text-sm text-[rgba(45,36,30,0.64)]">institutozavarise@gmail.com</p>
                </div>
              </Reveal>
            </div>

            <Reveal className="mt-12 rounded-[1.75rem] border border-[rgba(137,116,95,0.1)] bg-white p-8 shadow-xl shadow-[rgba(137,116,95,0.06)]">
              <h4 className="font-[var(--font-serif)] text-2xl">Horário de Atendimento</h4>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex justify-between border-b border-[rgba(137,116,95,0.12)] pb-3">
                  <span className="text-[rgba(45,36,30,0.64)]">Segunda - Sexta</span>
                  <span className="font-medium">08:30 - 18:30</span>
                </div>
                <div className="flex justify-between border-b border-[rgba(137,116,95,0.12)] pb-3">
                  <span className="text-[rgba(45,36,30,0.64)]">Sábado</span>
                  <span className="font-medium italic text-[var(--accent)]">Fechado</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[rgba(45,36,30,0.64)]">Domingo</span>
                  <span className="font-medium italic text-[var(--accent)]">Fechado</span>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal className="overflow-hidden rounded-[2rem] border-4 border-white shadow-2xl">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3763.5571584204513!2d-40.07185722501429!3d-19.388318481881612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb625007f7418b7%3A0xfbae66374ae7a304!2sInstituto%20Zavarise!5e0!3m2!1spt-BR!2sbr!4v1774035584145!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="min-h-[520px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de localização"
            />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-[var(--foreground)] px-6 py-16 text-white">
      <Container className="px-0 md:px-0">
        <div className="mb-16 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <span className="block font-[var(--font-serif)] text-3xl uppercase tracking-[0.24em]">Instituto Zavarise</span>
            <p className="mt-6 max-w-md leading-8 text-white/60">
              Um convite para descobrir o prazer de se cuidar, em uma experiência de saúde exclusiva que une ciência, sofisticação e sensibilidade.             
            </p>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.24em]">Links Rápidos</h4>
            <ul className="mt-6 space-y-4 text-sm text-white/60">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-medium uppercase tracking-[0.24em]">Redes Sociais</h4>
            <div className="mt-6 flex gap-4">
              {[Instagram].map((Icon, index) => (
                <a
                  key={index}
                  href="https://www.instagram.com/institutozavarise/"
                  target="_blank"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all hover:border-[var(--accent)] hover:bg-[var(--accent)]"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-center uppercase tracking-[0.22em] text-white/40 md:flex-row">
          <p className="text-xs">© 2026 Instituto Zavarise. Todos os direitos reservados.</p>
          <p className="text-[8px]">Desenvolvido por: <a href="https://jheype.dev" className="text-blue-300" target="_blank">Jheype</a></p>
        </div>
      </Container>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/5527998151536"
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.96 }}
      className="group fixed bottom-8 right-8 z-50 rounded-full bg-[#25D366] p-4 text-white shadow-2xl"
    >
      <div className="pointer-events-none absolute -left-36 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-lg border border-[rgba(137,116,95,0.1)] bg-white px-4 py-2 text-sm font-medium text-[var(--foreground)] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        Fale conosco agora
      </div>
      <svg viewBox="0 0 24 24" className="h-8 w-8 fill-current" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    </motion.a>
  );
}