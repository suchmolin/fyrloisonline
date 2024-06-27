"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function HeaderaboutUs() {
  return (
    <section className="relative  w-full">
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

        <div className=" min-h-[600px] flex flex-col lg:flex-row gap-20 justify-center items-center bg-white px-7">
          <Fade triggerOnce className="w-11/12 lg:w-4/12 pt-10 lg:pt-0">
            <div className="text-center md:text-left">
              <h1 className="text-3xl lg:text-5xl font-bold text-[#000b7a] leading-tight ">
                Hacemos realidad proyectos de vida
              </h1>
              <h2 className="text-lg text-gray-500 py-10">
                Conoce cómo convertimos el inglés en la herramienta para
                materializar tus proyectos.
              </h2>
              <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start">
                <a
                  href="#nuestraHistoria"
                  aria-label="Acerca de Nosotros"
                  className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base"
                >
                  NUESTRA HISTORIA
                </a>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce className="px-4 lg:px-0">
            <div className="flex gap-3 justify-center items-center">
              <div className="flex flex-col gap-3">
                <div className="w-[115px] h-[150px] md:w-[230px] md:h-[300px] overflow-hidden rounded-xl ">
                  <Image
                    src="/img/hacemosRealidad1.jpg"
                    alt="header principal"
                    width={430}
                    height={572}
                    loading="eager"
                  />
                </div>
                <div className="w-[125px] h-[115px] md:w-[250px] md:h-[230px] overflow-hidden rounded-xl ">
                  <Image
                    src="/img/hacemosRealidad2.jpg"
                    alt="header principal"
                    width={430}
                    height={572}
                    loading="eager"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <div className="w-[190px] h-[100px] md:w-[380px] md:h-[200px] overflow-hidden rounded-xl ">
                  <Image
                    src="/img/hacemosRealidad3.jpeg"
                    alt="header principal"
                    width={430}
                    height={572}
                    loading="eager"
                  />
                </div>
                <div className="w-[165px] h-[150px] md:w-[330px] md:h-[300px] overflow-hidden rounded-xl">
                  <Image
                    src="/img/hacemosRealidad4.jpg"
                    alt="header principal"
                    width={430}
                    height={572}
                    loading="eager"
                  />
                </div>
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
