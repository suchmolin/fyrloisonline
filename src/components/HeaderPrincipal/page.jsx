"use client";
import Image from "next/image";
import "./page.css";
import { Fade } from "react-awesome-reveal";
export default function HeaderPrincipal() {
  return (
    <section className="topDivider relative pb-20">
      <div className="area">
        <ul className="circles">
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

        <div className=" min-h-[600px] flex flex-col md:flex-row gap-20 justify-center items-center bg-white px-7">
          <Fade triggerOnce className="w-11/12 md:w-6/12 pt-10 md:pt-0">
            <div className="text-center md:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#000b7a] leading-tight ">
                <span className=" text-[#90d400]">Habla inglés</span> como
                siempre has querido
              </h1>
              <h2 className="text-lg text-gray-500 py-10">
                Diviértete aprendiendo el idioma y comunícate donde quieras.
              </h2>
              <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start">
                <button
                  aria-label="TConoce nuestros cursos"
                  className=" py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-white transition-all duration-500 font-bold text-xs md:text-base"
                >
                  NUESTROS CURSOS
                </button>
                <button
                  aria-label="Acerca de Nosotros"
                  className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base"
                >
                  ACERCA DE NOSOTROS
                </button>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce className="px-4 md:px-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/img/62f6a06787ee5b7f984961cd_foto-header.jpg"
                alt="header principal"
                width={430}
                height={572}
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
