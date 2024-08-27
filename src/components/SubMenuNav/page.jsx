import Link from "next/link";

export default function SubMenuNav() {
  return (
    <ul className="flex gap-3 sm:gap-5 lg:gap-10 justify-center items-center h-full text-[#000b7a] text-sm sm:text-base">
      <li className="">
        <a href="/">Home</a>
      </li>

      <li>
        <Link href="/courses">Cursos</Link>
      </li>

      <li>
        <Link
          aria-label="acerca de nosotros"
          href="https://fyrloiscom.vercel.app/es/aboutUs"
        >
          Conócenos
        </Link>
      </li>

      <li>
        <Link href="https://fyrloiscom.vercel.app/es/contactUs">Contacto</Link>
      </li>

      <li>
        <a target="_blank" href="https://fyrloiscom.vercel.app/es/test">
          Test
        </a>
      </li>
    </ul>
  );
}
