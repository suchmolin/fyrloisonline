import Link from "next/link";

export default function FooterMenu() {
  return (
    <div className="w-12/12 md:w-8/12 pb-5 md:pb-0">
      <h4 className="text-[#000b7a] text-base md:text-xl py-3">MENU WEBS</h4>
      <div className="text-gray-500 flex gap-7 md:gap-20 text-sm md:text-lg">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link
              aria-label="acerca de nosotros"
              href="https://fyrloiscom.vercel.app/es/aboutUs"
            >
              Conócenos
            </Link>
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="/courses">Cursos</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          {/*<li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="/events">Eventos</Link>
          </li>*/}
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="/teacher">Teachers</Link>
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="https://fyrloiscom.vercel.app/es/blog">Blog</Link>
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="https://fyrloiscom.vercel.app/es/contactUs">
              Contacto
            </Link>
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            <Link href="https://fyrloiscom.vercel.app/es/privacy-policies">
              Políticas de{" "}
            </Link>
            privacidad
          </li>
        </ul>
      </div>
    </div>
  );
}
