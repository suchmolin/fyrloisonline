import Image from "next/image";
import Link from "next/link";

export default function ComoAprenderas() {
  return (
    <div className="w-full flex justify-center py-20">
      <div className="w-10/12">
        <div className="flex flex-col md:flex-row justify-between items-center py-10">
          <h3 className="text-3xl md:text-4xl font-bold text-[#000b7a]">
            ¿Cómo aprenderás inglés con nosotros?
          </h3>
          <div className="h-[70px] flex items-center">
            <Link
              href="/courses"
              aria-label="Conoce nuestros cursos"
              className=" py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white  transition-all duration-500 font-bold mt-5 md:mt-0"
            >
              NUESTROS CURSOS
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row gap-10 lg:gap-20 justify-center">
          <div className="w-12/12 sm:w-11/12 md:w-5/12 flex flex-col gap-20 border-0 lg:border-r-[1px] border-[#000b7a]">
            <div className="flex">
              <div className="min-w-[100px]">
                <Image
                  src="/img/comoAprender1.png"
                  alt="header principal"
                  width={110}
                  height={80}
                />
              </div>
              <div className="px-2 lg:px-10">
                <h4 className="text-[#000b7a] text-2xl font-bold mb-3">
                  Con clases 100% en vivo y en inglés.
                </h4>
                <p>
                  Más que aprender un idioma, te enseñaremos a comunicarte, para
                  lograrlo, la práctica será un ingrediente principal.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="min-w-[100px]">
                <Image
                  src="/img/comoAprender2.png"
                  alt="header principal"
                  width={110}
                  height={80}
                />
              </div>
              <div className="px-2 lg:px-10">
                <h4 className="text-[#000b7a] text-2xl font-bold mb-3">
                  Metodología efectiva.
                </h4>
                <p>
                  Aprenderás con una metodología reconocida internacionalmente.
                  Todos nuestros cursos están alineados al Marco Común Europeo
                  de Referencia para las Lenguas.
                </p>
              </div>
            </div>
          </div>
          <div className="w-12/12 sm:w-11/12 md:w-5/12 flex flex-col gap-20 ">
            <div className="flex">
              <div className="min-w-[100px]">
                <Image
                  src="/img/comoAprender3.png"
                  alt="header principal"
                  width={110}
                  height={80}
                />
              </div>
              <div className="px-2 lg:px-10">
                <h4 className="text-[#000b7a] text-2xl font-bold mb-3">
                  Acompañamiento calificado.
                </h4>
                <p>
                  Apuntamos a que vivas una experiencia de primer nivel. Para
                  ello trabajamos en preparar a nuestros profesores. Contamos
                  con profesores certificados TEFL.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="min-w-[100px]">
                <Image
                  src="/img/comoAprender4.png"
                  alt="header principal"
                  width={110}
                  height={80}
                />
              </div>
              <div className="px-2 lg:px-10">
                <h4 className="text-[#000b7a] text-2xl font-bold mb-3">
                  Objetivos alcanzables.
                </h4>
                <p>
                  Gracias a nuestros 24 años de experiencia, hemos desarrollado
                  un curso con el que podrás avanzar en tu meta y mantenerte
                  motivado por los resultados que alcanzarás durante todo el
                  proceso. 100.000 alumnos egresados avalan la eficacia de
                  nuestra metodología.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
