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
          <h2 className="title text-[var(--blue-base)]">Quem somos?</h2>
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
          <iframe
            className="h-92 border-base w-full"
            src="https://www.youtube.com/embed/RqNLfqB8HOQ"
            title="Abrigo João Rosa no Lar Doce Lar"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </section>

      <section className="general-section bg-[var(--yellow-base)] page-side-padding">
        <h2 className="title text-[var(--green-base)] ">Nosso objetivo</h2>
        <p className="paragraph text-[var(--white-base)]">
          Trabalhamos para garantir qualidade de vida aos{" "}
          <span className="accent-font text-[var(--green-base)] ">
            animais resgatados
          </span>{" "}
          das ruas ou abandonados na porta do abrigo. Por segurança, não
          divulgamos o endereço. Muitos chegam em condições delicadas, com
          doenças ou ferimentos; outros foram deixados por serem idosos ou por
          terem deixado de serem interessantes a seus donos. A todos oferecemos
          alimentação diária, cuidados veterinários e, acima de tudo, carinho e
          atenção.
        </p>
        <br />

        <p className="paragraph text-[var(--white-base)]">
          Nosso{" "}
          <span className="accent-font text-[var(--green-base)] ">
            compromisso
          </span>{" "}
          vai além do resgate: buscamos proporcionar a cada animal uma nova
          chance de ser amado e de viver com dignidade. Por isso, investimos em
          reabilitação, socialização e campanhas de adoção responsável,
          acreditando que cada um deles merece encontrar um lar seguro e cheio
          de{" "}
          <span className="accent-font text-[var(--green-base)] ">afeto</span>.
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
