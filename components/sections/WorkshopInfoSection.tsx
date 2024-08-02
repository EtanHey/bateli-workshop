import React from 'react';
import SectionWrapper from '../section-parts/Wrapper';
import Image from 'next/image';

const WorkshopInfoSection = () => {
  return (
    <SectionWrapper>
      <div className='flex gap-4 font-light flex-col'>
        <h2 className='font-bold text-red-color'>פרטים על הסדנא:</h2>
        <div className='text-text-gray'>
          <h3 className='text-title-green font-semibold'>לו״ז:</h3>
          <p>10:30- התכנסות, בופה והרמת כוס יין</p>
          <p>11:00- הרצאה משולבת תרגול</p>
          <p>12:30-14:00- סשן צילומים אישי</p>
        </div>
        <div>
          <h3 className='text-title-green font-semibold'>עלות הסדנא - 320 ש״ח</h3>
        </div>
        <div>
          <h3 className='text-title-green font-semibold'>קוד לבוש - תבואו יפות לצילומים</h3>
        </div>
        <div className='text-text-gray flex flex-col'>
          <h3 className='text-title-green font-semibold'>כתובת:</h3>
          {/* address */}
          <p>
            ”עדנה נווה מדבר יפואי“
            <br />
            דרך שלמה 6 תל אביב יפו
          </p>
          <span className='text-sm'>
            *חניה בחניון חצרות יפו, צמוד לבניין <br /> ניתן להגיע בקלות גם בעזרת הרכבת הקלה
          </span>
          {/* workshop photo */}
          <div className='z-50 mt-2 flex items-center justify-center'>
            <div className='relative w-[95%] shadow-studio-photo-inner-shadow rounded-2xl aspect-[1.54/1]'>
              <Image src='/workshop.webp' alt='Footer image' unoptimized fill className='rounded-2xl -z-10 object-cover' />
            </div>
          </div>
          <p className='text-title-green font-semibold'>מספר מקומות מוגבל</p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default WorkshopInfoSection;
