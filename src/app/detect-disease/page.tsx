"use client";

import React from "react";
import { Montserrat } from "next/font/google";
import DiseaseDetection from "@/components/UI/DiseaseDetection";

const montserrat = Montserrat({ subsets: ["latin"] });

const page = () => {
  return (
    <section className="bg-[#f7f4ec]">
      <div className="w-[800px] text-center mx-auto py-10">
        <h2
          className={`text-[3rem] tracking-[-2.72px] leading-[4.5rem] text-center font-[500] ${montserrat.className}`}
        >
          Detect Wheat Diseases with Ease
        </h2>
        <div>
          <p className="text-md mt-10 text-[#3b3f44]">
            Upload images of wheat leaves and let SmartYield's intelligent model
            detect potential diseases. Our AI-powered detection tool helps
            farmers make timely and informed decisions for better crop health.
          </p>
          <p className="text-md mb-6 text-[#3b3f44]">
            The system supports multiple common wheat diseases and offers
            recommended treatments based on the prediction.
          </p>
        </div>
        {/* <div className="flex justify-center mt-6">
          <Link href="/detect-disease">
            <PrimaryButton name="Start Detection" />
          </Link>
        </div> */}
      </div>

      <DiseaseDetection />
    </section>
  );
};

export default page;
