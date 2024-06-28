"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function SubSeccionCursos() {
  return (
    <Fade
      triggerOnce
      className="w-full my-14 flex flex-col items-center justify-center"
    >
      <div className="w-10/12 md:w-8/12 lg:w-5/12">
        <h3 className="text-4xl text-[#000b7a] text-center font-bold">
          Un curso de inglés adaptado a tus necesidades.
        </h3>
        <p className="text-center pt-5 text-xl text-gray-500">
          Hemos diseñado diferentes opciones, para que disfrutes la experiencia
          de aprender inglés al máximo.
        </p>
      </div>
      <div className="w-10/12 flex flex-col md:flex-row items-center justify-center gap-5">
        <div className="text-center justify-center flex flex-col items-center px-4 w-10/12 md:w-4/12">
          <Image
            src="/img/subCurso1.png"
            alt="subCurso1"
            width={250}
            height={194}
          />
          <h4 className="mt-2 py-3 text-[#000b7a] text-2xl font-bold">
            Curso de Inglés Regular
          </h4>
          <p className="text-xl text-gray-500 py-1">
            - Avanza en tu meta de aprender inglés.
          </p>
          <p className="text-xl text-gray-500 py-1">
            - Domina el idioma con un curso diseñado para que no tengas que
            alterar tu agenda.
          </p>
          <div className="h-[100px] flex items-center mt-4">
            <Link
              href="/courses"
              aria-label="Más informacion"
              className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
            >
              TODOS LOS CURSOS
            </Link>
          </div>
        </div>
        <div className="text-center justify-center flex flex-col items-center px-4 w-10/12  md:w-4/12">
          <Image
            src="/img/subCurso2.png"
            alt="subCurso2"
            width={250}
            height={194}
          />
          <h4 className="mt-2 py-3 text-[#000b7a] text-2xl font-bold">
            Curso de inglés intensivo
          </h4>
          <p className="text-xl text-gray-500 py-1">
            - Domina el idioma en menor tiempo.
          </p>
          <p className="text-xl text-gray-500 py-1">
            - Sabemos que hay objetivos que tienen un tiempo determinado. Éste
            es el curso ideal para ti, que quieres avanzar más rápido.
          </p>
          <div className="h-[100px] flex items-center mt-4">
            <Link
              href="/about-us"
              aria-label="Más información"
              className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
            >
              CONOCENOS
            </Link>
          </div>
        </div>
        <div className="text-center justify-center flex flex-col items-center px-4 w-10/12 md:w-4/12">
          <Image
            src="/img/subCurso3.png"
            alt="subCurso3"
            width={250}
            height={194}
          />
          <h4 className="mt-2 py-3 text-[#000b7a] text-2xl font-bold">
            Curso de inglés personalizado
          </h4>
          <p className="text-xl text-gray-500 py-1">
            - Aprende inglés a tu ritmo.
          </p>
          <p className="text-xl text-gray-500 py-1">
            - Recibe atención exclusiva con un profesor sólo para ti, en un
            curso a la medida, ajustado a tus necesidades y horario.
          </p>
          <div className="h-[100px] flex items-center mt-4">
            <Link
              href="/about-us"
              aria-label="Más información"
              className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
            >
              ACERCA DE NOSOTROS
            </Link>
          </div>
        </div>
      </div>
    </Fade>
  );
}
