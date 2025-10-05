import { DonatingPlanCard } from "@/components/Cards";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
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

      <section className="side-to-side-section page-side-padding bg-[var(--yellow-base)] text-[var(--white-base)]">
        <div className="text-wrapper">
          <h2 className=" title">
            De doação em doação, você enche vários{" "}
            <span className="accent-font text-[var(--blue-base)]">
              potinhos
            </span>{" "}
            de ração!
          </h2>
          <p className="subtitle">
            Nossa estrutura é composta por 34 canis, 1 internação e 1 área de
            isolamento. Cerca de 50 cães residem em lares temporários, nos quais
            uma família cede o espaço e o abrigo arca com todas as despesas,
            incluindo a alimentação.
          </p>
        </div>

        <div className="content-wrapper flex flex-col">
          <a
            href="https://apoia.se/abrigojoaorosa"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/logo_apoiase.png"
              alt="Cao"
              width={400}
              height={400}
              className="border-base shadow-2xl  hover:-translate-y-3 hover:scale-102 transition-transform duration-500 ease-in-out"
            />
          </a>

          <p className="max-w-96 text-center pt-5 ">
            Clique na imagem acima e participe da nossa campanha no{" "}
            <a
              href="https://apoia.se/abrigojoaorosa"
              className="accent-font text-[var(--blue-base)] "
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              Apoia.se{" "}
            </a>
          </p>
        </div>
      </section>
    </main>
  );
}
