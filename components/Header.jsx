"use client";

import { useEffect, useState } from "react";

//components

import ThemeToggler from "./ThemeToggler";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./ui/Logo";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Update state based on scroll position
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
    className={`
      ${isScrolled ? 'py-4 bg-white shadow-lg dark:bg-accent ' : 'py-6 dark:bg-transparent'} 
      ${pathname === '/' ? 'bg-[#fef9f5]' : ''} sticky top-0 z-30 transition-all
    `}
  >
      <div className="container mx-auto ">
        <div className="flex justify-between item-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* {nav} */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transiton-all"
              underlineStyles="absolute left-0 top-full h-[2px] bg-primary w-full"
            />
            <ThemeToggler />
            {/* {Mobile View} */}
            <div className="xl:hidden">
              <MobileNav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
