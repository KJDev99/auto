import Image from "next/image";
import React from "react";

const Button = ({ bg, text, textColor, image }) => {
  return (
    <div
      className={`relative h-full w-full flex items-center justify-center ${
        bg ? `bg-${bg}` : "bg-red"
      } ${textColor ? `bg-${textColor}` : "text-white"}`}
    >
      {text}
      {image && <Image className="absolute top-6 left-10" src={image} />}
    </div>
  );
};

export default Button;
