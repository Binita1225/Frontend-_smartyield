import React from "react";

const ViaSearch = () => {
  return (
    <section className="bg-white ">
      <div>
        <h3 className="text-[40px] font-semibold mb-4 text-center">
          Study Data of Nepal By searching
        </h3>
        <div className="grid grid-cols-2">
          <div className="relative px-20 w-[600px]">
            <div className="relative">
              <img
                src="/searchbyregion.png"
                alt="about-image"
                width="500px"
                className="relative"
              />
              <img
                src="/result.png"
                alt="about-image"
                width="500px"
                className="absolute top-[40%] left-[40%]"
              />
            </div>
          </div>
          <div>
            <h4 className="text-[18px] font-semibold mb-4">
              Here's step by step process to use our system
            </h4>
            <ul className="list-disc px-10">
              <li className="mb-3">
                Firstly, Create your Account to login to our system to use all
                the fetaures of our system
              </li>
              <li className="mb-3">
                Go to Study data page you will have the two choices either via
                search or custom data implementation.click on custom data
                implementaion
              </li>
              <li className="mb-3">
                Enter all the details of your area like temprature soil
                production area etc.
              </li>
              <li className="mb-3">click on view results</li>
              <li className="mb-3">
                You will receive results with four possibilities for wheat
                production levels:
                <span className="font-bold">Very Low</span>,{" "}
                <span className="font-bold">Low</span>,
                <span className="font-bold">Medium</span>,
                <span className="font-bold">High</span>and
                <span className="font-bold">Very High</span>. Additionally, you
                will get detailed insights into how much wheat is likely to grow
                in that area.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViaSearch;
