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

          <ul className="pt-4 space-y-2 text-left">
            <li>
              <span className="accent-font">Principal: </span>
              <a
                className="text-[var(--green-base)] underline"
                href="mailto:abrigo@abrigojoaorosa.org"
              >
                abrigo@abrigojoaorosa.org
              </a>
            </li>
            <li>
              <span className="accent-font">Adoção: </span>
              <a
                className="text-[var(--green-base)] underline"
                href="mailto:adocao@abrigojoaorosa.org"
              >
                adocao@abrigojoaorosa.org
              </a>
            </li>
            <li>
              <span className="accent-font">Apadrinhamento: </span>
              <a
                className="text-[var(--green-base)] underline"
                href="mailto:apadrinhamento@abrigojoaorosa.org"
              >
                apadrinhamento@abrigojoaorosa.org
              </a>
            </li>
            <li>
              <span className="accent-font">Campanha da ração: </span>
              <a
                className="text-[var(--green-base)] underline"
                href="mailto:racao@abrigojoaorosa.org"
              >
                racao@abrigojoaorosa.org
              </a>
            </li>
            <li>
              <span className="accent-font">Ouvidoria: </span>
              <a
                className="text-[var(--green-base)] underline"
                href="mailto:ouvidoria@abrigojoaorosa.org"
              >
                ouvidoria@abrigojoaorosa.org
              </a>
            </li>
          </ul>
        </div>

        <div className="content-wrapper">
          <Image
            src="/images/dog_tel.webp"
            alt="Link de doação no Apoia.se"
            width={400}
            height={400}
            unoptimized
            className="border-base shadow-2xl mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
