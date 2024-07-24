"use client";
import image from "@/assets/images/kattaimg.png";
import imagewarn from "@/assets/images/warning.svg";
import carmore from "@/assets/images/carmore.svg";
import InfoBlock from "@/components/InfoBlock";
import Image from "next/image";
import { FaAngleRight } from "react-icons/fa6";

const page = () => {
  const cardNewsData = [
    {
      image: image,
      title: "ТОП-1 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ",
      text: "Японский автомобиль является идеальным вариантом для семейного...",
      date: "11 Июля 2024",
    },
  ];
  return (
    <div className="container mb-[100px]">
      <div className="flex gap-6">
        <div className="w-4/6">
          <p className="text-[#050B20] text-sm mt-9 mb-2 font-medium">
            Главная/Новости/ {cardNewsData[0].title}
          </p>
          <h2 className="mb-[15px] text-[#202020] text-[28px] font-black">
            {cardNewsData[0].title}
          </h2>
          <p className="text-[#989898] mb-[22px] text-sm font-medium">
            7 Июля 2024
          </p>
          <Image
            src={cardNewsData[0].image}
            alt="{cardNewsData[0].title}"
            className="h-[383px] w-full rounded-[15px] object-cover"
          />
          <p className="mt-[25px] mb-[30px] text-[#989898] font-medium">
            С начала весны 2022 года российский автомобильный рынок
            подвергся кардинальным изменениям. Экономические ограничения и
            политические разногласия спровоцировали прекращение работы многих
            иностранных брендов, остановку заводов, закрытие представительств.
            Уход поддержали не только европейские и американские компании. К
            санкциям присоединились и Японские торговые предприятия. Из-за этого
            российские дилеры начали масштабную диверсификацию на Корейский и
            Китайский рынки. Ниже рассмотрим как осуществляется импорт авто из
            Южной Кореи, начав с доступных способов покупки.
          </p>
          <h3 className="text-[#202020] font-bold text-lg">
            Покупка у официального дилера
          </h3>
          <p className="mt-[15px] mb-[30px] text-[#989898] font-medium">
            Обычно дилеры реализуют в первую очередь автомобили, которые
            произведены заводами, расположенными на территории РФ. При этом,
            есть большая доля и импортных сборок. Такой вариант покупки
            сопровождается стандартными особенностями работы с официальными
            представителями. В их числе «навязывание» простых опций по
            завышенной цене, увеличенная наценка из-за повышенного спроса, др.
          </p>
          <div className="flex flex-col p-[18px] border border-[#E6E6E6] rounded-[15px]">
            <div className="flex items-center ">
              <Image src={imagewarn} alt="warn" />
              <h4 className="mx-5 text-[#202020] font-bold">Внимание!</h4>
            </div>
            <p className="my-[10px] text-[#989898] font-medium">
              Важно отметить, что акцент на импорт авто из Южной Кореи
              подтверждает и официальная статистика, в числе которых и данные
              южнокорейской таможни. В первой половине 2022 года объемы продаж
              выросли в шесть раз.
            </p>
            <p className="text-[#989898] font-medium">
              Повышение показателей обусловлено и тем, что южнокорейские
              компании не могут обеспечить производительность заводов,
              соответствующую запросам потребителей, проживающих на территории
              России из-за проблем с логистикой. Поэтому, многие покупают машины
              напрямую из Южной Кореи, выбирая более выгодные условия.
            </p>
          </div>
        </div>
        <div className="w-2/6 mt-[190px] p-5 shadow-lg h-max rounded-[15px]">
          <h3 className="text-[#202020] font-semibold text-[20px] pr-[100px]">
            Читайте другие статьи в нашем блоге:
          </h3>
          <div className="flex justify-between mt-5 pb-3 border-b border-[#DDDDDD] items-center">
            <p className="text-sm text-[#989898] font-medium pr-[100px]">
              СРАВНЕНИЕ ЯПОНСКИХ И НЕМЕЦКИХ АВТОМОБИЛЕЙ: ЧТО ЛУЧШЕ?
            </p>
            <FaAngleRight className="text-sm text-[#989898]" />
          </div>
          <div className="flex justify-between mt-5 pb-3 border-b border-[#DDDDDD] items-center">
            <p className="text-sm text-[#989898] font-medium pr-[100px]">
              ТОП-5 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ
            </p>
            <FaAngleRight className="text-sm text-[#989898]" />
          </div>
          <div className="flex justify-between mt-5 pb-3 border-b border-[#DDDDDD] items-center">
            <p className="text-sm text-[#989898] font-medium pr-[100px]">
              ТОП-5 НАДЕЖНЫХ АВТОМОБИЛЕЙ ДЛЯ СЕМЕЙНОГО ИСПОЛЬЗОВАНИЯ
            </p>
            <FaAngleRight className="text-sm text-[#989898]" />
          </div>
          <div className="flex mt-[58px] items-center cursor-pointer">
            <h4 className="text-[#202020] text-sm font-semibold">
              Читать больше новостей
            </h4>
            <Image src={carmore} alt="carmore" className="ml-[10px] h-3 w-3" />
          </div>
        </div>
      </div>
      <InfoBlock />
    </div>
  );
};

export default page;
