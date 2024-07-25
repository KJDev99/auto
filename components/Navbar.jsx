"use client";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Image from "next/image";
import logo from "@/assets/images/Logo.svg";
import Button from "./Button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiSearch } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
const Navbar = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  useEffect(() => {
    if (!isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isMenuOpen]);
  useEffect(() => {
    setIsMenuOpen((prev) => !prev);
  }, [pathname]);
  return (
    <div className="bg-white">
      <div className="container">
        <div className="flex flex-col">
          <div className="flex pb-3 mt-[10px] border-b border-border8 max-md:hidden">
            <p className="text-c989898 flex text-sm items-center font-medium">
              <CiLocationOn className="mr-3 text-lg mt-1" /> г. Санкт-Петербург,
              СВердское шоссе, д1
            </p>

            <a
              href="tel:+78987764554"
              className="text-c989898 flex text-sm items-center ml-[50px] font-medium"
            >
              <BsTelephone className="mr-3 text-lg mt-1" /> г. +7 (898)
              776-45-54
            </a>
            <a
              href="mainto:Info@mail.ru"
              className="text-c989898 flex text-sm items-center ml-[50px] font-medium"
            >
              <CiMail className="mr-3 text-lg mt-1" /> Info@mail.ru
            </a>
          </div>
          <div className="flex justify-between mt-4 mb-3 items-center">
            <Image
              src={logo}
              alt="logo"
              className="w-[143px] max-md:w-[112px]"
            />
            <nav className="flex  items-center max-md:hidden">
              <div className="relative flex flex-col items-center h-max mx-[18px] ">
                <Link href="/">Главная</Link>
                {pathname === "/" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="relative flex flex-col items-center h-max mx-[18px]">
                <Link href="/katalog">Каталог</Link>
                {pathname === "/katalog" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="relative flex flex-col items-center h-max mx-[18px]">
                <Link href="/about">О нас</Link>
                {pathname === "/about" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="relative flex flex-col items-center h-max mx-[18px]">
                <Link href="/news">Новости</Link>
                {pathname === "/news" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="relative flex flex-col items-center h-max mx-[18px]">
                <Link href="/contacts">Контакты</Link>
                {pathname === "/contacts" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="relative flex flex-col items-center h-max mx-[18px]">
                <Link href="/favorites">Избранные</Link>
                {pathname === "/favorites" && (
                  <div className="absolute bottom-[-6px] left-1/2 transform -translate-x-1/2 w-[35px] h-[2px] bg-red " />
                )}
              </div>
              <div className="bg-bgwhite flex items-center justify-between p-4 ml-3 mr-5">
                <input
                  type="text"
                  className="bg-transparent border-none outline-none text-c989898"
                  placeholder="Поиск по названию"
                />
                <FiSearch className="cursor-pointer text-c989898" />
              </div>
              <div className="bg-bgwhite flex items-center justify-between p-4 mr-1">
                <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
              </div>
              <div className="bg-bgwhite flex items-center justify-between p-4">
                <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
              </div>
            </nav>

            <div className="w-[180px] h-[58px] max-md:hidden">
              <Button text="Оставить заявку" />
            </div>
            {isMenuOpen ? (
              <RxHamburgerMenu
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            ) : (
              <IoCloseSharp
                className="text-2xl md:hidden cursor-pointer"
                onClick={() => setIsMenuOpen((prev) => !prev)}
              />
            )}
            {!isMenuOpen && (
              <div className="fixed top-[65px] left-0 w-full h-screen bg-white z-[100] md:hidden flex flex-col">
                <div className="bg-bgwhite flex items-center justify-between p-4 ml-3 mr-5 mt-5">
                  <input
                    type="text"
                    className="bg-transparent border-none outline-none text-c989898"
                    placeholder="Поиск по названию"
                  />
                  <FiSearch className="cursor-pointer text-c989898" />
                </div>
                <nav
                  className={`flex flex-col justify-between mx-5 my-3 border-b pb-[10px] ${
                    pathname == "/" ? "border-red" : "border-[#EBEBEB]"
                  }`}
                >
                  <Link
                    href="/"
                    className={`text-sm font-medium ${
                      pathname == "/" ? "text-red" : "text-[#202020]"
                    }`}
                  >
                    Главная
                  </Link>
                </nav>
                <nav
                  className={`flex flex-col justify-between mx-5 my-3 border-b pb-[10px] ${
                    pathname == "/katalog" ? "border-red" : "border-[#EBEBEB]"
                  }`}
                >
                  <Link
                    href="/katalog"
                    className={`text-sm font-medium ${
                      pathname == "/katalog" ? "text-red" : "text-[#202020]"
                    }`}
                  >
                    Каталог
                  </Link>
                </nav>
                <nav
                  className={`flex flex-col justify-between mx-5 my-3 border-b pb-[10px] ${
                    pathname == "/news" ? "border-red" : "border-[#EBEBEB]"
                  }`}
                >
                  <Link
                    href="/news"
                    className={`text-sm font-medium ${
                      pathname == "/news" ? "text-red" : "text-[#202020]"
                    }`}
                  >
                    Новости
                  </Link>
                </nav>
                <nav
                  className={`flex flex-col justify-between mx-5 my-3 border-b pb-[10px] ${
                    pathname == "/contacts" ? "border-red" : "border-[#EBEBEB]"
                  }`}
                >
                  <Link
                    href="/contacts"
                    className={`text-sm font-medium ${
                      pathname == "/contacts" ? "text-red" : "text-[#202020]"
                    }`}
                  >
                    Контакты
                  </Link>
                </nav>
                <nav
                  className={`flex flex-col justify-between mx-5 my-3 border-b pb-[10px] ${
                    pathname == "/favorites" ? "border-red" : "border-[#EBEBEB]"
                  }`}
                >
                  <Link
                    href="/favorites"
                    className={`text-sm font-medium ${
                      pathname == "/favorites" ? "text-red" : "text-[#202020]"
                    }`}
                  >
                    Избранные
                  </Link>
                </nav>
                <nav className="flex flex-col font-semibold text-[#202020] mx-5">
                  <h3 className="text-lg mb-3 max-md:text-sm max-md:mb-2">
                    Контакты
                  </h3>
                  <div className="flex items-center mb-5 max-md:mb-[15px]">
                    <CiLocationOn className="mr-2" />
                    <span className="text-sm max-md:text-xs">
                      г. Москва, ул. Подольская, д. 12
                    </span>
                  </div>
                  <div className="flex items-center mb-5 max-md:mb-[15px]">
                    <BsTelephone className="mr-2" />
                    <span className="text-sm max-md:text-xs">
                      +7 (495) 123-45-67
                    </span>
                  </div>
                  <div className="flex items-center mb-5 max-md:mb-[15px]">
                    <CiMail className="mr-2" />
                    <span className="text-sm max-md:text-xs">
                      info@example.com
                    </span>
                  </div>
                  <div className="flex">
                    <div className="bg-[#F6F6F6] flex items-center justify-between p-4 mr-1">
                      <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
                    </div>
                    <div className="bg-[#F6F6F6] flex items-center justify-between p-4">
                      <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
                    </div>
                  </div>
                </nav>
                <div className="w-full h-[60px] px-5 mt-5">
                  <Button text="Оставить заявку" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
