import Image from "next/image";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import FooterMenu from "../FooterMenu/page";

export default function Footer() {
  return (
    <div className="w-full min-h-[200px] flex flex-col items-center py-10">
      <div className="w-11/12 md:w-10/12 flex flex-col md:flex-row border-b-[1px] border-[#000b7a] py-0 md:py-10 gap-5 md:gap-0">
        <div className="w-4/12 flex flex-col gap-5">
          <div>
            <Image src="/img/1.png" alt="logo" width={100} height={38} />
          </div>
          <div className="">
            <ul className="flex gap-3">
              <li className="rounded-full text-[#000b7a] p-2 bg-gray-100 shadow-xl cursor-pointer hover:bg-[#90d400] hover:text-white transition-all duration-300">
                <FaFacebookF />
              </li>
              <li className="rounded-full text-[#000b7a] p-2 bg-gray-100 shadow-xl cursor-pointer hover:bg-[#90d400] hover:text-white transition-all duration-300">
                <FaTwitter />
              </li>
              <li className="rounded-full text-[#000b7a] p-2 bg-gray-100 shadow-xl cursor-pointer hover:bg-[#90d400] hover:text-white transition-all duration-300">
                <FaInstagram />
              </li>
              <li className="rounded-full text-[#000b7a] p-2 bg-gray-100 shadow-xl cursor-pointer hover:bg-[#90d400] hover:text-white transition-all duration-300">
                <FaLinkedinIn />
              </li>
            </ul>
          </div>
        </div>
        <FooterMenu />
      </div>
      <div className="w-10/12 pt-5 md:py-10 flex flex-col-reverse md:flex-row justify-between items-center gap-4 md:gap-0">
        <h3 className="text-xl text-[#000b7a]">
          Copyright © Fyr Lois LLC 2022
        </h3>
        <div className="flex gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/img/paypal.svg" alt="paypal logo" />
          {/* eslint-disable-next-line @next/next/no-img-element*/}
          <img src="/img/stripe.svg" alt="stripe logo" />
        </div>
      </div>
    </div>
  );
}
