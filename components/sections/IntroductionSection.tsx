import React from 'react';
import SectionFlexInnerWrapper from '../section-parts/FlexInnerWrapper';
import SectionHeader from '../section-parts/Header';
import SectionText from '../section-parts/Text';
import Wrapper from '../section-parts/Wrapper';


const IntroductionSection = () => {
  return (
    <Wrapper>
      <SectionFlexInnerWrapper>
        <SectionHeader>האם את מוכנה לייצר את החיים שתמיד חלמת ?</SectionHeader>
        <SectionText>
          פחד הוא רק סימן - את עושה את הדבר הנכון! <br /> אם את מוכנה להוציא את המיטב מחייך, להתפתח, להכיר חברות חדשות, לתת לעצמך מקום לאהבה עצמית ואמיתית ולזמן לחייך כל דבר שרק תרצי הדרך שלך איתי.
        </SectionText>
      </SectionFlexInnerWrapper>
    </Wrapper>
  );
};

export default IntroductionSection;
