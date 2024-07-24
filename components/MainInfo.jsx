import innerBg1 from "@/assets/images/innerbgflag.webp";
import innerBg2 from "@/assets/images/innerbg.webp";
import itemImg1 from "@/assets/images/infomenu1.svg";
import itemImg2 from "@/assets/images/infomenu2.svg";
import itemImg3 from "@/assets/images/infomenu3.svg";
import itemImg4 from "@/assets/images/infomenu4.svg";
import Image from "next/image";
import InfoMenuItem from "./InfoMenuItem";
import Button from "./Button";
const MainInfo = () => {
  return (
    <div className="inner_bg relative w-full  pb-[100px]">
      <Image
        src={innerBg1}
        alt="Chap tomondagi rasm"
        className="absolute top-[-128px] left-0 z-[-1] "
      />
      <Image
        src={innerBg2}
        alt="O'ng tomondagi rasm"
        className="absolute top-[50px] right-0 z-[-1]"
      />
      <div className="container  pt-[230px] ">
        <div className="grid grid-cols-4 gap-6 mb-[50px]">
          <InfoMenuItem
            img={itemImg1}
            text="Работаем под ключ"
            title="У нас вы можете приобрести автомобиль напрямую у официального автодилера, без посредников и переводчиков."
          />
          <InfoMenuItem
            img={itemImg2}
            text="онлайн-чат 24/7"
            title="Мы всегда на связи, чтобы ответить на ваши вопросы и помочь вам с выбором."
            top={true}
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
            top={true}
          />
        </div>
        <div className="grid grid-cols-2 gap-6">
          <p className="text-[#989898]">
            Мы имеем огромный опыт работы с автомобильным рынком Кореи и
            тщательно отбираем автомобили для наших клиентов, учитывая их
            потребности и бюджет. Мы работаем только с надежными поставщиками и
            перевозчиками, чтобы обеспечить безопасность и надежность доставки.
          </p>
          <div className="flex flex-col ml-[140px]">
            <p className="text-black mb-6 font-semibold">
              Приобретайте качественный автомобиль по выгодным условиям с нами –
              мы обеспечим успешную и приятную покупку.
            </p>
            <div className="w-[200px] h-[70px]">
              <Button text="Оставить заявку" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;
