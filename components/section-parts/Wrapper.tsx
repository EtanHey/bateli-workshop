import React, {ReactNode} from 'react';

const SectionWrapper = ({children}: {children: ReactNode}) => {
  return <div className='py-3 px-2 w-full rounded-2xl text-xl bg-white'>{children}</div>;
};

export default SectionWrapper;
