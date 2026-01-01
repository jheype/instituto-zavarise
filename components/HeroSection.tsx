import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="inicio" className="relative">
      <div className="relative h-[560px] w-full overflow-hidden">
        <Image
          src="/herosection.png"
          alt="Instituto Zavarise"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{ objectPosition: "50% 40%" }}
        />

        <div className="absolute inset-0 bg-black/20" />

        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div data-aos="fade-up" className="text-center">
            <div className="text-white/90 text-[56px] leading-[1] tracking-[0.18em] font-light">
              INSTITUTO
            </div>

            <div
              className="mt-3 text-[56px] leading-[1] tracking-[0.18em] font-light"
              style={{ color: "#b4947cff" }}
            >
              ZAVARISE
            </div>

            <p className="mx-auto mt-6 max-w-xl text-white/80 text-[16px] leading-relaxed">
              Atendimento clínico com escuta ética, responsável e acolhedora
            </p>

            <div
              className="mt-8 inline-flex items-center justify-center rounded-full px-7 py-3 text-[13px] font-semibold text-white shadow-[0_18px_45px_-25px_rgba(0,0,0,0.7)] transition-transform hover:-translate-y-[1px] active:translate-y-0"
              style={{ backgroundColor: "#A88F7C" }}
            >
              <a href="https://wa.me/5527998151536?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">AGENDAR CONSULTA</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
