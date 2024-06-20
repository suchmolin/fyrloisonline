import Image from "next/image";
import DropDownMenu from "../DropDownMenu/page";

export default function NavBar() {
  return (
    <nav className="navBar h-[70px] px-10 bg-gray-100 flex justify-between items-center relative">
      <Image src="/img/1.png" alt="logo" width={137} height={53} className="" />
      <DropDownMenu />
    </nav>
  );
}
