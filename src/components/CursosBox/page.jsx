import { cursosInfo } from "@/cursosInfo";
import Image from "next/image";

export default function CursosBox() {
  return (
    <div className="w-full flex gap-5">
      {cursosInfo.map((curso, index) => (
        <a
          key={index}
          href={curso.redirect}
          className="flex flex-col justify-between min-h-[400px] w-3/12 rounded-lg shadow-2xl overflow-hidden hover:scale-[0.98] transition-all duration-300"
        >
          <Image
            width={300}
            height={300}
            src={`/img/${curso.img}`}
            alt={curso.title}
          />
          <div className="mx-5 py-3 ">
            <h4 className="text-xl font-bold text-[#000b7a] py-2">
              {curso.title}
            </h4>
            <p className="text-gray-500 pb-6">{curso.description}</p>
          </div>
          <div className="mx-4 py-5 text-xl text-[#000b7a] font-bold border-t-[1px] border-gray-500">
            <p>$ {curso.price}.00 USD</p>
          </div>
        </a>
      ))}
    </div>
  );
}
