import CoursesInfo from "@/components/CoursesInfo/page";
import CursosBox from "@/components/CursosBox/page";
import HeaderSingleCourse from "@/components/HeaderSingleCourse/page";
import TarjetaCompraCurso from "@/components/TarjetaCompraCurso/page";
import { cursosInfo } from "@/cursosInfo";
export default function CoursePage({ params }) {
  const { courseID } = params;
  const course = cursosInfo.find((curso) => curso.id === courseID);
  return (
    <>
      <HeaderSingleCourse data={course} />
      <CoursesInfo data={course} />
      <div className="flex lg:hidden w-full justify-center z-10">
        <TarjetaCompraCurso data={course} />
      </div>
      <div className="w-full flex flex-col items-center">
        <div className="w-10/12">
          <h2 className="text-[#000b7a] text-5xl font-bold py-10">
            Todos los Cursos{" "}
          </h2>
          <CursosBox box="lg" />
        </div>
      </div>
    </>
  );
}
