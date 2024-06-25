import CursosBox from "@/components/CursosBox/page";
import HeaderCourses from "@/components/HeaderCourses/page";
import LlevaTuProyecto from "@/components/LlevaTuProyecto/page";
import SectionAprender from "@/components/SectionAprender/page";
import TestimoniosEstudiantes from "@/components/TestimoniosEstudiantes/page";
import "./page.css";

export default function CoursesPage() {
  return (
    <div className="flex flex-col items-center">
      <HeaderCourses />
      <div className="w-11/12 text-center mb-20">
        <h3 id="coursesTitle" className="text-[#000b7a] text-4xl py-10">
          Conoce nuestros cursos
        </h3>
        <CursosBox />
      </div>
      <LlevaTuProyecto />
      <SectionAprender />
      <TestimoniosEstudiantes />
    </div>
  );
}
