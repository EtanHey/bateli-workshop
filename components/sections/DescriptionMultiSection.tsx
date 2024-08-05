import React from "react";

import SectionFlexInnerWrapper from "../section-parts/FlexInnerWrapper";
import SectionHeader from "../section-parts/Header";
import SectionText from "../section-parts/Text";
import Wrapper from "../section-parts/Wrapper";

const DescriptionMultiSection = () => {
  return (
    <>
      <h1 className="text-red-color text-3xl font-bold my-3">
        אז מה הולך להיות בסדנא ?
      </h1>
      <Wrapper>
        <SectionFlexInnerWrapper>
          <SectionHeader>מהנושאים הנלמדים בסדנא:</SectionHeader>
          <SectionText>
            <ul className="leading-tight  marker:text-base list-disc text-center marker:text-title-green flex flex-col items-center">
              <li className="w-fit list-item">זיהוי נקודות מפנה בחיים.</li>
              <li className="list-item w-fit">מהו זימון ואיך מזמנים?</li>
              <li className="list-item w-fit">
                על ספק, אמונות מגבילות והדרך לשחררן.
              </li>
              <li className="list-item w-fit">כוחה של המחשבה ותודעה.</li>
              <li className="list-item w-fit">אהבה וערך עצמי.</li>
              <li className="list-item w-fit">
                מהן הפעולות שעלינו לעשות על מנת לקדם <br /> את החזון שלנו?
              </li>
              <li className="list-item w-fit">חוק ה 5 שניות.</li>
              <li className="list-item w-fit">
                חשיבות וערך הכרת התודה בחיינו.
              </li>
            </ul>
          </SectionText>
        </SectionFlexInnerWrapper>
      </Wrapper>
      <Wrapper>
        <SectionHeader>
          איך הפכתי מילדה ביישנית <br /> לבחורה מלאת ביטחון ?
        </SectionHeader>
        <SectionText className="text-pretty">
          אספר את הסיפור האישי שלי <br /> מהיותי ילדה ביישנית ושונה עד ליצירת
          חיים מלאי בטחון, אהבה עצמית והגשמה
        </SectionText>
      </Wrapper>
      <Wrapper>
        <SectionHeader>איך לזמן מציאות ?</SectionHeader>
        <div className={`text-text-gray leading-8 font-light px-2 text-xl`}>
          כל הדרך מהשלב הראשון של משבר וקושי <br /> עד ליצירת החיים שתמיד חלמת .{" "}
          <br /> נלמד ונתרגל איך לעשות את זה נכון ויעיל
        </div>
      </Wrapper>
      <Wrapper>
        <SectionHeader>איך לאהוב את עצמי ?</SectionHeader>
        <SectionText className="text-pretty text-lg">
          אהבה עצמית באה מבפנים ואם נדע לעשות את זה נכון ולטפח את עצמנו <br />{" "}
          נוכל לשדרג את חיינו בעזרת אהבה עצמית אמיתית ״תבקשי להיות שלמה ולא
          מושלמת“
        </SectionText>
      </Wrapper>
      <Wrapper>
        <SectionHeader>מוכנה להכיר חברות חדשות ?</SectionHeader>
        <SectionText textSize="text-lg">
          אני מאמינה שכדי לייצר חיים של הגשמה אנו זקוקים לסביבה מפתחת ומחקרים
          מדעיים כבר הוכיחו את <br /> גודלה ועוצמתה של הסביבה עלינו. <br /> אני
          פה להפגיש בין נשים מדהימות שרוצות להתפתח. בואו לפתוח את הלב ולהכיר עוד
          חברות <br /> שמכוונות לגדילה והגשמה.
        </SectionText>
      </Wrapper>
      <Wrapper>
        <SectionHeader>זמן צילומים -</SectionHeader>
        <SectionText textSize="text-lg">
          <span className="font-bold">
            איך לא ? אני הולכת להקדיש זמן לכל אחת שמגיעה לסדנא לצילומים אישיים
          </span>
          , להשתחרר מול המצלמה <br /> וכל אחת תצא עם מספר תמונות איכותיות.{" "}
          <br /> מעבירה את היופי שלכן דרך העיניים שלי
        </SectionText>
      </Wrapper>
    </>
  );
};

export default DescriptionMultiSection;
