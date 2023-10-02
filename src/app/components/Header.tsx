"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import FooterLogo from "../assets/icons/FooterLogo";
import HamClose from "../assets/icons/HamClose";
import HamOpen from "../assets/icons/HamOpen";
import clsx from "clsx";
import SolidDown from "../assets/icons/SolidDown";
import HeaderSubMenu from "./HeaderSubMenu";

const Header = () => {
  const [showList, setShowList] = useState<boolean>(false);
  const [showSubMenu, setShowSubMenu] = useState<{
    id: string;
    show: boolean;
  }>({
    id: "",
    show: false,
  });
  const [scrolled, setScrolled] = useState<boolean>(false);

  const handleShowSubMenu = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    if (showSubMenu.id === id) {
      setShowSubMenu({
        id: "",
        show: false,
      });
    } else {
      setShowSubMenu({
        id: id,
        show: true,
      });
    }
  };

  useEffect(() => {
    const delay = 250;
    let throttled = false;

    function getScrollY() {
      console.log(window.scrollY);
      if (window.scrollY > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    const throttleFn = () => {
      if (!throttled) {
        getScrollY();
        throttled = true;
        setTimeout(() => {
          throttled = false;
        }, delay);
      }
    };
    window.addEventListener("scroll", throttleFn);

    return () => window.removeEventListener("scroll", throttleFn);
  }, []);

  return (
    <header className="header__wrapper w-full h-full flex justify-center">
      <nav
        className={`nav__wrapper pt-4 px-4 z-40 lg:h-[5rem] lg:max-w-[1280px] lg:m-auto w-full fixed transform transition-all origin-top ease-in-out duration-500 ${clsx(
          showList ? "h-full bg-[#000]" : "bg-inherit h-[5rem]",
          scrolled && !showList ? "bg-[#1a1a1a] lg:pt-0" : "lg:pt-8 ",
        )} lg:flex lg:items-center lg:justify-between`}
      >
        <div className="flex justify-between items-center flex-wrap">
          <Link href="/">
            <FooterLogo />
          </Link>
          <div className="service_menu__wrapper flex items-center lg:hidden">
            <Link
              href="/"
              className={`mr-4 border-[2px] border-brand-yellow ${clsx(
                showList
                  ? "bg-[#000] text-brand-yellow hover:bg-brand-yellow focus:bg-brand-yellow hover:text-[#000] focus:text-[#000]"
                  : "bg-brand-yellow text-[#000] hover:bg-brand-grey focus:bg-brand-grey hover:text-brand-yellow focus:text-brand-yellow",
              )} rounded-full py-1 px-3 transition-colors ease-in-out duration-500 delay-0`}
            >
              Sign Up
            </Link>
            <button onClick={() => setShowList(!showList)}>
              {showList ? <HamClose /> : <HamOpen />}
            </button>
          </div>
        </div>

        <ul
          className={`flex flex-col lg:justify-center lg:items-center lg:w-[50%] lg:flex-row lg:scale-y-100 transform transition-all origin-top ease-in-out duration-500 ${
            showList ? "scale-y-100" : "scale-y-0"
          }`}
        >
          <li className="mx-4 my-3 lg:my-0">
            <Link
              href="#"
              className={`text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow`}
            >
              Features
            </Link>
          </li>
          <li className="mx-4 my-3 lg:my-0">
            <Link
              href="#"
              className={`text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow`}
            >
              Pricing
            </Link>
          </li>
          <li className="mx-4 my-3 lg:my-0">
            <Link
              href="#"
              className={`text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow`}
            >
              Download
            </Link>
          </li>
          <li className="mx-4 my-3 lg:my-0 lg:relative group">
            <Link
              href="#"
              onMouseEnter={(e) => handleShowSubMenu(e, "company")}
              onMouseLeave={(e) => handleShowSubMenu(e, "company")}
              className="z-20 flex justify-start items-center lg:justify-center lg:relative top-0 left-0 text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow"
            >
              <span className="inline-block relative mr-2">Company</span>
              <SolidDown
                rotate={showSubMenu.show && showSubMenu.id === "company"}
              />
            </Link>
            <HeaderSubMenu
              show={showSubMenu.show && showSubMenu.id === "company"}
              subMenuList={[
                "Contact",
                "About Us",
                "Careers",
                "Blog",
                "Media Kit",
              ]}
            />
          </li>
          <li className="mx-4 my-3 lg:my-0 lg:relative">
            <Link
              href="#"
              onMouseEnter={(e) => handleShowSubMenu(e, "support")}
              onMouseLeave={(e) => handleShowSubMenu(e, "support")}
              className="flex justify-start items-center lg:justify-center lg:relative top-0 left-0 text-[clamp(16px,4.5vw,20px)] w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow"
            >
              <span className="inline-block relative mr-2">Support</span>
              <SolidDown
                rotate={showSubMenu.show && showSubMenu.id === "support"}
              />
            </Link>
            <HeaderSubMenu
              show={showSubMenu.show && showSubMenu.id === "support"}
              subMenuList={[
                "Documentation",
                "Knowledge Base",
                "Commnuity",
                "Getting Started",
              ]}
            />
          </li>
          <li className="mx-4 my-5 lg:my-0">
            <Link
              href="/login"
              className="lg:hidden text-base lg:text-xs lg:text-sm xl:text-base w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue"
            >
              Login
            </Link>
          </li>
        </ul>
        <div className="justify-between items-center hidden lg:flex">
          <Link
            href="#"
            className="mr-4 text-base lg:text-xs lg:text-sm xl:text-base w-full text-[#fff] block hover:text-brand-blue focus:text-brand-blue lg:hover:text-brand-yellow lg:focus:text-brand-yellow`"
          >
            Login
          </Link>
          <Link
            href="/"
            className={`border-[2px] border-brand-yellow min-w-[107px] ${clsx(
              showList
                ? "bg-[#000] text-brand-yellow hover:bg-brand-yellow focus:bg-brand-yellow hover:text-[#000] focus:text-[#000]"
                : "bg-brand-yellow text-[#000] hover:bg-brand-grey focus:bg-brand-grey hover:text-brand-yellow focus:text-brand-yellow",
            )} rounded-2xl py-1 px-6 transition-colors ease-in-out duration-500 delay-0`}
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
