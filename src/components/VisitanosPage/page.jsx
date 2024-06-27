import Image from "next/image";
import { BsTelephone } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";

export default function VisitanosPage() {
  return (
    <div className="w-10/12 flex flex-col items-center justify-center py-20">
      <div className="w-10/12 lg:w-4/12 text-center">
        <h2 className="text-3xl font-bold text-[#000b7a]">Visítanos</h2>
        <p className="text-xl text-gray-500">
          Conoce una nueva forma de aprender inglés: práctica y divertida.
        </p>
      </div>
      <div className="w-[300px] sm:w-[500px] md:w-[700px] pb-10 flex flex-col gap-4 items-center rounded-xl shadow-xl mt-10 overflow-hidden">
        <div className="relative w-full h-[280px]">
          <Image
            src="/img/kissimmee.jpg"
            layout="fill"
            objectFit="cover"
            alt="kissimmee"
          />
        </div>
        <h4 className="w-11/12 text-3xl text-[#000b7a]">Kissimmee</h4>
        <div className="flex flex-col sm:flex-row gap-10 w-11/12">
          <p className="text-base text-gray-500 flex gap-3 items-center">
            <span className="text-2xl text-[#000b7a]">
              <FiMapPin />
            </span>
            928 East Osceola Parkway, Kissimmee, FL 34744
          </p>
          <p className="text-base text-gray-500 flex gap-3 items-center">
            <span className="text-2xl text-[#000b7a]">
              <BsTelephone />
            </span>
            +1 (305) 5105259
          </p>
        </div>
      </div>
    </div>
  );
}
