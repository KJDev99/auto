import img0 from "@/assets/images/about/g0.png";
import img1 from "@/assets/images/about/g1.png";
import img2 from "@/assets/images/about/g2.png";
import img3 from "@/assets/images/about/g3.png";
import img4 from "@/assets/images/about/g4.png";
import img5 from "@/assets/images/about/g5.png";
import Image from "next/image";
const AboutContent = () => {
  return (
    <div className="grid grid-cols-7 gap-[23px] max-md:gap-[10px] max-md:grid-cols-3 max-md:auto-rows-min">
      <div className="col-span-1 flex flex-col">
        <div className="w-full bg-red rounded-[15px] mb-[17px] flex-grow py-[30px] px-5 max-md:p-3 max-md:mb-[10px]">
          <h2 className="text-[52px] text-white font-bold max-md:text-[40px] ">
            15
          </h2>
          <p className="text-white font-extrabold text-[20px] max-md:text-sm">
            Лет в автобизнесе
          </p>
        </div>
        <Image src={img1} alt="img1" className="w-full" />
      </div>
      <div className="col-span-3 max-md:col-span-2">
        <Image src={img2} alt="img2" className="w-full max-md:h-full" />
      </div>
      <div className="col-span-3 rounded-[15px] overflow-hidden">
        <Image
          src={img3}
          alt="img3"
          className="w-full max-md:h-[191px] object-cover rounded-[15px]"
        />
        <div className="grid grid-cols-3 gap-[10px] mt-[14px]">
          <div className="col-span-1 rounded-[15px] overflow-hidden ">
            <Image
              src={img4}
              alt="img4"
              className="w-full h-[210px] max-md:h-[133px] object-cover"
            />
          </div>
          <div className="col-span-2 rounded-[15px] overflow-hidden ">
            <Image
              src={img5}
              alt="img5"
              className="w-full h-[210px] max-md:h-[133px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
