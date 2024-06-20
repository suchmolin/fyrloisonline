import { Button } from "flowbite-react";
import { IoCartOutline } from "react-icons/io5";
export default function MenuHeader() {
  return (
    <nav className=" flex justify-between h-[60px] border-b-2 border-[#000b7a] px-52">
      <ul className="flex justify-center items-center h-full text-[#000b7a]">
        <li className="mx-4">Home</li>

        <li className="mx-4">Cursos</li>

        <li className="mx-4">Conócenos</li>

        <li className="mx-4">Contacto</li>

        <li className="mx-4">Test</li>
      </ul>
      <div className="flex gap-20 items-center justify-center">
        <div className="flex h-full items-center">
          <IoCartOutline className="text-3xl text-[#000b7a] scale-x-[-1] cursor-pointer" />
        </div>
        <div className="flex items-center h-full">
          <button
            aria-label="Nuestros cursos"
            className="py-2 px-4 bg-[#ffa101] hover:bg-[#000b7a] hover:mb-1 rounded-md text-bold text-white transition-all duration-500 "
          >
            Cursos
          </button>
        </div>
      </div>
    </nav>
  );
}
