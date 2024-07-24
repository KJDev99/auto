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
        <div className="grid grid-cols-5 pt-[60px] pb-[40px]">
          <div className="gird-cols-1">
            <Image src={logo} alt="logo" className="w-[143px]" />
          </div>
          <div className="grid-cols-1">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3">Компания</h3>
              <Link className="mb-3" href="/">
                Главная
              </Link>
              <Link className="mb-3" href="/katalog">
                Каталог
              </Link>
              <Link className="mb-3" href="/about">
                О нас
              </Link>
              <Link className="mb-3" href="/news">
                Новости
              </Link>
              <Link className="mb-3" href="/contacts">
                Контакты
              </Link>
              <Link className="mb-3" href="/favorites">
                Избранные
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3">марки</h3>
              <Link className="mb-3" href="/">
                Honda
              </Link>
              <Link className="mb-3" href="/catalog">
                Hyndai
              </Link>
              <Link className="mb-3" href="/about">
                Infiniti
              </Link>
              <Link className="mb-3" href="/news">
                Lexus
              </Link>
              <Link className="mb-3" href="/contacts">
                Mazda
              </Link>
              <Link className="mb-3" href="/favorites">
                Nissan
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3">Типы авто</h3>
              <Link className="mb-3" href="/">
                Седан
              </Link>
              <Link className="mb-3" href="/catalog">
                Хэтчбек
              </Link>
              <Link className="mb-3" href="/about">
                внедорожник
              </Link>
              <Link className="mb-3" href="/news">
                Гибрид
              </Link>
              <Link className="mb-3" href="/contacts">
                Электрические
              </Link>
              <Link className="mb-3" href="/favorites">
                Купе
              </Link>
            </nav>
          </div>
          <div className="grid-cols-1">
            <nav className="flex flex-col font-semibold text-white ">
              <h3 className="text-lg mb-3">Контакты</h3>
              <div className="flex items-center mb-5">
                <CiLocationOn className="mr-2" />
                <span className="text-sm">
                  г. Москва, ул. Подольская, д. 12
                </span>
              </div>
              <div className="flex items-center mb-5">
                <BsTelephone className="mr-2" />
                <span className="text-sm">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center mb-5">
                <CiMail className="mr-2" />
                <span className="text-sm">info@example.com</span>
              </div>
              <div className="flex">
                <div className="bg-[#333333] flex items-center justify-between p-4 mr-1">
                  <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
                </div>
                <div className="bg-[#333333] flex items-center justify-between p-4">
                  <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
                </div>
              </div>
            </nav>
          </div>
        </div>
        <p className="text-center pb-[30px] text-xs text-white">
          Политика и конфиденциальность
        </p>
        <div
          className="absolute right-0 bottom-[30px] flex flex-col items-end cursor-pointer"
          onClick={handleScrollToTop}
        >
          <div className="rounded-full h-16 w-16 flex items-center justify-center border border-white">
            <Image src={footerTop} alt="footerTop" />
          </div>
          <p className="mt-5 text-white  text-xs">Сделано в UserTech</p>
        </div>
      </div>
    </div>
  );
}
