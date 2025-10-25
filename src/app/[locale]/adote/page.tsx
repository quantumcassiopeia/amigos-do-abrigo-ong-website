export default function Adote() {
  return (
    <main>
      <section className="hero bg-[var(--yellow-base)] page-side-padding">
        <h1 className="hero-title text-[var(--white-base)]">Adote</h1>
        <p className="hero-subtitle text-[var(--white-base)]">
          Toda história merece um final feliz.
        </p>
      </section>

      <section className="general-section page-side-padding ">
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
      </section>
    </main>
  );
}
