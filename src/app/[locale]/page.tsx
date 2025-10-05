import { useTranslations } from "next-intl";

export default function Home() {
  const hero = useTranslations("Homepage.Hero");

  return (
    <main>
      <section className="relative hero max-w-full bg-black page-side-padding">
        <h1 className="hero-title text-[var(--white-base)] ">
          {hero("Title")}
        </h1>
        <h2 className="hero-subtitle text-[var(--white-base)]">
          {hero("Subtitle")}
        </h2>
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
    </main>
  );
}
