"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface DiseaseDetectionResponse {
  Disease: string;
  Treatment: string;
}

const DiseaseDetection = () => {
  const [file, setFile] = useState<File | null>(null);
  const [result, setResult] = useState<DiseaseDetectionResponse | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      if (selectedFile.size > 10 * 1024 * 1024) {
        // 10 MB limit
        setError("File size exceeds 10 MB limit.");
        return;
      }
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setResult(null);
      setError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError("Please select an image to upload.");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData();
    formData.append("File", file); // <-- fixed here

    try {
      const response = await fetch(
        "https://localhost:7217/api/DiseaseDetection/diseaseDetection",
        {
          method: "POST",
          body: formData,
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to process the image: ${response.statusText}`);
      }

      const data: DiseaseDetectionResponse = await response.json();
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className={`bg-white ${montserrat.className}`}>
      <div className="container mx-auto px-4 py-8">
        <h3 className="text-[40px] font-semibold mb-4 text-center text-[#4C6F35]">
          Wheat Disease Detection
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative flex justify-center items-center">
            {preview ? (
              <img
                src={preview}
                alt="Uploaded Preview"
                className="max-w-[500px] rounded-lg shadow-md"
              />
            ) : (
              <div className="flex items-center justify-center w-[500px] h-[300px] bg-gray-100 rounded-lg">
                <p className="text-gray-500">Image Preview</p>
              </div>
            )}
          </div>
          <div>
            <h4 className="text-[18px] font-semibold mb-4 text-[#4C6F35]">
              Upload an Image to Detect Wheat Diseases
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500
                  file:mr-4 file:py-2 file:px-4
                  file:rounded-full file:border-0
                  file:text-sm file:font-semibold
                  file:bg-[#4C6F35] file:text-[#F2C200]
                  hover:file:bg-[#3b5a29]"
              />
              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-2 px-4 rounded-full text-[#F2C200] bg-[#4C6F35] hover:bg-[#3b5a29] transition-colors ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Processing..." : "Detect Disease"}
              </button>
            </form>
            {error && (
              <div className="mt-4 text-red-600">
                <p>{error}</p>
              </div>
            )}
            {result && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg shadow-md">
                <h4 className="text-lg font-medium text-[#4C6F35]">
                  Detection Result
                </h4>
                <p className="mt-2">
                  <span className="font-semibold">Disease:</span>{" "}
                  {result.Disease}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Treatment:</span>{" "}
                  {result.Treatment}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiseaseDetection;
