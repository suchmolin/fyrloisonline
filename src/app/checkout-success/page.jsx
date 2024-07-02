/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useContext, useEffect } from "react";
import { OpenModalContext } from "@/context/openModal";
export default function Page() {
  const { setCantCart, setCartInfo } = useContext(OpenModalContext);
  useEffect(() => {
    setCantCart(0);
    setCartInfo([]);
    localStorage.removeItem("cartInfo");
  }, []);
  return (
    <div className="w-full flex justify-center items-center">
      <div className="w-8/12 flex flex-col items-center py-20">
        <span className="text-6xl text-[#000b7a] py-2">🎉</span>
        <h2 className="text-3xl text-[#000b7a]">
          su compra ha sido procesada Exitosamente
        </h2>
        <p className="text-lg text-gray-500 py-2 text-center">
          Gracias por su compra, en breve recibira un correo con los detalles de
          su compra al email proporcionado, y será contactado en un lapso maximo
          de 48 horas, por un asesor para continuar con el proceso de
          inscripción.
        </p>
        <a href="/" className="text-center text-lg text-[#000b7a] underline">
          Volver a Fyrlois
        </a>
      </div>
    </div>
  );
}
