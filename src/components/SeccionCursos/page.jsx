"use client";
import { Slide } from "react-awesome-reveal";
import CursosBox from "../CursosBox/page";

export default function SeccionCursos() {
  return (
    <Slide triggerOnce direction="up" className="w-full flex justify-center">
      <div className="w-11/12 lg:w-10/12 border-b-[1px] border-[#000b7a] py-20 flex flex-col items-center">
        <div className="w-full flex justify-between">
          <div className="w-11/12 md:w-6/12">
            <h3 className="text-4xl text-[#000b7a]">
              Vive una experiencia de aprendizaje memorable.
            </h3>
            <p className="text-gray-500 py-5">
              Cada estudiante es un proyecto de vida por cumplir. Por esa razón
              ofrecemos un curso adaptado a los intereses y necesidades.
            </p>
          </div>
          <div className="">
            <button
              aria-label="Conoce mas"
              className="hidden md:block z-20 py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
            >
              TODOS LOS CURSOS
            </button>
          </div>
        </div>
        <div className="w-full py-10 flex justify-center">
          <CursosBox box="lg" />
        </div>
      </div>
    </Slide>
  );
}
