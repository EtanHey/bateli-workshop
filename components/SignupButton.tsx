import Link from 'next/link';
import React from 'react';

const SignupButton = ({className}: {className?: string}) => {
  return (
    <Link target='_blank' href={'https://meshulam.co.il/s/2bb7dbbf-266c-f513-53c4-950b3f6f5a4f'} className={`text-2xl  px-7 rounded-full w-fit ${className ? className : ''}`}>
      להרשמה
    </Link>
  );
};

export default SignupButton;
