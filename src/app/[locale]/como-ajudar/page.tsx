import { DonatingPlanCard } from "@/components/Cards";
import { useTranslations } from "next-intl";
import Image from "next/image";
export default function ComoAjudar() {
  const hero = useTranslations("ComoAjudarPage.Hero");
  const sejaUmPadrinho = useTranslations("ComoAjudarPage.SejaUmPadrinho");
  const planosDoacao = useTranslations("ComoAjudarPage").raw(
    "PlanosDoacao"
  ) as {
    price: string;
    enrollmentPeriod: string;
    href: string;
  }[];

  return (
    <main>
      <section className="hero bg-[var(--blue-base)] page-side-padding">
        <h1 className="hero-title text-[var(--white-base)]">{hero("Title")}</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          {hero("Subtitle")}
        </p>
      </section>

      <section className="general-section page-side-padding">
        <h2 className="text-[var(--yellow-base)] title">
          {sejaUmPadrinho("Title")}
        </h2>
        <p className="text-[var(--green-base)] subtitle pb-10 ">
          {sejaUmPadrinho("Subtitle")}
        </p>

        <ul className="flex flex-wrap justify-evenly items-center gap-8">
          {planosDoacao.map((campanha, index) => (
            <DonatingPlanCard key={index} {...campanha} />
          ))}
        </ul>
      </section>

      <section className="general-section page-side-padding  bg-[var(--green-base)]">
        <h2 className="text-[var(--yellow-base)] title">Seja um voluntário</h2>
        <p className="text-[var(--white-base)] paragraph">
          Estamos em busca de{" "}
          <span className="accent-font text-[var(--yellow-base)]">
            voluntários
          </span>{" "}
          que queiram transformar vidas — e acredite, a sua também será
          profundamente tocada nessa jornada de afeto, empatia e esperança. Ser{" "}
          <span className="accent-font text-[var(--yellow-base)]">
            voluntário
          </span>{" "}
          é doar um pouco do seu tempo e do seu coração para fazer a diferença
          no dia a dia dos nossos animais, oferecendo cuidado, atenção e muito
          amor.
          <br />
          <br />
          Quer fazer parte dessa corrente do bem? Mande um{" "}
          <span className="accent-font text-[var(--yellow-base)]">zap</span> pro
          número
          <a
            className="accent-font text-[var(--yellow-base)] underline"
            href="https://wa.me/5521989525337"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            (21) 98952-5337
          </a>{" "}
          e venha ser um elo de amor na vida dos filhos de João. ❤️
          <br />
          <br />
          Juntos, podemos ir ainda mais longe. Cada gesto, cada ajuda e cada
          compartilhamento fortalecem nossa missão. Espalhe essa causa e ajude a
          semear esperança por onde for! 🌻🐾
        </p>
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
            uma{" "}
            <span className="accent-font text-[var(--blue-base)]">família</span>{" "}
            cede o espaço e o abrigo arca com todas as despesas, incluindo a
            alimentação. Com apenas{" "}
            <span className="accent-font text-[var(--blue-base)]">R$ 1,00</span>{" "}
            você já faz a diferença.
          </p>
        </div>

        <div className="content-wrapper">
          <a
            href="https://apoia.se/abrigojoaorosa"
            target="_blank"
            rel="noreferrer"
          >
            <Image
              src="/images/logo_apoiase.png"
              alt="Link de doação no Apoia.se"
              width={400}
              height={400}
              unoptimized
              className="border-base shadow-2xl hover:-translate-y-3 hover:scale-102 transition-transform duration-500 ease-in-out"
            />
          </a>

          <p className="max-w-96 text-center pt-5">
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

      <section className="side-to-side-section page-side-padding  text-[var(--blue-base)]">
        <div className="text-wrapper">
          <h2 className="title">Doe diretamente</h2>
          <p className="subtitle">
            As doações para o{" "}
            <span className="accent-font text-[var(--yellow-base)] ">
              abrigo
            </span>{" "}
            podem ser feitas diretamente por conta bancária ou através da nossa
            chave Pix. Toda contribuição ajuda a garantir cuidados, alimentação
            e um lar temporário para os nossos{" "}
            <span className="accent-font text-[var(--yellow-base)] ">
              aumigos
            </span>{" "}
            resgatados. 💛🐾
          </p>
        </div>

        <div className="content-wrapper">
          <div>
            <p className="accent-font text-[var(--yellow-base)] ">Bradesco</p>
            <p>Ag: 0958</p>
            <p>C/c: 0010416-7</p>
            <p>pix: abrigo@abrigojoaorosa.org</p>
          </div>
          <br />
          <div>
            <p className="accent-font text-[var(--yellow-base)] ">Itaú</p>
            <p>Ag: 9166</p>
            <p>C/c: 33930-0</p>
            <p>pix: 20.444.260/0001-63</p>
          </div>
        </div>
      </section>
    </main>
  );
}
