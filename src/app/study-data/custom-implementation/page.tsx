"use client";
import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { port } from "@/constants/appl.constant";
import Results from "@/components/UI/results";
import LoadingOverlay from "@/components/UI/LoadingSpinner";
import { Slider } from "@/components/UI/slider";
import LoginButton from "@/components/UI/LoginButton";

const Page = () => {
  const [rainfall, setRainfall] = useState(33);
  const [avgTemp, setAvgTemp] = useState(25);
  const [relativeHumidity, setRelativeHumidity] = useState(50);
  const [soilTemp, setSoilTemp] = useState(20);
  const [sand, setSand] = useState(40);
  const [phLevel, setPhLevel] = useState(7);
  const [phosphorus, setPhosphorus] = useState(30);
  const [potassium, setPotassium] = useState(200);
  const [clay, setClay] = useState(20);
  const [productionArea, setProductionArea] = useState(100);
  const [results, setResults] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      rainfall,
      avgTemp,
      relativeHumidity,
      soilTemp,
      sand,
      phLevel,
      phosphorus,
      potassium,
      clay,
      productionArea,
    };
    console.log(data);

    try {
      const response = await axios.post(
        `${port}/prediction/GetPredictionByCustomData`,
        data,
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      setResults(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error submitting data:", error);
      setLoading(false);
    }
  };

  const renderSlider = (
    label: string,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    min: number,
    max: number,
    step = 1
  ) => (
    <div>
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <Slider
        value={[value]}
        onValueChange={(val) => setValue(val[0])}
        min={min}
        max={max}
        step={step}
        className="py-2"
      />
      <p className="text-sm text-gray-500">{value}</p>
    </div>
  );

  return (
    <>
      <div className="flex items-center justify-center pt-10 bg-[#F2ECDB]">
        <Link href="/study-data">
          <button className="bg-red-500 text-white px-5 py-2 rounded-md font-semibold transition-all duration-300 hover:bg-red-600 hover:text-white">
            Go Back
          </button>
        </Link>
      </div>
      <div className="min-h-screen flex items-center justify-center bg-[#F2ECDB]">
        {loading ? (
          <LoadingOverlay />
        ) : (
          <div className="bg-[#FAF8F2] shadow-md rounded-lg p-8 max-w-[800px] w-full my-5">
            <h2 className="text-2xl font-bold mb-6 text-gray-700 text-center">
              Custom Data Implementation
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-6">
                {renderSlider("Rainfall (mm)", rainfall, setRainfall, 0, 2000)}
                {renderSlider(
                  "Average Temperature (°C)",
                  avgTemp,
                  setAvgTemp,
                  -10,
                  50
                )}
                {renderSlider(
                  "Relative Humidity (%)",
                  relativeHumidity,
                  setRelativeHumidity,
                  0,
                  100
                )}
                {renderSlider(
                  "Soil Temperature (°C)",
                  soilTemp,
                  setSoilTemp,
                  -10,
                  50
                )}
                {renderSlider("Sand Content (%)", sand, setSand, 0, 100)}
                {renderSlider("pH Level", phLevel, setPhLevel, 0, 14, 0.1)}
                {renderSlider(
                  "Phosphorus (kg/Ha)",
                  phosphorus,
                  setPhosphorus,
                  0,
                  500
                )}
                {renderSlider(
                  "Potassium (kg/Ha)",
                  potassium,
                  setPotassium,
                  0,
                  1000
                )}
                {renderSlider("Clay Content (%)", clay, setClay, 0, 100)}
                {renderSlider(
                  "Production Area (Ha)",
                  productionArea,
                  setProductionArea,
                  0,
                  40000
                )}
              </div>
              <LoginButton name="Submit" />
            </form>
            {Object.keys(results).length > 0 ? (
              <div className="text-center">
                <Results response={results} />
              </div>
            ) : null}
          </div>
        )}
      </div>
    </>
  );
};

export default Page;
