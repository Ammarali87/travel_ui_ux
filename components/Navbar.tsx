"use client"
import { useState } from "react";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>

      <ul className={` flex flex-row  gap-12 max-md:hidden `}>
        {NAV_LINKS.map((link) => (
          <Link  
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            {link.label} 
          </Link>
        ))}
      </ul>
      <ul className={` h-full gap-12 lg:flex ${isMenuOpen ? "block" : "hidden"}`}>
        {NAV_LINKS.map((link) => (
          <Link  
            href={link.href} 
            key={link.key} 
            className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
            onClick={() => setIsMenuOpen(false)} // Close menu on link click
          >
            {link.label} 
          </Link>
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
        onClick={() => setIsMenuOpen((prev) => !prev)} // Toggle menu
        aria-label="Toggle menu"
        aria-expanded={isMenuOpen}
      />
    </nav>
  );
}

export default Navbar;