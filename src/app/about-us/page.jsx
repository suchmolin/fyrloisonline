import CountersAboutUs from "@/components/CountersAboutUs/page";
import HeaderaboutUs from "@/components/HeaderAboutUs/page";
import LlevaTuProyecto from "@/components/LlevaTuProyecto/page";
import NuestraHistoriaPage from "@/components/NuestraHistoria/page";
import NuestraMisionPage from "@/components/NuestraMisionPage/page";
import NuestrosTeachers from "@/components/NuestrosTeachers/page";
import VisitanosPage from "@/components/VisitanosPage/page";

export default function AboutUsPage() {
  return (
    <div className="flex flex-col items-center">
      <HeaderaboutUs />
      <CountersAboutUs />
      <NuestraHistoriaPage />
      <NuestraMisionPage />
      <VisitanosPage />
      <LlevaTuProyecto />
      <NuestrosTeachers />
    </div>
  );
}
