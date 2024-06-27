"use client";
import CountUp from "react-countup";
export default function CountersAboutUs() {
  return (
    <div className="w-full h-[150px] bg-gray-50 flex items-center justify-center gap-0 md:gap-10 lg:gap-36 text-[#000b7a]">
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          subfix="k"
          end={100}
          duration={5}
        />
        <p className="text-lg md:text-xl px-2">Egresados</p>
      </div>
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          end={25}
          duration={5}
        />
        <p className="text-lg md:text-xl px-2">Años de experiencia</p>
      </div>
      <div className="text-center">
        <CountUp
          className="text-2xl md:text-5xl font-bold"
          prefix="+"
          end={50}
          duration={5}
        />
        <p className="text-lg md:text-xl px-2">Profesores certificados</p>
      </div>
    </div>
  );
}
