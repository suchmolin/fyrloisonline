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
        <Link aria-label="acerca de nosotros" href="/about-us">
          Conócenos
        </Link>
      </li>

      <li>
        <Link href="/contact-us">Contacto</Link>
      </li>

      <li>
        <a
          target="_blank"
          href="https://docs.google.com/forms/d/e/1FAIpQLSdiiOaso_9idAARO2Zd8tL8K9qGM3DSyTvZD8bW13GR0VjnZg/viewform"
        >
          Test
        </a>
      </li>
    </ul>
  );
}
