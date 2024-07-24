import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const page = () => {
  return (
    <div className="flex flex-col">
      <div className="container">
        <p className="text-[#050B20] text-sm mt-9 mb-2 font-medium">
          Главная/Контакты
        </p>
        <div className="flex justify-between mb-[66px]">
          <div className="w-1/2">
            <h3 className="text-[28px] font-black mb-7 uppercase">
              Контактная информация
            </h3>
            <div className="flex flex-col font-medium mb-6">
              <p className="text-[#989898] text-sm mb-1">Телефон</p>
              <a className="text text-[#202020]" href="tel:+78987764554">
                +7 (898) 776-45-54
              </a>
            </div>
            <div className="flex flex-col font-medium mb-6">
              <p className="text-[#989898] text-sm mb-1">Электронная почта</p>
              <a className="text text-[#202020]" href="mailto:Info@mail.ru">
                Info@mail.ru
              </a>
            </div>
            <div className="flex flex-col font-medium mb-6">
              <p className="text-[#989898] text-sm mb-1">Адрес</p>
              <a className="text text-[#202020]">
                г. Санкт-Петербург, СВердское шоссе, д1
              </a>
            </div>

            <div className="flex mb-[124px]">
              <div className="bg-[#F6F6F6] flex font-medium justify-between p-4 mr-1">
                <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
              </div>
              <div className="bg-[#F6F6F6] flex font-medium justify-between p-4">
                <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
              </div>
            </div>
          </div>
          <div className="w-1/2 flex justify-end">
            <div className="bg-form1 pl-[60px] pr-[80px] flex flex-col">
              <h2 className="text-[28px] text-white font-black mt-[44px] text-center mb-8">
                Оставьте заявку
              </h2>
              <p className="text-xs text-white mb-1 font-semibold">Ваше имя</p>
              <input
                type="text"
                className="h-[65px] w-full border border-white outline-none bg-transparent rounded-[5px] px-5 text-"
                placeholder="имя"
              />
              <p className="text-xs text-white mb-1 mt-3 font-semibold">
                Номер телефона
              </p>
              <input
                type="text"
                className="h-[65px] w-full border border-white outline-none bg-transparent rounded-[5px] px-5 text-white"
                placeholder="+7(___) ___-__-__"
              />
              <button className="bg-white text-red w-full h-[70px] mt-5 mb-3 rounded-[5px] border-none outline-none font-semibold">
                Оставить заявку
              </button>
              <p className="text-[13px] mb-[50px] text-center text-white font-semibold px-5">
                Нажимая на кнопку, вы даете согласие на обработку персональных
                данных
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://yandex.uz/map-widget/v1/?ll=30.304908%2C59.917966&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1MzE1MjgwNBIr0KDQvtGB0YHQuNGPLCDQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsyIKDRSE8kEVNMFvQg%2C%2C&z=10.28"
          width="100%"
          height="366"
          frameborder="1"
          allowfullscreen="true"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
