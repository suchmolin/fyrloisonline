import Image from "next/image";
import "./page.css";
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
        <div className="h-[650px] w-full bg-[#000b7a] flex justify-center items-center">
          <div className="w-6/12 pr-20">
            <h3 className="text-5xl text-[#90d400] font-bold pb-5">
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
            <div className="flex h-[70px] items-center mt-5">
              <button className=" py-4 px-7 bg-[#90d400] hover:bg-transparent hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#90d400] hover:border-[#fff] transition-all duration-200 font-bold z-20">
                ACERCA DE NOSOTROS
              </button>
            </div>
          </div>
          <div className="">
            <div className="overflow-hidden rounded-xl w-fit">
              <Image
                src="/img/missworld.jpeg"
                alt="Alejandra Conde - Miss World"
                width={430}
                height={450}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
