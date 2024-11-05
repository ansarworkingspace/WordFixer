"use client";

import React from "react";
import Header from "../component/Header";
import Tool from "../component/Tool";
import { Outfit } from "next/font/google";

// Load the font outside of the component
const outfit = Outfit({ subsets: ["latin"] });

const Page: React.FC = () => {
  return (
    <>
      <Header />
      <div
        className={`text-white relative mt-16 overflow-hidden flex flex-col items-center gap-5 ${outfit.className}`}
      >
        <Tool />
      </div>
    </>
  );
};

export default Page;
