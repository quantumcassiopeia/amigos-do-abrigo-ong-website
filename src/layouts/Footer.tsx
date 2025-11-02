import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";
import SocialMediaLinks from "@/components/SocialMediaLinks";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-base)] text-[var(--white-base)] accent-font page-side-padding mt-auto">
      <div className="flex flex-col space-y-6 pt-10 md:flex-row justify-between max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo e homepage de Amigos do Abrigo João Rosa"
              height={64}
              width={64}
              unoptimized
            />
          </Link>
          <Navbar className="w-fit" lineColor="var(--yellow-base)" />
        </div>
        <div>
          <h3>Redes sociais</h3>
          <SocialMediaLinks position="block" />
        </div>
        <div className="max-w-[15rem] space-y-2 text-center pt-16 mx-auto md:mx-0 md:pt-0 ">
          <p>Au! Au! Manda pix, pufavô!</p>
          <div className="aspect-square w-[15rem]">
            <Image
              src="/images/image-test.webp"
              alt="Chave pix Itaú"
              width={600}
              height={600}
              unoptimized
              className="border-base"
            />
          </div>
          <p>20.444.260/0001-63</p>
          <p>{"(Pix Itaú)"}</p>
          <p>
            Ao enviar um pagamento, sempre dê uma olhadinha no nome da nossa
            chave pix, ok?
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-14 pb-4 ">
        <div className="w-full h-1 bg-[var(--yellow-base)] rounded-full" />
        <div className="flex flex-col md:flex-row justify-between items-center text-center gap-y-1 pt-1 text-base opacity-80">
          <p>
            Desenvolvido por{" "}
            <a
              href="https://qcsolutions.tech/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-[var(--yellow-lighter)] transition-colors duration-700 ease-out"
            >
              Robert Souza
            </a>
          </p>
          <p>@ {new Date().getFullYear()} Amigos do Abrigo João Rosa.</p>
          <p>Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
