"use client";
import Image from "next/image";
import Link from "next/link";
import data from "/src/teachersInfo.json";
import { useState } from "react";
import CursosBox from "@/components/CursosBox/page";

export default function Profesor({ params }) {
  const { profesor } = params;
  const item = data.find((item) => item.id === profesor);
  console.log(`/img/${item.img}`);
  const [selected, setSelected] = useState("acercaDeMi");

  return (
    <div className="w-full flex justify-center items-center py-20">
      <div className="w-11/12 flex flex-col lg:flex-row gap-0 lg:gap-5 items-center lg:items-start">
        <div className="relative w-10/12 md:w-8/12 lg:w-4/12 min-h-screen">
          <div className="sticky top-0 rounded-xl shadow-2xl w-full lg:w-[350px] flex flex-col items-center py-28">
            <div className="relative w-[150px] h-[180px] rounded-full overflow-hidden -mt-14">
              <Image
                src={`/img/${item.img}`}
                layout="fill"
                objectFit="cover"
                alt="teacher1"
              />
            </div>
            <div className="w-10/12 h-full text-center flex flex-col items-center justify-between">
              <div className="">
                <h4 className="text-[#000b7a] text-2xl font-bold py-2 cursor-pointer hover:text-[#90d400] transition-all duration-300">
                  {item.nombre}
                </h4>
                <h5 className="text-[#000b7a] text-xl pb-4">{item.cargo}</h5>
                <p className="text-gray-500 text-lg">{item.descripcion}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col pt-10 lg:pt-0 items-center">
          <div className="w-10/12 h-[70px] flex gap-1 md:gap-5 items-center justify-center ml-0 lg:ml-20">
            <button
              onClick={() => setSelected("acercaDeMi")}
              aria-label="Acerca de Nosotros"
              className={`py-2  px-2 md:px-7 whitespace-nowrap hover:bg-[#90d400] hover:mb-1 rounded-md text-bold hover:text-white border-2  hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base ${selected === "acercaDeMi" ? "bg-[#90d400] text-white border-[#90d400]" : "bg-[#fff] "} text-[#000b7a] border-[#000b7a]`}
            >
              Acerca de mí
            </button>
            <button
              onClick={() => setSelected("cursos")}
              aria-label="Acerca de Nosotros"
              className={`py-2  px-2 md:px-7 hover:bg-[#90d400] hover:mb-1 rounded-md text-bold hover:text-white border-2  hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base ${selected === "cursos" ? "bg-[#90d400] text-white border-[#90d400]" : "bg-[#fff] "} text-[#000b7a] border-[#000b7a]`}
            >
              Cursos
            </button>
            <button
              onClick={() => setSelected("habilidades")}
              aria-label="Acerca de Nosotros"
              className={`py-2  px-2 md:px-7 hover:bg-[#90d400] hover:mb-1 rounded-md text-bold hover:text-white border-2  hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base ${selected === "habilidades" ? "bg-[#90d400] text-white border-[#90d400]" : "bg-[#fff] "} text-[#000b7a] border-[#000b7a]`}
            >
              Habilidades
            </button>
          </div>
          <div className="p-10">
            {selected === "acercaDeMi" && (
              <>
                {item.acercaDeMi.map((item, index) => (
                  <div key={index} className="py-5">
                    <h4 className="text-[#000b7a] text-2xl font-bold py-2">
                      {item.titulo}
                    </h4>
                    {item.texto.map((item, index) => (
                      <p key={index} className="text-gray-500 text-lg py-2">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
                <div className="relative w-full h-[250px] md:h-[380px] overflow-hidden rounded-xl">
                  <Image
                    src="/img/acercaDeMi.jpeg"
                    layout="fill"
                    objectFit="cover"
                    alt="teacher1"
                  />
                </div>
                <h4 className="text-[#000b7a] text-2xl font-bold py-5">
                  Proyectos anteriores
                </h4>
                {item.proyectos.map((item, index) => (
                  <p key={index} className="text-gray-500 text-lg py-2">
                    {item}
                  </p>
                ))}
              </>
            )}
            {selected === "cursos" && (
              <div className="w-full flex flex-col items-center gap-5">
                <CursosBox box="sm" />
              </div>
            )}
            {selected === "habilidades" && (
              <>
                <h4 className="text-[#000b7a] text-2xl font-bold py-5">
                  Habilidades
                </h4>
                <ul className="list-disc pl-0 md:pl-10">
                  {item.habilidades.map((item, index) => (
                    <li key={index} className="text-gray-500 text-lg py-2 pl-5">
                      {item}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
