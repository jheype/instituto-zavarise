export default function Location() {
  const placeQuery = encodeURIComponent(
    "Instituo Zavarise"
  );

  return (
    <section
      id="localizacao"
      className="relative overflow-hidden bg-[#A88F7C]"
    >
      {/* recorte diagonal superior */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-32 bg-[#F6F2EE] [clip-path:polygon(0_0,100%_0,100%_0,0_100%)]"
      />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28">
        <h2 data-aos="fade-right" className="mb-12 text-center text-[22px] font-medium tracking-[0.35em] text-white">
          LOCALIZAÇÃO
        </h2>

        <div className="overflow-hidden rounded-[6px] bg-neutral-200 shadow-[0_18px_45px_-30px_rgba(0,0,0,0.5)]">
          <div className="relative h-[420px] w-full">
            <iframe
              title="Mapa - Instituto Zavarise"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full border-0"
              src={`https://www.google.com/maps?q=${placeQuery}&output=embed`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
