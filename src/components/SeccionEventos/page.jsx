import Link from "next/link";
import ProximosEventos from "../ProximosEventos/page";

export default function SeccionEventos() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-10/12 flex flex-col md:flex-row justify-between">
        <div className="w-11/12 md:w-5/12">
          <h2 className="w-full text-[#000b7a] text-6xl font-bold">
            Próximos Eventos
          </h2>
          <p className="text-gray-500 text-lg py-5">
            Vive la experiencia Fyr Lois 360º
          </p>
          <p className="text-gray-500 text-lg py-5">
            Descubre todas las actividades divertidas que puedes disfrutar, para
            que perfecciones tu inglés con nosotros: practicando con temas que
            te gustan y adaptados a tus intereses.
          </p>
        </div>
        <div className="py-10">
          <Link
            href={"/events"}
            aria-label="Conoce mas"
            className="z-20 py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
          >
            TODOS LOS EVENTOS
          </Link>
        </div>
      </div>

      <div className="w-10/12 flex justify-center py-10">
        <ProximosEventos />
      </div>
    </div>
  );
}
