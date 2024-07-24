import img0 from "@/assets/images/about/g0.png";
import img1 from "@/assets/images/about/g1.png";
import img2 from "@/assets/images/about/g2.png";
import img3 from "@/assets/images/about/g3.png";
import img4 from "@/assets/images/about/g4.png";
import img5 from "@/assets/images/about/g5.png";
import Image from "next/image";
const AboutContent = () => {
  return (
    <div className="grid grid-cols-7 gap-[23px]">
      <div className="col-span-1 flex flex-col">
        <div className="w-full bg-red rounded-[15px] mb-[17px] flex-grow py-[30px] px-5">
          <h2 className="text-[52px] text-white font-bold">15</h2>
          <p className="text-white font-extrabold text-[20px]">Лет в автобизнесе</p>
        </div>
        <Image src={img1} alt="img1" className="w-full h-[199ppx]" />
      </div>
      <div className="col-span-3">
        <Image src={img2} alt="img2" className="w-full !h-[500ppx]" />
      </div>
      <div className="col-span-3">
        <Image src={img3} alt="img3" className="w-full h-[300ppx]" />
        <div className="flex justify-between mt-[14px]">
          <Image src={img4} alt="img4" className="w-[210px] h-[210px]" />
          <Image src={img5} alt="img5" className="w-[306px] h-[210px]" />
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
