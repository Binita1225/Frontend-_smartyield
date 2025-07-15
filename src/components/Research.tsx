import { Montserrat } from "next/font/google";
import { StickyScroll } from "./UI/sticky-scroll-reveal";
import Logo from "./UI/Logo";
const montserrat = Montserrat({ subsets: ["latin"] });

const Research = () => {
  const contentData = [
    {
      title: "Introduction",
      description: `
                  Wheat is a crucial crop for global food security. Predicting its yield accurately helps with better planning and resource allocation. 
                  Our system uses Random Forest to predict regions with high, low, or very low wheat productivity based on environmental and geographical factors.
                `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
            <img src="/logo.png" className="w-full h-full" />  
        </div>
      ),
    },
    {
      title: "Data Collection",
      description: `
                  The foundation of the system is high-quality data from reliable sources such as government agricultural departments or open datasets.
                  Data includes:
                  - Historical wheat production data (10+ years).
                  - Environmental data: Rainfall, temperature, soil pH, etc.
                  - Geographical data: Latitude, longitude, elevation.
                  The collected data was cleaned, filtered, and organized to remove inconsistencies and missing values.
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
                  By analyzing the dataset, we identified the most influential features for prediction:
                  - Rainfall in the growing season (mm).
                  - Average temperature during critical growth stages (°C).
                  - Soil quality indicators (pH, organic matter content).
                  - Proximity to water sources and elevation.
                  These features were engineered to enhance the model's prediction capabilities.
                `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-3.jpg" className="w-full h-full" />
        </div>
      ),
    },

    {
      title: "Model Selection",
      description: `
                  The Random Forest algorithm was chosen due to its robustness and ability to handle complex data relationships. Key benefits include:
                  - Handling non-linear relationships in data.
                  - Reducing overfitting compared to individual decision trees.
                  - Providing feature importance for better interpretability.
                `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-4.png" className="w-full h-full bg-cover" />
        </div>
      ),
    },
    {
      title: "Model Training",
      description: `
                  The model was trained on 80% of the data, while the remaining 20% was used for validation. Steps included:
                  - Splitting data into training and testing sets (80:20 ratio).
                  - Scaling features to ensure uniformity.
                  - Hyperparameter tuning: Adjusting tree depth, number of trees, and minimum samples per leaf for optimal performance.
                  Performance metrics such as accuracy, precision, and recall validated the model's effectiveness.
                `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-5.jpg" className="w-full h-full" />
        </div>
      ),
    },
    {
      title: "Design and Development",
      description: `
                    The system's user interface and backend were meticulously planned and developed to ensure seamless user experience. 
                    Key phases of this stage included:
                    - **UI Design**: 
                      Creating intuitive and visually appealing interfaces with wireframes and prototypes.
                    - **Frontend Integration**:
                      Developing a dynamic, responsive web application using modern frameworks like React.js.
                    The development process emphasized scalability and performance for real-world usability.
                  `,
      content: (
        <div className="h-full w-full text-white text-[20px] text-center flex justify-center items-center">
          <img src="/data-6.jpg" className="w-full h-full bg-cover" />
        </div>
      ),
    },
    {
      title: "Conclusion",
      description: `
                  Our wheat yield prediction system provides accurate predictions, enabling farmers and policymakers to make data-driven decisions. 
                  Future enhancements include incorporating satellite data and real-time updates for even higher accuracy.
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
