import Image from "next/image";
import "./page.css";
import Link from "next/link";
export default function SeccionMiss() {
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
        <div className="min-h-[650px] w-full bg-[#000b7a] flex  flex-col lg:flex-row justify-center items-center py-10 lg:py-0 text-center lg:text-start">
          <div className="w-11/12 md:w-10/12 lg:w-6/12 px-0 md:px-10 lg:pr-20 flex flex-col items-center lg:items-start">
            <h3 className="text-3xl md:text-5xl text-[#90d400] font-bold pb-5">
              Fyr Lois fue una pieza clave en mi formación como Miss World.
            </h3>
            <p className="text-white text-lg py-4">
              Durante mi camino al Miss Mundo mi mayor miedo era que no sabía
              hablar inglés tan fluido, por eso comencé con Fyr Lois y en pocos
              meses pude fortalecer mis conocimientos y adquirir mayor confianza
              en el idioma. Estoy feliz porque avance mucho y logré mi reto, de
              presentarme en cada momento en inglés.
            </p>
            <p className="text-white text-xl py-4">
              Alejandra Conde - Miss Venezuela World 2020
            </p>
            <div className="flex h-[70px] items-center justify-center lg:justify-start mt-5 pb-10 lg:pb-0">
              <Link
                href="https://fyrloiscom.vercel.app/es/aboutUs"
                aria-label="Acerca de nosotros"
                className=" py-4 px-7 bg-[#90d400] hover:bg-transparent hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#90d400] hover:border-[#fff] transition-all duration-200 font-bold z-20"
              >
                ACERCA DE NOSOTROS
              </Link>
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden rounded-xl">
              <Image
                src="/img/missworld.jpeg"
                alt="Alejandra Conde - Miss World"
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
