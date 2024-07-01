"use client";
import Image from "next/image";
import { useState } from "react";
export default function CoursesInfo(props) {
  const { data } = props;
  const [selectedTab, setSelectedTab] = useState("Contenido del Curso");

  return (
    <div className="w-full flex flex-col font-[lato]">
      <div className="w-11/12 lg:w-7/12 flex flex-col pl-10 md:pl-32 py-5 md:py-20">
        <ul className="w-full lg:w-9/12 flex flex-col md:flex-row justify-center border-b-2 border-gray-200">
          <li
            onClick={() => setSelectedTab("Sobre el Curso")}
            className={`text-xl text-gray-500 py-4 border-[#90d400] px-4 hover:text-[#90d400] cursor-pointer transition-all duration-300 ${selectedTab === "Sobre el Curso" ? "border-b-4" : "border-b-0"}`}
          >
            Sobre el Curso
          </li>
          <li
            onClick={() => setSelectedTab("Contenido del Curso")}
            className={`text-xl text-gray-500 py-4 border-[#90d400] px-4 hover:text-[#90d400] cursor-pointer transition-all duration-300 ${selectedTab === "Contenido del Curso" ? "border-b-4" : "border-b-0"}`}
          >
            Contenido del curso
          </li>
          <li
            onClick={() => setSelectedTab("Resenas")}
            className={`text-xl text-gray-500 py-4 border-[#90d400] px-4 hover:text-[#90d400] cursor-pointer transition-all duration-300 ${selectedTab === "Resenas" ? "border-b-4" : "border-b-0"}`}
          >
            Reseñas
          </li>
        </ul>
        <div className="w-full flex flex-col py-10">
          {selectedTab === "Sobre el Curso" &&
            data.sobreElCurso.map((item, i) => (
              <>
                {item.titulo && (
                  <h2
                    key={"titulo" + i}
                    className="text-[#000b7a] text-5xl py-10 px-5 font-bold"
                  >
                    {item.titulo}
                  </h2>
                )}
                {item.texto &&
                  item.texto.map((item, i) => (
                    <p
                      key={"texto" + i}
                      className="text-gray-500 text-lg py-5 px-1 md:px-5"
                    >
                      {item}
                    </p>
                  ))}
                {item.img && (
                  <div key={"img" + i} className="w-full flex justify-center">
                    <Image
                      key={"img" + i}
                      width={800}
                      height={300}
                      src={`/img/${item.img}`}
                      alt={item.titulo || "img-" + i}
                      className="rounded-2xl"
                    />
                  </div>
                )}
              </>
            ))}
          {selectedTab === "Contenido del Curso" &&
            data.contenidoDelCurso.map((item, i) => (
              <div key={"courseCont" + i}>
                {item.titulo && (
                  <h2
                    key={"titulo" + i}
                    className="text-[#000b7a] text-5xl py-10 px-5 font-bold"
                  >
                    {item.titulo}
                  </h2>
                )}
                {item.ul && (
                  <ul
                    key={"ul" + i}
                    className="text-gray-500 text-lg py-5 list-disc pl-10"
                  >
                    {item.ul?.map((li, j) => (
                      <li key={"li" + j}>{li}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          {selectedTab === "Resenas" &&
            data.resenas.map((item, i) => (
              <div key={"resenas" + i}>
                <h2
                  key={"h2rev" + i}
                  className="text-[#000b7a] text-3xl font-bold py-5"
                >
                  REVIEWS
                </h2>
                <div key={"img2" + i} className="border-b-2 border-gray-200">
                  <Image
                    src={`/img/5stars.svg`}
                    alt={item.name || "img2-" + i}
                    width={200}
                    height={100}
                  />
                  <p key={"name2" + i} className="text-gray-500 text-xl pt-5">
                    {item.texto}
                  </p>
                  <h4
                    key={"texto2" + i}
                    className="text-[#000b7a] font-bold text-2xl py-5"
                  >
                    {item.nombre}
                  </h4>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
