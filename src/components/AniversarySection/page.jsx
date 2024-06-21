import Image from "next/image";

export default function AniversarySection() {
  return (
    <div className="area">
      <ul className="circles z-10">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="w-full flex justify-center bg-white">
        <div className="w-10/12 flex flex-col md:flex-row items-center gap-16 border-b-[1px] border-[#000b7a]  py-20 text-center md:text-left">
          <div>
            <Image
              src="/img/25aniversary.png"
              alt="25 aniversary fyrlois"
              width={330}
              height={272}
            />
          </div>
          <div className="w-11/12 md:w-8/12">
            <h3 className="text-4xl font-bold text-[#000b7a] pb-7">
              Aprende inglés sin perder tiempo.
            </h3>
            <p className="text-gray-500 pb-7">
              Gracias a nuestros 25 años de experiencia, hemos desarrollado una
              metodología práctica y divertida con la que aprenderás hablar el
              idioma de forma fluida. A través de clases 100% en inglés,
              adaptadas a tus conocimientos, descubrirás cuán capacitado estás
              de comunicarte sin hacer traducciones, porque no vale mucho que
              llenes tu mente de gramática, si no la sabes aplicar.
            </p>
            <div className="h-[80px] flex justify-center md:justify-start items-center">
              <button
                aria-label="Todos los cursos"
                className="z-20 py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-100 font-bold "
              >
                TODOS LOS CURSOS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
