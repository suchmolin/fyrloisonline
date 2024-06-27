import Image from "next/image";
import data from "/src/eventos.json";
import { MdOutlineDateRange } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { FaRegClock } from "react-icons/fa";

export default function ProximosEventos() {
  return (
    <>
      {data.map((evento, i) => {
        return (
          <a
            href={"/events/" + evento.id}
            key={i}
            className="w-[1000px] min-h-[400px] rounded-xl overflow-hidden shadow-2xl flex flex-col lg:flex-row hover:scale-[0.99] transition-all duration-300"
          >
            <div className="relative w-full lg:w-[600px] min-h-[400px] lg:h-full">
              <Image
                layout="fill"
                objectFit="cover"
                src={`/img/${evento.tarjeta.img}`}
                alt={evento.tarjeta.titulo}
              />
            </div>
            <div className="w-fit p-7">
              <div className=" border-b-2 border-gray-300 pb-4">
                <h4 className="text-[#000b7a] text-2xl font-bold py-2 px-5">
                  {evento.tarjeta.titulo}
                </h4>
                <p className="text-gray-500 text-lg py-2 px-1 md:px-5">
                  {evento.tarjeta.descripcion}
                </p>
              </div>
              <div className="w-full flex flex-wrap p-5">
                <p className="flex gap-2 w-10/12 md:w-6/12 py-4 text-xl items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <MdOutlineDateRange />
                  </span>
                  {evento.tarjeta.fecha}
                </p>
                <p className="flex gap-2 w-10/12 md:w-6/12 py-4 text-xl items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <FaRegClock />
                  </span>
                  {evento.tarjeta.hora}
                </p>
                <p className="flex gap-2 w-10/12 md:w-6/12 py-4 text-xl items-center text-[#000b7a]">
                  <span className="text-[#0606f0] font bold">
                    <FiMapPin />
                  </span>
                  {evento.tarjeta.ubicacion}
                </p>
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
