import Image from "next/image";
import "./page.css";
import Link from "next/link";

export default function LlevaTuProyecto() {
  return (
    <div className="w-full">
      <div className="area1">
        <ul className="circles1">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <div className="min-h-[550px] w-full bg-[#000b7a] flex flex-col lg:flex-row justify-center items-center py-10 lg:py-0">
          <div className="w-11/12 sm:w-10/12 lg:w-6/12 pr-0 lg:pr-20 text-center lg: lg:text-left">
            <h3 className="text-5xl text-[#90d400] font-bold pb-5">
              Lleva tu proyecto de vida a un nuevo nivel
            </h3>
            <p className="text-white text-lg py-4">
              Comunícate en inglés de forma fluida, sin inseguridades, y alcanza
              las oportunidades que sueñas.
            </p>

            <div className="flex h-[70px] items-center justify-center lg:justify-start mt-5">
              <Link
                href="/courses"
                aria-label="Acerca de nosotros"
                className=" py-4 px-7 bg-[#90d400] hover:bg-transparent hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#90d400] hover:border-[#fff] transition-all duration-200 font-bold z-20"
              >
                Comenzar
              </Link>
            </div>
          </div>
          <div className="mt-10 lg:mt-0">
            <div className="overflow-hidden rounded-xl w-fit">
              <Image
                src="/img/llevaTuProyecto.jpg"
                alt="Lleva tu proyecto de vida a un nuevo nivel"
                width={430}
                height={314}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
