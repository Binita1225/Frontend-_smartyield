import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const HowToUse = () => {
  return (
    <div>
      <div className="py-10">
        <h3
          className={`text-[2.5rem] tracking-[-2.2px] leading-[4.5rem] text-center font-[500] ${montserrat.className}`}
        >
          HOW TO USE
        </h3>
        <p>
          There are Two way for analyzing your data. Exploring the Region data
          or custom data implementation.
        </p>
        <h6
          className={`text-[1.2rem] leading-[4.2rem] text-[#3b3f44] text-start font-[500] ${montserrat.className}`}
        >
          For Exploring Region Data
        </h6>
        <p className="text-left text-[#3b3f44]">
          Press the button to explore regional data and enter the name of any
          region to predict wheat cultivation trends in Nepal. You can search
          for district names or specific region names, providing valuable
          insights into wheat production across the country. Please note that
          this tool is exclusively designed for Nepal, and the predictions are
          based on regional agricultural data specific to this area. Start your
          search now to understand the cultivation patterns and plan effectively
          for the upcoming season.
        </p>
        <h6
          className={`text-[1.2rem] leading-[4.2rem] text-[#3b3f44] text-start font-[500] ${montserrat.className}`}
        >
          For Custom Data Implementation
        </h6>
        <p className="text-left text-[#3b3f44]">
          You can easily enter the required data in the input fields provided.
          Simply add the accurate information for any location around the world,
          and our system will generate a prediction tailored to that specific
          region. Whether you’re tracking weather patterns, soil conditions, or
          other vital factors, you’ll receive an accurate forecast to help make
          informed decisions. Get started now to see how data-driven insights
          can assist with your agricultural planning or research!
        </p>
      </div>
    </div>
  );
};

export default HowToUse;
