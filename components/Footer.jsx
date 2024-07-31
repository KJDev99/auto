"use client";
import Image from "next/image";
import logo from "@/assets/images/Logowhite.svg";
import footerTop from "@/assets/images/footerTop.svg";
import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";
import { useState } from "react";
export default function Footer() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsScrolled(true);
    setTimeout(() => setIsScrolled(false), 500);
  };
  return (
    <div className="bg-black ">
      <div className="container relative">
        <div className="grid grid-cols-5 max-md:grid-cols-6 pt-[60px] pb-[40px] max-md:pt-5 max-md:mb-[30px]">
          <div className="gird-cols-1 max-md:col-span-6 max-md:mb-[30px]">
            <Image src={logo} alt="logo" className="w-[143px]" />
          </div>
          <div className="grid-cols-1 max-md:col-span-2">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3 max-md:text-sm max-md:mb-2">
                Компания
              </h3>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/">
                Главная
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/katalog">
                Каталог
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/about">
                О нас
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/news">
                Новости
              </Link>
              <Link
                className="mb-3 max-md:text-xs max-md:mb-2"
                href="/contacts"
              >
                Контакты
              </Link>
              <Link
                className="mb-3 max-md:text-xs max-md:mb-2"
                href="/favorites"
              >
                Избранные
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1 max-md:col-span-2">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3 max-md:text-sm max-md:mb-2">Марки</h3>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/">
                Honda
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/catalog">
                Hyndai
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/about">
                Infiniti
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/news">
                Lexus
              </Link>
              <Link
                className="mb-3 max-md:text-xs max-md:mb-2"
                href="/contacts"
              >
                Mazda
              </Link>
              <Link
                className="mb-3 max-md:text-xs max-md:mb-2"
                href="/favorites"
              >
                Nissan
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1 max-md:col-span-2">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3 max-md:text-sm max-md:mb-2">
                Типы авто
              </h3>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/">
                Седан
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/catalog">
                Хэтчбек
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/about">
                Внедорожник
              </Link>
              <Link className="mb-3 max-md:text-xs max-md:mb-2" href="/news">
                Гибрид
              </Link>

              <Link
                className="mb-3 max-md:text-xs max-md:mb-2"
                href="/favorites"
              >
                Купе
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1 max-md:col-span-6">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3 max-md:text-sm max-md:mb-2">
                Контакты
              </h3>
              <div className="flex items-center mb-5 max-md:mb-[15px]">
                <CiLocationOn className="mr-2" />
                <span className="text-sm max-md:text-xs">
                  Москва, ул. Подольская, д. 12
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
                <span className="text-sm max-md:text-xs">info@example.com</span>
              </div>
              <div className="flex">
                <div className="bg-[#333333] flex items-center justify-between p-4 mr-1">
                  <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
                </div>
                <div className="bg-[#333333] flex items-center justify-between p-4">
                  <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <p className="text-center pb-[30px] text-xs text-white max-md:text-left font-semibold">
          Политика и конфиденциальность
        </p>
        <div
          className="absolute right-0 bottom-[30px] flex flex-col items-end cursor-pointer max-md:right-5"
          onClick={handleScrollToTop}
        >
          <div className="rounded-full h-16 w-16 flex items-center justify-center border border-white">
            <Image src={footerTop} alt="footerTop" />
          </div>
          <p className="mt-5 text-white  text-xs font-semibold">Сделано в UserTech</p>
        </div>
      </div>
    </div>
  );
}
