import React from "react";
import Navigation from "@/components/common/Navigation/indext";
const CommonLayout = ({ children }: any) => {
  return (
    <div>
      <Navigation />
      {children}
    </div>
  );
};

export default CommonLayout;
