"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className="flex flex-row gap-12 max-md:hidden">
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ${
                pathname === link.href ? "font-bold border-b-2 border-green-800" : "hover:bg-green-400 p-1.5 rounded-xl"
              }`}   
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <ul className={`h-full gap-12 lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.key}>
            <Link
              href={link.href}
              className={`regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all ${
                pathname === link.href ? "font-bold border-b-2 border-white" : "hover:font-bold"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Login"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src={isMenuOpen ? "/menu.svg" : "/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      />
    </nav>
  );
};

export default Navbar;
