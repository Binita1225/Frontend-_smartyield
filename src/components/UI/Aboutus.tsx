import { Montserrat } from "next/font/google";
import React from "react";
const montserrat = Montserrat({ subsets: ["latin"] });

const Aboutus = () => {
  return (
    <>
      <section
        className="pt-20 h-[100vh]   bg-[url('/grunge_bg.jpg')] bg-cover bg-center"
        id="about"
      >
        <div className="container mx-auto">
          <h2
            className={`text-[3rem] tracking-[-2.72px] leading-[4.5rem] text-center font-[500] ${montserrat.className}`}
          >
            About the System
          </h2>
          <div className="grid grid-cols-2 items-center py-10 ">
            <div className="relative px-20">
              <div className="relative">
                <img
                  src="/about-img-1.jpg"
                  alt="about-image"
                  width="400px"
                  className="relative"
                />
                <img
                  src="/about-img-2.jpg"
                  alt="about-image"
                  width="400px"
                  className="absolute top-[40%] left-[40%]"
                />
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-[#474747]">Our Mission</h3>
              <p className="text-md mb-6 text-[#3b3f44]">
                Our Wheat Yield Prediction System aims to revolutionize
                agricultural practices by providing accurate and data-driven
                predictions. We strive to empower farmers, researchers, and
                policymakers with the tools they need to make informed
                decisions, ensuring sustainable and efficient wheat production.
              </p>

              <h3 className="text-2xl font-semibold mb-4 text-[#474747]">What We Offer</h3>
              <ul className="list-disc pl-5 text-md text-[#3b3f44]">
                <li className="mb-2">
                  Advanced machine learning models for yield prediction.
                </li>
                <li className="mb-2">
                  Insights for optimizing resource management.
                </li>
                <li className="mb-2">
                  User-friendly tools tailored for agricultural needs.
                </li>
                <li>
                  Support for sustainable farming practices and decision-making.
                </li>
              </ul>

              <h3 className="text-2xl font-semibold mb-4 mt-6 text-[#474747]">
                Why Choose Us?
              </h3>
              <p className="text-md text-[#3b3f44]">
                By combining cutting-edge technology with a deep understanding
                of agricultural challenges, our system offers unparalleled
                accuracy and usability. Join us in shaping the future of farming
                with smarter, data-driven solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
