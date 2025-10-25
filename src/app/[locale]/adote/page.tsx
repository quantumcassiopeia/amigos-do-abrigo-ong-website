import Button from "@/components/Button";

export default function Adote() {
  return (
    <main>
      <section className="hero bg-[var(--yellow-base)] page-side-padding">
        <h1 className="hero-title text-[var(--white-base)]">Adote</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          Toda história merece um final feliz.
        </p>
      </section>

      <section className="general-section page-side-padding text-[var(--blue-darker)] ">
        <h2 className="title text-[var(--green-base)] ">Visite nosso abrigo</h2>
        <p className="paragraph">
          Periodicamente, realizamos visitas ao nosso abrigo para que você possa
          conhecer os{" "}
          <span className="accent-font text-[var(--green-base)]">aumigos</span>{" "}
          que precisam de amor. Visite nossa página no{" "}
          <a
            className="accent-font text-[var(--green-base)] underline"
            href="https://www.instagram.com/abrigojoaorosa/"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Instagram
          </a>{" "}
          para ficar por dentro das datas de visitação ou agende uma visita
          atráves do email{" "}
          <a
            className="accent-font text-[var(--green-base)] underline"
            href="mailto:visitas@abrigojoaorosa.org
"
          >
            visitas@abrigojoaorosa.org
          </a>
          .
        </p>
        <br />
        <p className="paragraph">
          Cada visita é uma oportunidade de criar{" "}
          <span className="accent-font text-[var(--green-base)]">conexões</span>{" "}
          sinceras e descobrir histórias de superação. Ao conhecer nossos{" "}
          <span className="accent-font text-[var(--green-base)]">
            peludinhos
          </span>{" "}
          de perto, você entende que o amor que eles têm para oferecer é
          infinito — basta uma chance para começar uma nova{" "}
          <span className="accent-font text-[var(--green-base)]">amizade</span>.
          💛
        </p>
      </section>

      <section className="general-section page-side-padding bg-[var(--green-base)] ">
        <h2 className="title text-[var(--white-base)] ">
          Entrevista de adoção
        </h2>
        <p className="subtitle text-[var(--white-base)] ">
          A qualquer momento, você pode se candidatar à adoção de um{" "}
          <span className="accent-font text-[var(--yellow-base)]">
            cãozinho
          </span>
          ! Para isso, basta clicar no{" "}
          <span className="accent-font text-[var(--yellow-base)]">
            botão abaixo
          </span>{" "}
          e preencher nosso forumário de pré-entrevista!
        </p>
        <Button
          as="a"
          href="https://docs.google.com/forms/d/e/1FAIpQLSck5uBW7VqMfk7zADEKt9Y1z3IUQrRycWMbngb0sea8YTFZLg/viewform"
          className="bg-[var(--yellow-base)] text-[var(--white-base)] mx-auto mt-8"
        >
          Candidatar-se
        </Button>
      </section>
    </main>
  );
}
