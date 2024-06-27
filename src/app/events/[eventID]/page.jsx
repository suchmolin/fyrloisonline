import HeaderEvento from "@/components/HeaderEvento/page";
import data from "/src/eventos.json";
import ContentEvento from "@/components/ContentEvento/page";
import ProximosEventos from "@/components/ProximosEventos/page";
export default function Event({ params }) {
  const { eventID } = params;
  const evento = data.find((evento) => evento.id === eventID);
  return (
    <>
      <HeaderEvento data={evento.header} />

      <ContentEvento data={evento.contenido} />
      <div className="flex flex-col items-center justify-center">
        <h2 className="w-10/12 text-[#000b7a] text-6xl font-bold py-20 text-center">
          Próximos Eventos
        </h2>
        <div className="w-10/12 flex justify-center py-10">
          <ProximosEventos />
        </div>
      </div>
    </>
  );
}
