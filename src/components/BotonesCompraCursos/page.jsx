"use client";
import { handleCheckout } from "@/checkoutCart";
import { OpenModalContext } from "@/context/openModal";
import { useContext } from "react";

export default function BotonesCompraCursos(props) {
  const { id, precio } = props;
  const { setCantCart, setCartInfo, setIsOpen } = useContext(OpenModalContext);

  const addCart = async (id) => {
    let cartInfo = await JSON.parse(localStorage.getItem("cartInfo"));

    if (cartInfo) {
      const index = cartInfo.findIndex((item) => item.id === id);
      if (index === -1) {
        cartInfo.push({ id, cantidad: 1, precio });
        localStorage.setItem("cartInfo", JSON.stringify(cartInfo));
      }
    } else {
      localStorage.setItem(
        "cartInfo",
        JSON.stringify([{ id, cantidad: 1, precio }])
      );
      cartInfo = [{ id, cantidad: 1, precio }];
    }
    setCantCart((prev) => prev + 1);

    setCartInfo(cartInfo);

    setIsOpen(true);
  };

  return (
    <div className="w-full flex flex-col gap-3 py-4 h-[170px]">
      <button
        onClick={() => addCart(id)}
        href="/courses"
        aria-label="TConoce nuestros cursos"
        className=" py-4 px-7 bg-[#ffa101] hover:bg-[#000b7a]  rounded-md text-bold text-white transition-all duration-200 font-bold text-xs md:text-base"
      >
        AGREGAR AL CARRITO
      </button>
      <button
        onClick={() => handleCheckout([{ id, cantidad: 1, precio }])}
        href="/about-us"
        aria-label="Acerca de Nosotros"
        className=" py-4 px-7 bg-[#fff] hover:bg-[#90d400] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white border-2 border-[#000b7a] hover:border-[#90d400] transition-all duration-200 font-bold text-xs md:text-base"
      >
        COMPRAR AHORA
      </button>
    </div>
  );
}
