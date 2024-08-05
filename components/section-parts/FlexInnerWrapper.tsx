import React, { ReactNode } from "react";

const SectionFlexInnerWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="flex flex-col gap-1">{children}</div>;
};

export default SectionFlexInnerWrapper;
