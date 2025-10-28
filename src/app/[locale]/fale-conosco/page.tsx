import Image from "next/image";

export default function ComoAjudar() {
  return (
    <main>
      <section className="hero page-side-padding bg-[var(--green-base)] ">
        <h1 className="hero-title text-[var(--white-base)]">Fale conosco</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          Au! Au! Entra em contato com a gente!
        </p>
      </section>

      <section className="side-to-side-section page-side-padding">
        <div className="text-wrapper text-[var(--blue-base)]">
          <h2 className="title text-[var(--blue-base)]">
            Perguntas, histórias e ideias?
          </h2>
          <p className="paragraph">
            Chama a gente nos{" "}
            <span className="accent-font text-[var(--green-base)]">
              e-mails
            </span>{" "}
            abaixo ou através de nossas{" "}
            <span className="accent-font text-[var(--green-base)]">
              redes sociais
            </span>{" "}
            no rodape da página!
          </p>

          <ul className="pt-4 space-y-2">
            <li>
              <a
                className="accent-font"
                href="mailto:abrigo@abrigojoaorosa.org"
              >
                Principal:{" "}
              </a>
              <span className="text-[var(--green-base)] underline">
                abrigo@abrigojoaorosa.org
              </span>
            </li>
            <li>
              <a
                className="accent-font"
                href="mailto:adocao@abrigojoaorosa.org"
              >
                Adoção:{" "}
              </a>
              <span className="text-[var(--green-base)] underline">
                adocao@abrigojoaorosa.org
              </span>
            </li>
            <li>
              <a
                className="accent-font"
                href="mailto:apadrinhamento@abrigojoaorosa.org"
              >
                Apadrinhamento:{" "}
              </a>
              <span className="text-[var(--green-base)] underline">
                apadrinhamento@abrigojoaorosa.org
              </span>
            </li>
            <li>
              <a className="accent-font" href="mailto:racao@abrigojoaorosa.org">
                Campanha da ração:{" "}
              </a>
              <span className="text-[var(--green-base)] underline">
                racao@abrigojoaorosa.org
              </span>
            </li>
            <li>
              <a
                className="accent-font"
                href="mailto:ouvidoria@abrigojoaorosa.org"
              >
                Ouvidoria:{" "}
              </a>
              <span className="text-[var(--green-base)] underline">
                ouvidoria@abrigojoaorosa.org
              </span>
            </li>
          </ul>
        </div>

        <div className="content-wrapper">
          <Image
            src="/images/dog_tel.jpg"
            alt="Link de doação no Apoia.se"
            width={400}
            height={400}
            unoptimized
            className="border-base shadow-2xl"
          />
        </div>
      </section>
    </main>
  );
}
