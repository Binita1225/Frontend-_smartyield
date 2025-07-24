import Research from "@/components/Research";
import Aboutus from "@/components/UI/Aboutus";
import CustomDataImplementatino from "@/components/UI/CustomDataImplementatino";
import DiseaseDetection from "@/components/UI/DiseaseDetection";
import HeroBanner from "@/components/UI/HeroBanner";
// import OurTeam from "@/components/UI/OurTeam";
import { Tabs } from "@/components/UI/tabs";
import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const page = () => {
  const tabsData = [
    {
      title: "Disease Detection",
      value: "disease-detection",
      content: <DiseaseDetection />,
    },
    {
      title: "Custom Data Implementation",
      value: "custom-data",
      content: <CustomDataImplementatino />,
    },
  ];

  return (
    <>
      <HeroBanner />
      <Aboutus />
      <div className="container mx-auto h-[80vh] pt-[130px]" id="howtouse">
        <div
          className={`text-[4rem] tracking-[-1.72px] leading-[4.5rem] text-center font-[600] ${montserrat.className}`}
        >
          How <span className="text-[#F2C200]">To</span>{" "}
          <span className="text-[#4C6F35]">Use</span>
        </div>
        <Tabs
          tabs={tabsData}
          activeTabClassName="bg-[#4C6F35] text-[#F2C200]"
          tabClassName="text-sm font-medium"
        />
      </div>
      {/* <OurTeam /> */}
      <Research />
    </>
  );
};

export default page;
