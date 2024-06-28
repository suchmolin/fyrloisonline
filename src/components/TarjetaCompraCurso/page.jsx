import Image from "next/image";

export default function TarjetaCompraCurso(props) {
  const { data } = props;
  return (
    <div className="sticky top-0 right-0 h-fit overflow-hidden rounded-xl lg:p-10 shadow-2xl">
      <div
        className={`w-[350px] flex flex-col min-h-[400px]  rounded-lg  overflow-hidden transition-all duration-300 bg-white`}
      >
        <div className="relative w-full min-h-[300px]">
          <Image
            layout="fill"
            objectFit="cover"
            src={`/img/${data.img}`}
            alt={data.titulo}
          />
        </div>
        <div className="mx-5 py-5">
          <p className="flex gap-2 w-10/12 md:w-7/12 py-1 text-xl font-bold items-center text-[#000b7a]">
            $ {data.price}.00 USD
          </p>
          <div className="w-full flex flex-col gap-3 py-4 h-[170px]">
            <button
              href="/courses"
              aria-label="TConoce nuestros cursos"
              className=" py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a]  rounded-md text-bold text-white transition-all duration-200 font-bold text-xs md:text-base"
            >
              AGREGAR AL CARRITO
            </button>
            <button
              href="/about-us"
              aria-label="Acerca de Nosotros"
              className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-200 font-bold text-xs md:text-base"
            >
              COMPRAR AHORA
            </button>
          </div>
          <div className="w-full flex flex-col gap-5 py-5">
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse1.png"
                alt="course1"
                width={30}
                height={10}
              />
              Clases en vivo
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse2.png"
                alt="course1"
                width={30}
                height={10}
              />
              Enfoque conversacional
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse3.png"
                alt="course1"
                width={30}
                height={10}
              />
              Certificado de culminación
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse4.png"
                alt="course1"
                width={30}
                height={10}
              />
              Acceso Club de Lenguaje
            </p>
            <p className="flex gap-3 items-center text-[#000b7a] text-base">
              <Image
                src="/img/iconCourse5.png"
                alt="course1"
                width={30}
                height={10}
              />
              Entra desde cualquier ordenador, tablet o móvil
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
