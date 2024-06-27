import Image from "next/image";
import { IoCartOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import SubMenuNav from "../SubMenuNav/page";
import Link from "next/link";

export default function MenuHeader() {
  return (
    <>
      <nav className="relative flex justify-center h-[90px] border-b-2 border-[#000b7a] items-center">
        <div className="w-10/12 flex justify-between items-center">
          <div className="flex gap-10 items-center">
            <a
              href="/"
              className="relative h-[35px] md:h-[65px] w-[100px] md:w-[180px]"
            >
              <Image
                src="/img/1.png"
                alt="logo"
                layout="fill"
                objectFit="cover"
                loading="eager"
              />
            </a>
            <div className="hidden lg:flex">
              <SubMenuNav />
            </div>
          </div>
          <div className="flex gap-3 md:gap-10 lg:gap-20 items-center justify-center">
            <div className="flex h-full items-center">
              <IoCartOutline className="text-3xl text-[#000b7a] scale-x-[-1] cursor-pointer" />
            </div>
            <div className="flex items-center h-full">
              <Link
                href="/courses"
                aria-label="Nuestros cursos"
                className="py-2 px-4 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-[#000b7a] hover:text-white transition-all duration-500 "
              >
                Cursos
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <div
        id="navResp"
        className="block lg:hidden relative w-full py-4 bg-gray-100"
      >
        <SubMenuNav />
      </div>
    </>
  );
}
