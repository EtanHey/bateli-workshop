import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-8'>
      <h2 className='text-red-color text-[28px] font-semibold'>מחכה ומתרגשת לפגוש ולהכיר אתכן</h2>
      <div className='flex flex-col items-center'>
        <Image src='/batel.webp' alt='Footer image' unoptimized width={300} height={300} className='aspect-square rounded-full object-[50%_40%] object-cover' />
        <Image src='/bateli-logo.webp' alt='Footer logo' unoptimized width={250} height={250} className='' />
      </div>
    </footer>
  );
};

export default Footer;
