import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center pt-5 gap-8'>
      <h2 className='text-red-color text-[28px] font-semibold'>מחכה ומתרגשת לפגוש ולהכיר אתכן</h2>
      <div className='flex flex-col items-center'>
        {/* two wrapping divs to make inner shadow and add white background to lighten bg image */}
        <div className='z-50'>
          <div className='relative w-[300px] shadow-photo-inner-shadow rounded-full h-[300px]'>
            <Image src='/batel.webp' alt='Footer image' unoptimized fill className='aspect-square rounded-full -z-10 object-[50%_40%] object-cover' />
          </div>
        </div>
      </div>
      <Image src='/bateli-logo.webp' alt='Footer logo' unoptimized width={200} height={250} className='py-8 mb-8' />
    </footer>
  );
};

export default Footer;
