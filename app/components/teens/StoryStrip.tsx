import Image from "next/image";

const STORIES = [
  {
    src: "/images/story-1.jpg",
    tag: "Próximamente",
    alt: "Historia de Instagram: Porque la ilusión empieza mucho antes de la fecha. Masfarré Teens: la experiencia.",
  },
  {
    src: "/images/story-2.jpg",
    tag: "23/10",
    alt: "Historia de Instagram: Los mejores recuerdos siempre empiezan compartiéndolos. Nos vemos el 23 de octubre.",
  },
  {
    src: "/images/story-3.jpg",
    tag: "La experiencia",
    alt: "Historia de Instagram: La experiencia empieza mucho antes de los 15. Por eso diseñamos un evento para vos.",
  },
  {
    src: "/images/story-4.jpg",
    tag: "Invitalas",
    alt: "Historia de Instagram: Seguro tenés una amiga que ya tiene toda su fiesta pensada.",
  },
  {
    src: "/images/story-5.jpg",
    tag: "La experiencia",
    alt: "Historia de Instagram: Es que sea una noche completamente tuya, hecha a tu medida. Agendá la fecha.",
  },
  {
    src: "/images/story-6.jpg",
    tag: "La experiencia",
    alt: "Historia de Instagram: Es bailar sin mirar la hora.",
  },
];

export function StoryStrip() {
  return (
    <section className="py-[clamp(56px,9vw,104px)]">
      <div className="max-w-[1180px] mx-auto px-5 sm:px-8">
        <div className="max-w-[62ch] mb-[clamp(32px,5vw,52px)]">
          <div className="text-xs font-bold uppercase tracking-[0.14em] text-ink-faint mb-[14px]">
            Así se está armando
          </div>
          <h2 className="font-heading font-medium text-[clamp(27px,3.6vw,42px)] leading-[1.12]">
            Esto ya se viene contando en redes.
          </h2>
        </div>

        <div className="story-strip">
          {STORIES.map((story) => (
            <div className="story-card" key={story.src}>
              <span className="story-tag">{story.tag}</span>
              <Image src={story.src} alt={story.alt} fill sizes="172px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
