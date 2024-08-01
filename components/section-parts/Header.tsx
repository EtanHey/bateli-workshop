import React, {ReactNode} from 'react';

const SectionHeader = ({children}: {children: ReactNode}) => {
  return <h2 className='text-title-green font-semibold'>{children}</h2>;
};

export default SectionHeader;
