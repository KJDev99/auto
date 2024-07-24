import { CiLocationOn, CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import { SlSocialVkontakte } from "react-icons/sl";

const MainForm = () => {
  return (
    <div className="container mb-[100px]">
      <div className="flex justify-between">
        <div className="w-1/2">
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
        <div className="w-1/2">
          <div className="bg-form2 p-10 mt-10">
            <h3 className="text-[28px] font-black mb-7 uppercase">Контакты</h3>
            <div className="flex items-center mb-6">
              <CiLocationOn className="mr-2 text-red font-semibold" />
              <span className="text-[15px] font-semibold">
                г. Санкт-Петербург
                <span className="text-[#989898]">
                  &nbsp;СВердское шоссе, д1
                </span>
              </span>
            </div>
            <div className="flex items-center mb-6">
              <BsTelephone className="mr-2 text-red font-semibold" />
              <span className="text-[15px] font-semibold">
                +7 (495) 123-45-67
              </span>
            </div>
            <div className="flex items-center mb-6">
              <CiMail className="mr-2 text-red font-semibold" />
              <span className="text-[15px] font-semibold">
                info@example.com
              </span>
            </div>
            <div className="flex mb-[124px]">
              <div className="bg-[#F6F6F6] flex items-center justify-between p-4 mr-1">
                <FaWhatsapp className="cursor-pointer text-c989898 text-xl" />
              </div>
              <div className="bg-[#F6F6F6] flex items-center justify-between p-4">
                <SlSocialVkontakte className="cursor-pointer text-c989898 text-xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainForm;
