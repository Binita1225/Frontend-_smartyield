// import { Montserrat } from "next/font/google";
// import React from "react";

// const montserrat = Montserrat({ subsets: ["latin"] });

// const Aboutus = () => {
//   return (
//     <>
//       <section
//         className="pt-20 min-h-screen bg-[url('/grunge_bg.jpg')] bg-cover bg-center"
//         id="about"
//       >
//         <div className="container mx-auto px-6 md:px-10">
//           <h2
//             className={`text-[2.8rem] md:text-[3rem] tracking-[-2px] leading-tight text-center font-semibold text-black drop-shadow-md ${montserrat.className}`}
//           >
//             About SmartYield
//           </h2>

//           <div className="grid grid-cols-1 md:grid-cols-2 items-center py-10 gap-8">
//             <div className="relative px-6 md:px-10 flex justify-center md:justify-start">
//               <div className="relative max-w-[400px] w-full">
//                 <img
//                   src="/about-img-1.jpg"
//                   alt="about-image-1"
//                   className="w-full rounded-lg shadow-lg"
//                 />
//                 <img
//                   src="/about-img-2.jpg"
//                   alt="about-image-2"
//                   className="w-[60%] rounded-lg shadow-lg mt-4 md:mt-[-20%] md:ml-[60%] relative z-10"
//                 />
//               </div>
//             </div>

//             {/* Content Section */}
//             <div className="px-6 md:px-10">
//               <h3 className="text-2xl font-bold mb-4 text-[#201717d0]">
//                 Our Vision
//               </h3>
//               <p className="text-md mb-6 text-black/90 leading-relaxed">
//                 <strong>SmartYield</strong> is an intelligent agricultural
//                 support system that combines machine learning and computer
//                 vision to help farmers optimize wheat production. It empowers
//                 users with two powerful tools — wheat yield prediction and leaf
//                 disease detection — to enable smarter, faster, and more
//                 sustainable farming decisions.
//               </p>

//               <h3 className="text-2xl font-bold mb-4 text-[#201717d0]">
//                 Core Features
//               </h3>
//               <ul className="list-disc pl-6 text-md text-black/90 space-y-2">
//                 <li>
//                   AI-powered wheat yield prediction based on environmental data.
//                 </li>
//                 <li>
//                   Image-based disease detection with treatment suggestions.
//                 </li>
//                 <li>Clean, easy-to-use web interface.</li>
//                 <li>
//                   Balanced and retrainable models for accuracy and adaptability.
//                 </li>
//               </ul>

//               <h3 className="text-2xl font-bold mt-8 mb-4 text-[#201717d0]">
//                 Why SmartYield?
//               </h3>
//               <p className="text-md text-black/90 leading-relaxed">
//                 We merge cutting-edge technology with practical agricultural
//                 insights to offer real-time support to farmers, students, and
//                 researchers. Whether you're detecting diseases or planning your
//                 next harvest, SmartYield is here to make precision agriculture
//                 accessible and effective.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Aboutus;

import { Montserrat } from "next/font/google";
import React from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

const Aboutus = () => {
  return (
    <>
      <section
        className="pt-20 min-h-screen bg-[url('/grunge_bg.jpg')] bg-cover bg-center"
        id="about"
      >
        <div className="container mx-auto px-6 md:px-10">
          <h2
            className={`text-[2.8rem] md:text-[3rem] tracking-[-2px] leading-tight text-center font-semibold text-black drop-shadow-md ${montserrat.className}`}
          >
            About SmartYield
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] items-center py-10 gap-12">
            <div className="relative px-4 md:px-0 flex justify-center md:justify-start">
              <div className="relative max-w-[600px] w-full">
                <img
                  src="/about-img-1.jpg"
                  alt="about-image-1"
                  className="w-full rounded-lg shadow-lg"
                />
                <img
                  src="/about-img-2.jpg"
                  alt="about-image-2"
                  className="w-[75%] rounded-lg shadow-lg mt-[-30%] md:mt-[-35%] md:ml-[40%] relative z-30"
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="px-4 md:px-12">
              <h3 className="text-2xl font-bold mb-4 text-[#201717d0]">
                Our Vision
              </h3>
              <p className="text-md mb-6 text-black/90 leading-relaxed">
                <strong>SmartYield</strong> is an intelligent agricultural
                support system that combines machine learning and computer
                vision to help farmers optimize wheat production. It empowers
                users with two powerful tools — wheat yield prediction and leaf
                disease detection — to enable smarter, faster, and more
                sustainable farming decisions.
              </p>

              <h3 className="text-2xl font-bold mb-4 text-[#201717d0]">
                Core Features
              </h3>
              <ul className="list-disc pl-6 text-md text-black/90 space-y-2">
                <li>
                  AI-powered wheat yield prediction based on environmental data.
                </li>
                <li>
                  Image-based disease detection with treatment suggestions.
                </li>
                <li>Clean, easy-to-use web interface.</li>
                <li>
                  Balanced and retrainable models for accuracy and adaptability.
                </li>
              </ul>

              <h3 className="text-2xl font-bold mt-8 mb-4 text-[#201717d0]">
                Why SmartYield?
              </h3>
              <p className="text-md text-black/90 leading-relaxed">
                We merge cutting-edge technology with practical agricultural
                insights to offer real-time support to farmers, students, and
                researchers. Whether you're detecting diseases or planning your
                next harvest, SmartYield is here to make precision agriculture
                accessible and effective.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
