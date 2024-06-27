import ProximosEventos from "@/components/ProximosEventos/page";

export default function Events() {
  return (
    <div className="w-full flex flex-col items-center py-20">
      <h1 className="text-[#000b7a] text-6xl font-bold text-center">
        Próximos Eventos
      </h1>
      <p className="w-10/12 md:w-5/12 text-gray-500 text-lg text-center py-5 ">
        Vive la experiencia Fyr Lois 360º. Disfruta de todas las actividades y
        herramientas que tenemos para que mejores tu dominio del inglés.
      </p>
      <div className="w-10/12 flex justify-center py-10">
        <ProximosEventos />
      </div>
    </div>
  );
}
