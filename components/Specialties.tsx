import { PiDna, PiLeaf, PiSparkle, PiBrain } from "react-icons/pi";

const SPECIALTIES = [
  {
    title: "Endocrinologia",
    description:
      "Acompanhamento hormonal e metabólico com abordagem clínica individualizada.",
    icon: PiDna,
  },
  {
    title: "Nutrição",
    description:
      "Planos alimentares personalizados focados em saúde, equilíbrio e bem-estar.",
    icon: PiLeaf,
  },
  {
    title: "Dermatologia",
    description:
      "Cuidados com a pele, estética e tratamentos dermatológicos especializados.",
    icon: PiSparkle,
  },
  {
  title: "Psiquiatria",
  description:
    "Avaliação e acompanhamento em saúde mental, com abordagem clínica ética e individualizada.",
  icon: PiBrain,
  },
];

export default function Specialties() {
  return (
    <section
      id="especialidades"
      className="bg-[#F6F2EE] py-28"
    >
      <div className="mx-auto max-w-6xl px-6">
        <h2
          data-aos="fade-right"
          className="mb-14 text-xl font-medium tracking-[0.35em]"
          style={{ color: "#AE836D" }}
        >
          NOSSOS SERVIÇOS
        </h2>

        <div data-aos="fade-down" className="grid gap-12 md:grid-cols-2">
          {SPECIALTIES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-[#AE836D]/70 bg-[#F1ECE7] p-10 text-center shadow-[0_18px_45px_-28px_rgba(0,0,0,0.45)] transition-transform hover:-translate-y-[2px]"
            >
              <div
                className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full"
                style={{ backgroundColor: "#AE836D" }}
              >
                <item.icon className="h-9 w-9 text-white" />
              </div>

              <h3 className="mb-3 text-[15px] font-semibold tracking-[0.18em] text-neutral-900">
                {item.title.toUpperCase()}
              </h3>

              <p className="text-[13px] leading-relaxed text-neutral-700">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
