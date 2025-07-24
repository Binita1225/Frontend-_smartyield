// components/DiseaseDetection.tsx
import React from "react";
import { Montserrat } from "next/font/google";
import Link from "next/link";

const montserrat = Montserrat({ subsets: ["latin"] });

const DiseaseDetectionBanner = () => {
  return (
    <section
      className="bg-[#f7f4ec] py-16 px-6 md:px-20"
      id="disease-detection"
    >
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div>
            <h2
              className={`text-[3rem] leading-tight font-semibold ${montserrat.className}`}
            >
              Disease Detection
            </h2>
            <p className="text-lg py-4">
              Empower farmers with AI-driven insights by uploading wheat plant
              images. Our system identifies diseases like rust, blight, and smut
              with high accuracy to ensure early treatment and improved yield.
            </p>
            <ul className="list-disc ml-5 text-base py-2">
              <li>Real-time disease prediction from images</li>
              <li>Supports multiple wheat disease classes</li>
              <li>Built with a deep learning image classification model</li>
            </ul>

            {/* 👇 New Button */}
            <Link href="/detect-disease">
              <button className="mt-6 px-6 py-3 bg-[#3f6456] text-white  text-lg hover:bg-[#c5824b] transition">
                Detect Disease
              </button>
            </Link>
          </div>
        </div>

        <div className="relative">
          <img
            src="/wheatdiseasebanner2.webp"
            alt="Wheat disease visual"
            className="w-full rounded-xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetectionBanner;
