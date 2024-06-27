"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";

export default function HeaderCourses() {
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
          <Fade triggerOnce className="w-11/12 md:w-4/12 pt-10 md:pt-0">
            <div className="text-center md:text-left">
              <h1 className="text-5xl lg:text-7xl font-bold text-[#000b7a] leading-tight ">
                Un curso adaptado a ti
              </h1>
              <h2 className="text-lg text-gray-500 py-10">
                Aprende inglés a gusto con una metodología adaptada a tu nivel,
                edad, intereses y agenda.
              </h2>
              <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start">
                <Link
                  href="#coursesTitle"
                  aria-label="Conoce nuestros cursos"
                  className=" py-4 px-7
                  bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md
                  text-bold text-white transition-all duration-500 font-bold
                  text-xs md:text-base"
                >
                  {" "}
                  CONOCE MÁS
                </Link>
              </div>
            </div>
          </Fade>
          <Fade triggerOnce className="px-4 md:px-0">
            <div className="overflow-hidden rounded-2xl">
              <Image
                src="/img/headerCourses.png"
                alt="header principal"
                width={630}
                height={572}
                loading="eager"
              />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
}
