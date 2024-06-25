"use client";

import Image from "next/image";
import { useState } from "react";

export default function TestimoniosEstudiantes() {
  const students = [
    {
      name: "Dilan Rivero",
      cargo: "Estudiante",
      level: "del nivel 5",
      testimonio:
        "“Hello, my name is Dilan Rivero, I am 25 years old, I am from Venezuela, but I currently live in NewYork, The United States. In November of last year I made the best decision to join this great family called Fyr Lois, where I have been learning English with excellent teachers, online classes with very flexible schedules. Before starting my classes, I felt very limited in my days because I really wanted to talk, understand and share with my coworkers in the kitchen where I work. Today I am about to start my level 5 b1+ and I am very satisfied with the results of this process, it has been very dynamic and fun in which I have met excellent teachers and classmates from many countries.”",
      img: "estudiante1.jpg",
    },
    {
      name: "Andrea Pita",
      cargo: "Estudiante",
      level: "del nivel 4",
      testimonio:
        "“Gracias a Fyr Lois he logrado sentirme más segura al hablar inglés, mi pronunciación y conocimientos han aumentado gracias a sus increíbles y didácticas clases, los profesionales que ahí laboran son responsables, honestos y siempre dispuestos a ayudar. Mi experiencia con Fyr Lois ha sido única, maravillosa, y muy satisfactoria... Si quieres aprender inglés, fácil, rápido y con profesionales de calidad, Fyr Lois es tu mejor elección.”",
      img: "estudiante2.jpg",
    },
    {
      name: "Rosy Sollecito",
      cargo: "Estudiante",
      level: "Egresada",
      testimonio:
        "“Hola, solo quería dar testimonio de mi experiencia con Fyr Lois. Yo estudié en clases y en varios cursos antes de llegar a Fyr Lois. Yo comencé en un nivel básico con Ellos y fuí avanzando con mucho entusiasmo, las clases que yo escogí eran grupales y me gustaba interactuar con otros compañeros para aprender de la pronunciación de los demás. El método que se usa, pienso es muy completo. Pero el ingrediente principal, en mi opinión, está en el Teacher… yo tuve la suerte de tener Excelentes profesores en cada nivel que hacían que me sintiera cómoda al momento de hablar y expresarme correctamente. Al final, después de varios meses, terminé mi curso feliz y lista para salir a comunicarme con el mundo exterior en inglés… y luego me preparé para hacer mi curso de Ciudadanía con el apoyo de mi Teacher y de la mano De Dios… lo logré. Ahora soy Ciudadana Americana y me expreso con seguridad y tranquilidad con las personas. Mi consejo… enfócate y lograrás lo que te propongas. Gracias Fyr Lois!! Mi Teacher Mariangel… súper linda  mi Teacher Lisandro… The Best.”",
      img: "estudiante3.jpg",
    },
  ];
  const [selectedStudent, setSelectedStudent] = useState(0);
  return (
    <div className="w-11/12 flex flex-col items-center py-10 lg:py-20">
      <h3 className="text-[#000b7a] text-4xl font-bold w-11/12 lg:w-5/12 text-center">
        Cómo nuestros estudiantes viven La experiencia Fyr Lois
      </h3>
      <div className="w-full lg:w-8/12 border-b-[1px] border-gray-400 px-2 lg:px-20">
        <p
          id="TestimonioP"
          className="text-gray-500 text-base md:text-2xl text-center py-10"
        >
          {students[selectedStudent].testimonio}
        </p>
      </div>
      <div className="w-full lg:w-8/12 flex flex-col md:flex-row   justify-between items-start md:items-center">
        {students.map((student, index) => (
          <div
            onClick={() => setSelectedStudent(index)}
            key={index}
            className={`w-full py-5 px-10 flex gap-3 items-center md:border-[#90d400] cursor-pointer ${selectedStudent === index ? "border-0 md:border-t-4 bg-blue-100 md:bg-white" : ""}`}
          >
            <div className="rounded-full overflow-hidden w-[100px] h-[95px]">
              <Image
                src={"/img/" + student.img}
                width={100}
                height={100}
                alt="Dilan rivero"
              />
            </div>
            <div>
              <h4 className="text-[#000b7a] text-lg font-bold">
                {student.name}
              </h4>
              <p className="text-gray-500 text-lg">{student.cargo}</p>
              <p className="text-gray-500 text-lg">{student.level}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-11/12 flex justify-center items-center py-20 h-[80px]">
        <a
          className="h-fit py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-white transition-all duration-500 font-bold text-xs md:text-base"
          href="#coursesTitle"
        >
          VER CURSOS
        </a>
      </div>
    </div>
  );
}
