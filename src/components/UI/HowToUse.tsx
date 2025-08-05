import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const HowToUse = () => {
  return (
    <div className="px-4 py-10">
      <h3
        className={`text-[2rem] sm:text-[2.5rem] tracking-[-2.2px] leading-[3rem] text-center font-[500] ${montserrat.className}`}
      >
        HOW TO USE
      </h3>
      <p className="text-center mt-4 text-[#3b3f44]">
        There are two ways for analyzing your data: exploring the region data or
        custom data implementation.
      </p>

      <div className="mt-8">
        <h6
          className={`text-[1.2rem] leading-[2rem] text-[#3b3f44] font-[500] ${montserrat.className}`}
        >
          For Exploring Region Data
        </h6>
        <p className="text-[#3b3f44] mt-2">
          Press the button to explore regional data and enter the name of any
          region to predict wheat cultivation trends in Nepal. You can search
          for district names or specific region names, providing valuable
          insights into wheat production across the country. Please note that
          this tool is exclusively designed for Nepal, and the predictions are
          based on regional agricultural data specific to this area.
        </p>
      </div>

      <div className="mt-6">
        <h6
          className={`text-[1.2rem] leading-[2rem] text-[#3b3f44] font-[500] ${montserrat.className}`}
        >
          For Custom Data Implementation
        </h6>
        <p className="text-[#3b3f44] mt-2">
          You can easily enter the required data in the input fields provided.
          Simply add the accurate information for any location around the world,
          and our system will generate a prediction tailored to that specific
          region. Whether you’re tracking weather patterns, soil conditions, or
          other vital factors, you’ll receive an accurate forecast to help make
          informed decisions.
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
