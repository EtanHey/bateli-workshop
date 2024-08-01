import React, {ReactNode} from 'react';

const SectionText = ({children, className}: {children: ReactNode; className?: string}) => {
  return <div className={`text-text-gray leading-8 font-light text-xl px-2 ${className ? className : ''}`}>{children}</div>;
};

export default SectionText;
