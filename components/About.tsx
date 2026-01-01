import Image from "next/image";

export default function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-[#F6F2EE]">
      {/* background marrom recortado (não cobre conteúdo) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[#A88F7C] [clip-path:polygon(0_0,100%_0,100%_72%,0_100%)]"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-16 pb-28">
        <h2 data-aos="fade-down" className="mb-12 text-center text-[22px] font-medium tracking-[0.35em] text-white">
          SOBRE O INSTITUTO ZAVARISE
        </h2>

        <div className="grid items-start gap-14 md:grid-cols-2">
          <div data-aos="fade-right" className="relative h-[420px] w-full overflow-hidden rounded-[8px] bg-neutral-200">
            <Image
              src="/about.png"
              alt="Instituto Zavarise"
              fill
              priority={false}
              sizes="(min-width: 768px) 520px, 100vw"
              className="object-cover"
            />
          </div>

          <div data-aos="fade-left" className="text-[15px] leading-[1.9] text-white/90">
            <p>
              Somos uma clínica dedicada
              ao cuidado completo da sua
              saúde e bem-estar.
            </p>

            <p className="mt-7">
              Aqui, cada detalhe é pensado
              para acolher, cuidar e
              promover qualidade de vida
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
