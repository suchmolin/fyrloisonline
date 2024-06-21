"use client";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function TrabajamosCon() {
  const imagenes = [
    {
      img: "/img/empresa1.png",
      alt: "empresa 1",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa2.png",
      alt: "empresa 12",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa3.png",
      alt: "empresa 3",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa4.png",
      alt: "empresa 4",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa5.png",
      alt: "empresa 5",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa6.png",
      alt: "empresa 6",
      width: 150,
      height: 74,
    },
    {
      img: "/img/empresa7.png",
      alt: "empresa 7",
      width: 150,
      height: 74,
    },
  ];
  return (
    <>
      <Fade
        triggerOnce
        className="bottomDivider w-full h-[300px] bg-[#fafafa] text-[#000b7a] flex flex-col items-center justify-center text-center text-2xl px-4"
      >
        <div>
          <h3 className="text-xl lg:text-2xl w-full">
            TRABAJAMOS CON COMPAÑIAS COMO
          </h3>
          <div className="w-full flex gap-3 justify-center py-7">
            {imagenes.map((imagen, index) => (
              <div key={index}>
                <Image
                  src={imagen.img}
                  alt={imagen.alt}
                  width={imagen.width}
                  height={imagen.height}
                />
              </div>
            ))}
          </div>
        </div>
      </Fade>
    </>
  );
}
