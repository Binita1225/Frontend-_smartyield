import { Montserrat } from "next/font/google";
import { StickyScroll } from "./UI/sticky-scroll-reveal";
// import Logo from "./UI/Logo";
const montserrat = Montserrat({ subsets: ["latin"] });

const Research = () => {
  const contentData = [
    {
      title: "Project Overview",
      description: `
      SmartYield is an AI-powered system designed to assist farmers and researchers by predicting wheat productivity 
      and detecting crop diseases. The platform combines machine learning (Random Forest) for yield prediction and 
      image-based disease detection to support smarter agricultural decisions.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/logo.png" className="w-full h-full" />
        </div>
      ),
    },
    {
      title: "Data Acquisition",
      description: `
      We collected and cleaned datasets from trusted sources including government agricultural bodies and open platforms. 
      Data includes:
      - Historical wheat yield data (10+ years).
      - Environmental data: Rainfall, temperature, humidity, etc.
      - Soil quality metrics: pH, organic content.
      - Geographical data: Latitude, longitude, and elevation.
      This data formed the foundation for yield prediction and region classification.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-2.jpg" className="w-full h-full" />
        </div>
      ),
    },
    {
      title: "Feature Engineering",
      description: `
      Key features were derived to enhance model accuracy:
      - Seasonal rainfall patterns.
      - Temperature during sowing and growth periods.
      - Soil pH and fertility indicators.
      - Elevation and water proximity.
      These inputs were analyzed and refined to improve correlation with wheat yield categories (High, Low, Very Low).
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-3.jpg" className="w-full h-full" />
        </div>
      ),
    },
    {
      title: "Model Development",
      description: `
      We implemented a Random Forest classifier due to its high accuracy and resistance to overfitting. Advantages include:
      - Ability to handle non-linear data relationships.
      - Feature importance ranking.
      - Scalability to large datasets.
      The model classifies wheat-producing regions into productivity tiers.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-4.png" className="w-full h-full bg-cover" />
        </div>
      ),
    },
    {
      title: "Model Training & Evaluation",
      description: `
      The model was trained using an 80/20 train-test split. We performed:
      - Feature scaling and normalization.
      - Hyperparameter tuning (number of trees, max depth).
      - Cross-validation.
      Evaluation metrics like accuracy, F1-score, and confusion matrix helped validate the model's reliability.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-5.jpg" className="w-full h-full" />
        </div>
      ),
    },
    {
      title: "Disease Detection Module",
      description: `
      Apart from yield prediction, SmartYield features a wheat disease detection tool using image processing and deep learning.
      - Users upload a photo of a wheat leaf.
      - The backend model predicts the disease and provides treatment suggestions.
      This aids in early diagnosis and preventive care in crop management.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-6.jpg" className="w-full h-full bg-cover" />
        </div>
      ),
    },
    {
      title: "Outcome & Future Scope",
      description: `
      SmartYield delivers precise yield predictions and reliable disease detection, empowering farmers with actionable insights. 
      Future upgrades may include:
      - Integration with live satellite imagery.
      - Real-time weather updates.
      - Mobile app deployment for on-field access.
      Our goal is to make farming more efficient and data-driven.
    `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-7.jpg" className="w-full h-full bg-cover" />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <h2
        className={`text-[3rem] pt-20 pb-10 tracking-[-2.72px] leading-[4.5rem] text-center font-[500] ${montserrat.className}`}
      >
        How We Did It?
      </h2>
      <StickyScroll content={contentData} />
    </div>
  );
};

export default Research;
