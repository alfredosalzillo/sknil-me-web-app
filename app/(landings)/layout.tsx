import React from "react";

import Navbar from "@/components/Navbar";

const LandingsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default LandingsLayout;
