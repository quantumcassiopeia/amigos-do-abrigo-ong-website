import { useTranslations } from "next-intl";
import Image from "next/image";
import { CardList, DefaultCard } from "@/components/Cards";
import SocialMediaLinks from "@/components/SocialMediaLinks";
import AutoCarousel from "@/components/AutoCarousel";

export default function Home() {
  const hero = useTranslations("Homepage.Hero");
  const nossoTrabalho = useTranslations("Homepage.NossoTrabalho");
  const conecteConosco = useTranslations("Homepage.ConecteConosco");
  const resgate = useTranslations("Homepage.NossoTrabalho").raw(
    "ListResgate"
  ) as {
    description: string;
  }[];
  const featuresLinks = useTranslations("Homepage").raw("FeaturesLinks") as {
    title: string;
    description: string;
    button: string;
    action: string;
  }[];

  return (
    <main>
      <section className="relative hero  bg-black page-side-padding">
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

      <section className="flex flex-col md:flex-row justify-center bg-[var(--blue-base)]">
        <ul className="flex flex-wrap justify-center gap-3 -translate-y-28">
          {featuresLinks.map((feature, index) => (
            <DefaultCard key={index} {...feature} />
          ))}
        </ul>
      </section>

      <section className="general-section page-side-padding">
        <h2 className="text-[var(--yellow-base)] title">
          {nossoTrabalho("Title")}
        </h2>
        <p className="text-[var(--green-base)] subtitle">
          {nossoTrabalho("Subtitle")}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 py-10 max-w-7xl">
          <AutoCarousel />
          <ul className="flex flex-wrap justify-center gap-3 ">
            {resgate.map((resgate, index) => (
              <CardList key={index} {...resgate} />
            ))}
          </ul>
        </div>
      </section>

      <section className="general-section bg-[var(--green-base)] page-side-padding">
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
