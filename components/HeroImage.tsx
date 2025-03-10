import Image from "next/image";
import React from "react";
import localFont from "next/font/local";
import SignupButton from "./SignupButton";

const myFont = localFont({ src: "../fonts/hachalutzim.otf" });
const HeroImage = () => {
  return (
    <div className="relative w-full xl:h-[76svh] h-[344px]">
      <Image
        src="/hero_image.webp"
        alt="Hero image"
        className="object-cover max-md:object-top"
        fill
        priority
      />
      <div className="absolute items-center flex flex-col gap-1 w-full text-center top-[5%] xl:top-[8%]">
        <div className="text-4xl text-white flex flex-col gap-[8.3rem] xl:gap-96">
          <h1
            className={`font-medium max-[420px]:text-[40px] text-[44px] tracking-wide ${myFont.className}`}
          >
            הגיע הזמן <span className="tracking-normal">״ לאהוב אותך ״</span>
          </h1>
          <h2 className="font-thin max-[420px]:text-3xl">
            סדנת העצמה וסשן צילום
          </h2>
        </div>
        <SignupButton className="bg-signup-orange shadow-orange-signup-button-inner" />
      </div>
    </div>
  );
};

export default HeroImage;
