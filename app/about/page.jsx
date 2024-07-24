import InfoMenuItem from "@/components/InfoMenuItem";
import MainForm from "@/components/MainForm";
import React from "react";
import itemImg1 from "@/assets/images/infomenu1.svg";
import itemImg2 from "@/assets/images/infomenu2.svg";
import itemImg3 from "@/assets/images/infomenu3.svg";
import itemImg4 from "@/assets/images/infomenu4.svg";
import AboutContent from "@/components/AboutContent";

const page = () => {
  return (
    <div className="container">
      <p className="text-[#050B20] text-sm mt-9 mb-2 font-medium">
        Главная/О нас
      </p>
      <h2 className="text-[28px] text-[#202020] font-black mb-[30px]">
        О нашей компании
      </h2>
      <p className="text-[#989898] font-medium mb-[10px]">
        Добро пожаловать на сайт BOOM-AVTO, где вы можете найти лучшие
        предложения по продаже подержанных автомобилей!
      </p>
      <p className="text-[#989898] font-medium mb-[10px]">
        Мы имеем огромный опыт работы с автомобильным рынком Кореи и тщательно
        отбираем автомобили для наших клиентов, учитывая их потребности и
        бюджет. Мы работаем только с надежными поставщиками и перевозчиками,
        чтобы обеспечить безопасность и надежность доставки.
      </p>
      <p className="text-[#989898] font-medium mb-[40px]">
        С нами Вы всегда будете в курсе всех новинок и событий!
      </p>
      <AboutContent />
      <div className="flex flex-col mt-[100px]">
        <h2 className="text-[28px] text-[#202020] font-black mb-[30px]">
          Почему стоит выбрать нас?
        </h2>
        <div className="grid grid-cols-4 gap-6 mb-[100px]">
          <InfoMenuItem
            img={itemImg1}
            text="Работаем под ключ"
            title="У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков."
          />
          <InfoMenuItem
            img={itemImg2}
            text="онлайн-чат 24/7"
            title="Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором."
          />
          <InfoMenuItem
            img={itemImg3}
            text="Упрощенный выбор авто"
            title="мы создали этот сайт, чтобы сделать поиск автомобиля по вашим критериям максимально простым и удобным."
          />
          <InfoMenuItem
            img={itemImg4}
            text="Доставка"
            title="поставка в любой регион РФ, прямая связь без посредников"
          />
        </div>
      </div>
      <MainForm />
    </div>
  );
};

export default page;
