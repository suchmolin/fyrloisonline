/* eslint-disable @next/next/no-img-element */

import Image from "next/image";
import DropDownMenu from "../DropDownMenu/page";

export default function NavBar() {
  return (
    <nav className="navBar h-[70px] px-10 bg-gray-100 flex justify-between items-center relative">
      <img
        src="/img/1.png"
        alt="logo"
        width={137}
        height={53}
        className="hover:scale-105 transition-all duration-500 cursor-pointer"
      />
      <DropDownMenu />
    </nav>
  );
}
