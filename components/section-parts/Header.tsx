import React, {ReactNode} from 'react';

const SectionHeader = ({children}: {children: ReactNode}) => {
  return <h2 className='text-title-green font-bold'>{children}</h2>;
};

export default SectionHeader;
