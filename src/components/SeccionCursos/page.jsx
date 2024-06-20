"use client";
import { Slide } from "react-awesome-reveal";
import CursosBox from "../CursosBox/page";

export default function SeccionCursos() {
  return (
    <Slide triggerOnce direction="up" className="w-full flex justify-center">
      <div className="w-10/12 border-b-[1px] border-[#000b7a] py-20">
        <div className="w-full flex justify-between">
          <div className="w-6/12">
            <h3 className="text-4xl text-[#000b7a]">
              Vive una experiencia de aprendizaje memorable.
            </h3>
            <p className="text-gray-500 py-5">
              Cada estudiante es un proyecto de vida por cumplir. Por esa razón
              ofrecemos un curso adaptado a los intereses y necesidades.
            </p>
          </div>
          <div className="">
            <button className="z-20 py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold ">
              CONOCE MÁS
            </button>
          </div>
        </div>
        <div className="py-10">
          <CursosBox />
        </div>
      </div>
    </Slide>
  );
}
