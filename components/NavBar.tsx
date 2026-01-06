import Link from "next/link";

type NavItem = { label: string; href: string };

const NAV_ITEMS: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#especialidades" },
  { label: "Sobre", href: "#sobre" },
  { label: "Especialistas", href: "#especialistas" },
  { label: "Localização", href: "#localizacao" },
];

export default function Navbar() {
  return (
    <header data-aos="fade-down" className="fixed inset-x-0 top-6 z-50">
      <div className="mx-auto w-full max-w-6xl px-4">
        <div className="flex items-center justify-between rounded-full border border-black/10 bg-[#E9EAED]/90 px-6 py-3 shadow-[0_18px_45px_-25px_rgba(0,0,0,0.55)] backdrop-blur">
          <Link href="#inicio" className="flex items-center gap-3">
            <div className="leading-none">
              <div className="text-[11px] py-1 font-semibold tracking-[0.22em] text-neutral-800/80">
                INSTITUTO
              </div>
              <div
                className="text-[14px] font-semibold tracking-[0.12em]"
                style={{ color: "#A88F7C" }}
              >
                ZAVARISE
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[12px] font-medium tracking-[0.12em] text-neutral-800/70 transition-colors hover:text-neutral-900"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div
            className="rounded-full px-5 py-2 text-[12px] font-medium tracking-[0.06em] text-white shadow-[0_10px_25px_-14px_rgba(0,0,0,0.6)] transition-transform hover:-translate-y-[1px] active:translate-y-0"
            style={{ backgroundColor: "#A88F7C" }}
          >
            <a href="https://wa.me/5527998151536?text=Olá,%20gostaria%20de%20agendar%20uma%20consulta." target="_blank" rel="noopener noreferrer">AGENDAR</a>
          </div>
        </div>
      </div>
    </header>
  );
}
