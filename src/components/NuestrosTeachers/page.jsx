import Image from "next/image";
import Link from "next/link";

export default function NuestrosTeachers() {
  const data = [
    {
      nombre: "Jesús Prato",
      cargo: "VICEPRESIDENTE ACADÉMICO",
      descripcion:
        "A cargo del departamento académico y coordinación de programas de aprendizaje de inglés, como segundo idioma, para estudiantes de diferentes edades.",
      img: "teacher1.png",
      redir: "/teacher/jesus-prato",
    },
    {
      nombre: "Yheissi Blanco",
      cargo: "DIRECTORA ACADEMICA",
      descripcion:
        "Directora Académico de Fyr Lois. Encargado de capacitar al equipo de profesores, preparar los programas académicos y asegurar que la metodología se cumpla y se lleve a cabo de manera efectiva.",
      img: "teacher2.jpg",
      redir: "/teacher/yheissi-blanco",
    },
    {
      nombre: "Mauro Rodríguez",
      cargo: "DIRECTOR ACADEMICO",
      descripcion:
        "Director académico, supervisión de docentes, encargado de la formación.",
      img: "teacher3.jpg",
      redir: "/teacher/mauro-rodriguez",
    },
  ];
  return (
    <div className="w-11/12 flex flex-col items-center py-20">
      <div className="w-11/12">
        <h2 className="text-3xl font-bold text-[#000b7a] py-4">
          Conoce a nuestros teachers
        </h2>
        <p className="text-gray-500 text-xl">
          Aprender inglés es sencillo si cuentas con la ayuda adecuada.
        </p>
      </div>
      <div className="w-11/12 flex justify-center flex-wrap gap-20 pt-28">
        {data.map((item, index) => (
          <div
            key={index}
            className="rounded-xl shadow-2xl w-[350px] pb-10 flex flex-col items-center"
          >
            <div className="relative w-[150px] h-[180px] rounded-full overflow-hidden -mt-14">
              <Image
                src={"/img/" + item.img}
                layout="fill"
                objectFit="cover"
                alt="teacher1"
              />
            </div>
            <div className="w-10/12 h-full text-center flex flex-col items-center justify-between">
              <div className="">
                <h4 className="text-[#000b7a] text-2xl font-bold py-2 cursor-pointer hover:text-[#90d400] transition-all duration-300">
                  <Link href={item.redir}> {item.nombre}</Link>
                </h4>
                <h5 className="text-[#000b7a] text-xl pb-4">{item.cargo}</h5>
                <p className="text-gray-500 text-lg">{item.descripcion}</p>
              </div>
              <div className="flex gap-10 h-[60px] items-center justify-center md:justify-start mt-5">
                <a
                  href={item.redir}
                  aria-label="Acerca de Nosotros"
                  className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold text-xs md:text-base"
                >
                  VER PERFIL
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
