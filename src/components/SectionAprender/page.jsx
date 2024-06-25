import Image from "next/image";

export default function SectionAprender() {
  return (
    <div className="w-11/12 flex flex-col items-center py-10 md:py-20 border-b-[1px] border-gray-500">
      <div className="w-11/12 lg:w-3/12 text-center py-10">
        <h3 className="text-[#000b7a] text-4xl py-3">
          ¿Sabes por qué aprender con nosotros?
        </h3>
        <p className="text-gray-500">
          Diseñamos una experiencia de aprendizaje memorable, en la que te
          sientas motivado, a gusto y feliz con los resultados.
        </p>
      </div>

      <div className="w-10/12 flex flex-wrap gap-x-36 gap-y-10 justify-center">
        <div className="w-11/12 sm:w-8/12 md:w-4/12 flex flex-col items-center text-center">
          <Image
            src="/img/aprenderConNosotros1.png"
            width={150}
            height={300}
            alt="aprender con nosotros"
          />
          <h4 className="text-2xl text-[#000b7a] font-bold">
            Clases 100% en vivo
          </h4>
          <p className="text-lg text-gray-500">
            Tendrás acompañamiento durante todo tu proceso de aprendizaje. A
            través de un teacher que te irá orientado en cada paso.
          </p>
        </div>
        <div className="w-11/12 sm:w-8/12 md:w-4/12 flex flex-col items-center text-center">
          <Image
            src="/img/aprenderConNosotros2.png"
            width={150}
            height={300}
            alt="aprender con nosotros"
          />
          <h4 className="text-2xl text-[#000b7a] font-bold">
            Enseñanza práctica
          </h4>
          <p className="text-lg text-gray-500">
            El aprendizaje sin práctica es solo teoría. Por eso te enseñamos el
            idioma con situaciones vivenciales y un enfoque conversacional, para
            que sepas cómo emplear los conocimientos.
          </p>
        </div>
        <div className="w-11/12 sm:w-8/12 md:w-4/12 flex flex-col items-center text-center">
          <Image
            src="/img/aprenderConNosotros3.png"
            width={150}
            height={300}
            alt="aprender con nosotros"
          />
          <h4 className="text-2xl text-[#000b7a] font-bold">
            Metodología certificada
          </h4>
          <p className="text-lg text-gray-500">
            Dominarás el idioma a través de una metodología alineada al Marco
            Común Europeo, con reconocimiento internacional. Al terminar cada
            nivel, recibes tu certificado con estos alcances.
          </p>
        </div>
        <div className="w-11/12 sm:w-8/12 md:w-4/12 flex flex-col items-center text-center">
          <Image
            src="/img/aprenderConNosotros4.png"
            width={150}
            height={300}
            alt="aprender con nosotros"
          />
          <h4 className="text-2xl text-[#000b7a] font-bold">
            Aprendizaje divertido
          </h4>
          <p className="text-lg text-gray-500">
            Acercarte a tu meta es un proceso que debes disfrutar, por ello nos
            encargamos de que te diviertas mientras lo haces, a través de clases
            dinámicas e interactivas.
          </p>
        </div>
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
