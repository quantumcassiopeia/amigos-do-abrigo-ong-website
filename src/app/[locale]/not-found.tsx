import Button from "@/components/Button";
import Image from "next/image";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center  accent-font">
      <div className="w-full h-16 md:h-20 bg-[var(--green-base)] " />
      <section className="flex flex-col items-center justify-center page-side-padding py-20 text-[var(--green-base)] text-center">
        <h1 className="text-[var(--yellow-base)] text-4xl">Ops!!! Error 404</h1>
        <Image
          src="/images/error404.jpg"
          alt="Error 404"
          width={500}
          height={500}
          unoptimized
          className="py-4"
        />
        <p>Algum doguinho roeu o fio que liga a internet.</p>
        <p className="py-4">
          Clique no{" "}
          <span className="text-[var(--yellow-base)]">botão abaixo</span> para
          tentar voltar à página inicial ou verifique mais tarde!
        </p>
        <Button
          className="bg-[var(--yellow-base)] text-[var(--white-base)] mx-auto mt-8"
          href="/"
          as="a"
        >
          Voltar para a página inicial
        </Button>
      </section>
    </main>
  );
}
