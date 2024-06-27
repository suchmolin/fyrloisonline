"use client";
import Image from "next/image";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import { MdOutlineDateRange } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

export default function HeaderEvento(props) {
  const { data } = props;
  return (
    <div className="w-full min-h-[600px] flex flex-col md:flex-row gap-20 justify-center items-center bg-gray-200 px-7 pb-10">
      <Fade triggerOnce className="w-11/12 md:w-5/12 pt-10 md:pt-0">
        <div className="text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold text-[#000b7a] leading-tight ">
            {data.titulo}
          </h1>
          <h2 className="text-lg text-gray-500 py-10">{data.descripcion}</h2>
          <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start">
            <Link
              href={data.redir}
              aria-label="Conoce nuestros cursos"
              className=" py-4 px-7
                  bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md
                  text-bold text-white transition-all duration-500 font-bold
                  text-xs md:text-base"
            >
              {" "}
              SIGN UP
            </Link>
          </div>
        </div>
      </Fade>
      <Fade triggerOnce className="w-ful md:px-0 flex justify-center">
        <div className="overflow-hidden rounded-xl lg:p-10">
          <div
            className={`w-[350px] flex flex-col justify-between min-h-[400px]  rounded-lg shadow-2xl overflow-hidden hover:scale-[0.98] transition-all duration-300 bg-white`}
          >
            <div className="relative w-full min-h-[300px]">
              <Image
                layout="fill"
                objectFit="cover"
                src={`/img/${data.img}`}
                alt={data.titulo}
              />
            </div>
            <div className="mx-5 py-3 ">
              <h4 className="text-xl font-bold text-[#000b7a] py-2">
                {data.titulo}
              </h4>
              <div className="w-full flex flex-wrap p-5">
                <p className="flex gap-2 w-10/12 md:w-7/12 py-1 text-base items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <MdOutlineDateRange />
                  </span>
                  {data.fecha}
                </p>
                <p className="flex gap-2 w-10/12 md:w-7/12 py-1 text-base items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <FaRegClock />
                  </span>
                  {data.hora}
                </p>
                <p className="flex gap-2 w-10/12 md:w-7/12 py-1 text-base items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <FiMapPin />
                  </span>
                  {data.ubicacion}
                </p>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
