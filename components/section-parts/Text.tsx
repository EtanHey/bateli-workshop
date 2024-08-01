import React, {ReactNode} from 'react';

const SectionText = ({children, className, textSize}: {children: ReactNode; className?: string, textSize?: string}) => {
  return <div className={`text-text-gray leading-8 font-light px-2 ${className ? className : ''} ${textSize ? textSize : 'text-xl'}`}>{children}</div>;
};

export default SectionText;
