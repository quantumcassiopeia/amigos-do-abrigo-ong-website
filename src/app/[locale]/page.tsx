import { useTranslations } from "next-intl";

export default function Home() {
  const hero = useTranslations("Homepage.Hero");
  const nossoTrabalho = useTranslations("Homepage.NossoTrabalho");
  const conecteConosco = useTranslations("Homepage.ConecteConosco");

  return (
    <main>
      <section className="relative hero max-w-full bg-black page-side-padding">
        <h1 className="hero-title text-[var(--white-base)] ">
          {hero("Title")}
        </h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          {hero("Subtitle")}
        </p>
        <video
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
          src="/videos/dogs_playing.webm"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden
          role="presentation"
        />
      </section>

      <section className="general-section page-side-padding">
        <h2 className="text-[var(--yellow-base)] title">
          {nossoTrabalho("Title")}
        </h2>
        <p className="text-[var(--green-base)] subtitle">
          {nossoTrabalho("Subtitle")}
        </p>
      </section>

      <section className="general-section bg-[var(--green-base)]">
        <h2 className="text-[var(--yellow-base)] title">
          {conecteConosco("Title")}
        </h2>
        <p className="text-[var(--white-base)] subtitle">
          {conecteConosco("Subtitle")}
        </p>
      </section>
    </main>
  );
}
