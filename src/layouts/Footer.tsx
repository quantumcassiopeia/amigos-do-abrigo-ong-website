import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-base)] text-[var(--white-base)] accent-font page-side-padding mt-auto">
      <div className="flex flex-col space-y-6 pt-10 md:flex-row justify-between max-w-7xl mx-auto">
        <div>
          <Link href="/">
            <Image
              src="/images/logo.png"
              alt="Logo e homepage deAmigos do Abrigo João Rosa"
              height={64}
              width={64}
              unoptimized
            />
          </Link>
          <Navbar className="w-fit" lineColor="var(--yellow-base)" />
        </div>
        <div>
          <h3>redes sociais</h3>
        </div>
        <div className="max-w-[15rem] space-y-2 text-center">
          <p>Au! Au! Manda pix, pufavô!</p>
          <div className="h-[15rem] w-[15rem] bg-white" />
          <p>20.444.260/0001-63</p>
          <p>{"(Pix Itaú)"}</p>
          <p>
            Ao confirmar o pagamento, sempre dê uma olhadinha na nossa chave,
            ok?
          </p>
        </div>
      </div>
    </footer>
  );
}
