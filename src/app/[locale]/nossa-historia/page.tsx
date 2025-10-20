import { CardList } from "@/components/Cards";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function NossaHistoria() {
  const hero = useTranslations("NossaHistoriaPage.Hero");
  const campanhas = useTranslations("NossaHistoriaPage").raw(
    "ListCampanhas"
  ) as {
    description: string;
  }[];

  return (
    <main>
      <section className="hero page-side-padding bg-[var(--green-base)] ">
        <h1 className="hero-title text-[var(--white-base)]">{hero("Title")}</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          {hero("Subtitle")}
        </p>
      </section>

      <section className="side-to-side-section page-side-padding">
        <div className="text-wrapper text-[var(--green-base)]">
          <h2 className="title text-[var(--blue-base)] ">Quem somos?</h2>
          <p className="subtitle">
            Somos um grupo de{" "}
            <span className="accent-font text-[var(--blue-base)]">
              voluntários
            </span>{" "}
            composto por pessoas de diferentes formações profissionais, cujo
            principal objetivo é a proteção de cães abandonados. Nosso foco de
            atuação está ligado diretamente ao{" "}
            <span className="accent-font text-[var(--blue-base)] ">
              Abrigo João Rosa
            </span>
            , abrigo este com mais de 200 cães abandonados localizado na zona
            norte da cidade do{" "}
            <span className="accent-font text-[var(--blue-base)] ">
              Rio de Janeiro
            </span>
            .
          </p>
        </div>

        <div className="content-wrapper">
          <Image
            src="/images/image-test.jpg"
            alt="Cao"
            width={400}
            height={400}
            unoptimized
            className="border-base shadow-2xl hover:-translate-y-3 hover:scale-102 transition-transform duration-500 ease-in-out"
          />
        </div>
      </section>

      <section className="general-section bg-[var(--yellow-base)] page-side-padding">
        <h2 className="title text-[var(--green-base)] ">Nosso objetivo</h2>
        <p className="subtitle text-[var(--white-base)] text-left font-normal ">
          Trabalhamos visando manter a qualidade de vida destes animais que
          foram resgatados das ruas ou abandonados amarrados na própria porta do
          abrigo, motivo pelo qual, infelizmente, não podemos divulgar o
          endereço. Muitos destes animais chegam em situação de extrema
          fragilidade, com diferentes doenças e ferimentos. Outros foram
          descartados por serem idosos ou simplesmente por não serem mais
          interessantes para seus donos. A todos estes, procuramos garantir
          alimentação diária e cuidados médicos, além, é claro, de carinho e
          atenção.
        </p>
      </section>

      <section className="side-to-side-section page-side-padding">
        <div className="text-wrapper">
          <h2 className="title text-[var(--blue-base)] ">Nossas campanhas</h2>
          <p className="subtitle text-[var(--blue-base)] ">
            Para sobrevivência do{" "}
            <span className="accent-font text-[var(--yellow-base)]">
              abrigo
            </span>
            , além da atuação incansável dos voluntários, limpando diariamente
            os canis, alimentando, dando banho, lar temporário e levando ao
            veterinário, dependemos de{" "}
            <span className="accent-font text-[var(--yellow-base)]">
              doações
            </span>{" "}
            para mantermos as condições do abrigo. Para isto, contamos com
            pessoas solidárias à causa que nos ajudam em{" "}
            <span className="accent-font text-[var(--yellow-base)]">
              campanhas
            </span>{" "}
            , como:
          </p>
        </div>

        <ul className="grid grid-cols-2 md:grid-cols-1  gap-4 max-h-lg">
          {campanhas.map((campanha, index) => (
            <CardList key={index} {...campanha} />
          ))}
        </ul>
      </section>
    </main>
  );
}
