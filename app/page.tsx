import Image from 'next/image';
import HeroImage from '../components/HeroImage';
import SignupButton from '@/components/SignupButton';
import IntroductionSection from '@/components/sections/IntroductionSection';
import DescriptionMultiSection from '@/components/sections/DescriptionMultiSection';
import WorkshopInfoSection from '@/components/sections/WorkshopInfoSection';
import Footer from '@/components/Footer';
import TimeNdDate from '@/components/TimeNdDate';

export default function Home() {
  return (
    <main dir='rtl' className='w-full flex flex-col h-fit text-center'>
      <HeroImage />
      <div className='w-full pt-3 gap-3  flex flex-col relative h-fit text-center'>
        <Image unoptimized className='-z-50 object-top object-cover' src='/page_background.webp' alt='background' fill priority />
        <div className='flex flex-col items-center px-6 gap-3'>
          <TimeNdDate />
          <IntroductionSection />
          <DescriptionMultiSection />
          <SignupButton className='bg-red-color shadow-red-signup-button-inner' />
          <WorkshopInfoSection />
          <Footer />
        </div>
      </div>
    </main>
  );
}
