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
const Navbar = () => {
  const pathname = usePathname();
  return (
   <div className="bg-white">
     <div className="container">
      <div className="flex flex-col">
        <div className="flex pb-3 mt-[10px] border-b border-border8">
          <p className="text-c989898 flex text-sm items-center font-medium">
            <CiLocationOn className="mr-3 text-lg mt-1" /> г. Санкт-Петербург,
            СВердское шоссе, д1
          </p>

          <a
            href="tel:+78987764554"
            className="text-c989898 flex text-sm items-center ml-[50px] font-medium"
          >
            <BsTelephone className="mr-3 text-lg mt-1" /> г. +7 (898) 776-45-54
          </a>
          <a
            href="mainto:Info@mail.ru"
            className="text-c989898 flex text-sm items-center ml-[50px] font-medium"
          >
            <CiMail className="mr-3 text-lg mt-1" /> Info@mail.ru
          </a>
        </div>
        <div className="flex justify-between mt-4 mb-3 items-center">
          <Image src={logo} alt="logo" className="w-[143px]" />
          <nav className="flex  items-center">
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

          <div className="w-[180px] h-[58px]">
            <Button text="Оставить заявку" />
          </div>
        </div>
      </div>
    </div>
   </div>
  );
};

export default Navbar;
