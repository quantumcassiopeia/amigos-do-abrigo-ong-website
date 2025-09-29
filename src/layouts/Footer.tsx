import Image from "next/image";
import { Link } from "@/i18n/navigation";
import Navbar from "@/components/Navbar";

export default function Footer() {
  return (
    <footer className="bg-[var(--blue-base)] accent-font text-[var(--white-base)] font">
      <div className="flex flex-col space-y-6 md:flex-row justify-between max-w-7xl mx-auto">
        <div>
          <Link
            href="/"
            className="relative w-16 h-16 border-base overflow-clip"
          >
            <Image
              src="/images/logo.png"
              alt="Logo e homepage deAmigos do Abrigo João Rosa"
              fill
              className="object-cover"
            />
          </Link>
          <Navbar
            lineColor="var(--yellow-base)"
            hoverColor="var(--yellow-base)"
          />
        </div>
        <div>
          <h3>redes sociais</h3>
        </div>
        <div className="max-w-[15rem] space-y-2 text-center">
          <p>Au! Au! Manda pix, pufavô!</p>
          <div className="h-[15rem] w-[15rem] bg-white" />
          <p>XX. XXX. XXX/0001-XX</p>
          <p>Antes de doar, sempre dê uma olhadinha na nossa chave, ok?</p>
        </div>
      </div>
    </footer>
  );
}
