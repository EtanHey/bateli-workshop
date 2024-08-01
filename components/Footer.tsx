import Image from 'next/image';
import React from 'react';

const Footer = () => {
  return (
    <footer className='flex flex-col items-center gap-8'>
      <h2 className='text-red-color text-[28px] font-semibold'>מחכה ומתרגשת לפגוש ולהכיר אתכן</h2>
      <Image src='/batel.webp' alt='Footer image' width={300} height={300} className='aspect-square rounded-full object-[50%_40%] object-cover' />
    </footer>
  );
};

export default Footer;
