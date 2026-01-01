import Image from "next/image";

type Expert = {
  name: string;
  role: string;
  imageSrc: string;
};

const EXPERTS: Expert[] = [
  {
    name: "Dra. Bianca Zavarise",
    role: "Endocrinologia",
    imageSrc: "/experts/expert-1.jpg",
  },
  {
    name: "Dra. Nome Sobrenome",
    role: "Nutrição",
    imageSrc: "/experts/expert-2.jpg",
  },
  {
    name: "Dra. Nome Sobrenome",
    role: "Dermatologia",
    imageSrc: "/experts/expert-3.jpg",
  },
];

export default function Experts() {
  return (
    <section id="especialistas" className="bg-[#F6F2EE] py-28">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          data-aos="fade-right"
          className="mb-16 text-xl font-medium tracking-[0.35em]"
          style={{ color: "#AE836D" }}
        >
          NOSSOS ESPECIALISTAS
        </h2>

        {/* Mobile: carousel */}
        <div className="md:hidden">
          <div className="-mx-6 flex gap-6 overflow-x-auto px-6 pb-2 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden snap-x snap-mandatory">
            {EXPERTS.map((expert) => (
              <article
                key={expert.imageSrc}
                className="min-w-[82%] snap-center"
              >
                <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-neutral-200">
                  <Image
                    src={expert.imageSrc}
                    alt={`${expert.name} - ${expert.role}`}
                    fill
                    sizes="90vw"
                    className="object-cover"
                    priority={false}
                  />
                </div>

                <div className="mt-4">
                  <div className="text-[13px] font-semibold tracking-[0.08em] text-neutral-900">
                    {expert.name}
                  </div>
                  <div className="mt-1 text-[12px] tracking-[0.06em] text-neutral-700">
                    {expert.role}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Desktop: 3 columns */}
        <div data-aos="fade-up" className="hidden gap-14 md:grid md:grid-cols-3">
          {EXPERTS.map((expert) => (
            <article key={expert.imageSrc}>
              <div className="relative aspect-square w-full overflow-hidden rounded-[10px] bg-neutral-200">
                <Image
                  src={expert.imageSrc}
                  alt={`${expert.name} - ${expert.role}`}
                  fill
                  sizes="(min-width: 768px) 360px, 100vw"
                  className="object-cover"
                  priority={false}
                />
              </div>

              <div className="mt-5">
                <div className="text-[13px] font-semibold tracking-[0.08em] text-neutral-900">
                  {expert.name}
                </div>
                <div className="mt-1 text-[12px] tracking-[0.06em] text-neutral-700">
                  {expert.role}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
