import Image from 'next/image';
import React from 'react';
import localFont from 'next/font/local';
import SignupButton from './SignupButton';

const myFont = localFont({ src: '../fonts/hachalutzim.otf' })
const HeroImage = () => {
  return (
    <div className='relative w-full z-50 xl:h-[76svh] h-[37svh]'>
      <Image src='/hero_image.webp' alt='Hero image' unoptimized className='object-cover max-md:object-top' fill priority />
      <div className='absolute items-center flex flex-col gap-1 w-full text-center top-[5%] xl:top-[8%]'>
        <div className='text-4xl flex flex-col gap-[8.3rem] xl:gap-96'>
          <h1 className={`font-semibold ${myFont.className}`}>הגיע הזמן ״ לאהוב אותך ״</h1>
          <h2 className='font-thin'>סדנאת העצמה וסשן צילום</h2>
        </div>
        <SignupButton className='bg-signup-orange' />
      </div>
    </div>
  );
};

export default HeroImage;
