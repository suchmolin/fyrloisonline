"use client";
import { Dropdown } from "flowbite-react";
import Link from "next/link";

import { TfiWorld } from "react-icons/tfi";

import Image from "next/image";

export default function DropDownMenu() {
  const label = <TfiWorld className="text-2xl text-[#000b7a]" />;

  return (
    <>
      <Dropdown
        ariaLabel="menu"
        name="menu"
        label={label}
        inline
        size="sm"
        className=""
      >
        <Dropdown.Item as={Link} href="https://fyrlois.us">
          <span className="flex gap-1">
            <Image
              width={20}
              height={20}
              src="/img/united-states.png"
              alt="united states flag"
            />{" "}
            USA
          </span>
        </Dropdown.Item>
        <Dropdown.Item as={Link} href="https://fyrlois.com.ve">
          <span className="flex gap-1">
            <Image
              width={20}
              height={20}
              src="/img/venezuela.png"
              alt="united states flag"
            />{" "}
            Venezuela
          </span>
        </Dropdown.Item>
      </Dropdown>
    </>
  );
}
