import { DonatingPlanCard } from "@/components/Cards";
import { useTranslations } from "next-intl";
export default function ComoAjudar() {
  const hero = useTranslations("ComoAjudarPage.Hero");
  const sejaUmPadrinho = useTranslations("ComoAjudarPage.SejaUmPadrinho");

  return (
    <main>
      <section className="relative hero max-w-full bg-[var(--blue-base)] page-side-padding">
        <h1 className="hero-title text-[var(--white-base)]">{hero("Title")}</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          {hero("Subtitle")}
        </p>
      </section>

      <section className="general-section page-side-padding">
        <h2 className="text-[var(--yellow-base)] title">
          {sejaUmPadrinho("Title")}
        </h2>
        <p className="text-[var(--green-base)] subtitle">
          {sejaUmPadrinho("Subtitle")}
        </p>

        <div></div>
      </section>
    </main>
  );
}
