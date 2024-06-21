export default function FooterMenu() {
  return (
    <div className="w-12/12 md:w-8/12 pb-5 md:pb-0">
      <h4 className="text-[#000b7a] text-base md:text-xl py-3">MENU WEBS</h4>
      <div className="text-gray-500 flex gap-7 md:gap-20 text-sm md:text-lg">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Home
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Conócenos
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Cursos
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Eventos
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Teachers
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Blog
          </li>
        </ul>
        <ul className="flex flex-col gap-4">
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Contacto
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300">
            Políticas de privacidad
          </li>
          <li className="hover:text-[#90d400] cursor-pointer transition-all duration-300"></li>
        </ul>
      </div>
    </div>
  );
}
