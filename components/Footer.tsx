import Link from "next/link";

export default function Footer() {
  return (
    <>
      {/* CTA */}
      <section className="bg-[#F6F2EE] py-28 text-center">
        <h2
          data-aos="fade-down"
          className="mb-8 text-[18px] font-medium tracking-[0.25em]"
          style={{ color: "#A88F7C" }}
        >
          PRONTO PARA O PRÓXIMO PASSO?
        </h2>

        <div
          data-aos="fade-down"
          className="inline-flex items-center justify-center rounded-sm px-14 py-4 text-[13px] font-semibold tracking-[0.18em] text-white shadow-[0_14px_35px_-22px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-[1px] active:translate-y-0"
          style={{ backgroundColor: "#A88F7C" }}
        >
          <a href="https://wa.me/5527998151536?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">AGENDAR</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative bg-[#A88F7C] py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col items-center justify-center gap-6">
            <div className="text-[16px] font-medium tracking-[0.35em] text-white">
              ZAVARISE
            </div>

            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="https://instagram.com/institutozavarise"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-opacity hover:text-white"
                aria-label="Instagram"
              >
                IG
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/5527998151536"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 transition-opacity hover:text-white"
                aria-label="WhatsApp"
              >
                WA
              </a>

              {/* Email */}
              <a
                href="mailto:contato@institutozavarise.com"
                className="text-white/80 transition-opacity hover:text-white"
                aria-label="Email"
              >
                @
              </a>
            </div>
          </div>

          {/* assinatura */}
          <div className="absolute bottom-6 right-6 text-[11px] tracking-wide text-white/70">
            <a
              href="https://jheype.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-opacity hover:text-white"
            >
              Desenvolvedor
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
