import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
export default function MasInfoContactUs() {
  return (
    <>
      <div className="py-20 text-center flex flex-col items-center">
        <h2 className="text-[#000b7a] text-4xl font-bold py-4">
          ¿Necesitas más información?
        </h2>
        <p className="text-gray-500 w-8/12">
          Si quieres contactarnos directamente, puedes hacerlo através de estas
          vías.
        </p>
      </div>
      <div className="w-11/12 flex gap-10 justify-center">
        <div className="w-3/12 rounded-2xl shadow-xl p-10">
          <h4 className="text-2xl text-[#000b7a] font-bold py-4">Telefono</h4>
          <h5 className="text-[#90d400] text-xl font-bold py-1">ORLANDO</h5>
          <p className="text-[#000b7a] text-2xl">+1 (305) 510-5259</p>
          <h5 className="text-[#90d400] text-xl font-bold py-1">DIRECCIÓN</h5>
          <p className="text-[#000b7a] text-lg">
            928 East Osceola Parkway, Kissimmee, FL 34744
          </p>
        </div>
        <div className="w-3/12 rounded-2xl shadow-xl p-10">
          <h4 className="text-2xl text-[#000b7a] font-bold py-4">Email</h4>
          <h5 className="text-[#90d400] text-xl font-bold py-1">ORLANDO</h5>
          <p className="text-[#000b7a] text-2xl hover:text-[#90d400] cursor-pointer">
            Info@fyrlois.us
          </p>
        </div>
        <div className="w-3/12 rounded-2xl shadow-xl p-10">
          <h4 className="text-2xl text-[#000b7a] font-bold py-4">
            Redes Sociales
          </h4>
          <p className="text-[#000b7a] text-xl py-1 flex gap-2 items-center cursor-pointer hover:text-[#90d400]">
            <span className="p-2 rounded-full bg-[#90d400] text-white ">
              <FaFacebookF />
            </span>
            Fyr Lois USA
          </p>
          <p className="text-[#000b7a] text-xl py-1 flex gap-2 items-center cursor-pointer hover:text-[#90d400]">
            <span className="p-2 rounded-full bg-[#90d400] text-white ">
              {" "}
              <FaTwitter />
            </span>
            Fyrloisoficial
          </p>
          <p className="text-[#000b7a] text-xl py-1 flex gap-2 items-center cursor-pointer hover:text-[#90d400]">
            <span className="p-2 rounded-full bg-[#90d400] text-white ">
              <FaInstagram />
            </span>
            Fyrloisusa
          </p>
          <p className="text-[#000b7a] text-xl py-1 flex gap-2 items-center cursor-pointer hover:text-[#90d400]">
            <span className="p-2 rounded-full bg-[#90d400] text-white ">
              <FaLinkedinIn />
            </span>
            Fyr Lois Language Institute
          </p>
        </div>
      </div>
    </>
  );
}
