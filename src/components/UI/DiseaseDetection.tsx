"use client";

import React, { useState } from "react";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

interface DiseaseDetectionResponse {
  disease: string;
  treatment: string;
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
    <section className={`bg-[#f7f4ec] min-h-screen ${montserrat.className}`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-[#000000] mb-10">
          Wheat Disease Detection
        </h1>

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Left: Image preview */}
          <div className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center">
            <h2 className="text-lg font-medium mb-4 text-[#000000]">
              Uploaded Image
            </h2>
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-full max-w-[400px] h-auto rounded-lg border border-gray-300"
              />
            ) : (
              <img
                src="wheatdefault.webp"
                alt="Default Wheat"
                className="w-full max-w-[400px] h-auto rounded-lg border border-dashed border-gray-300 bg-gray-50"
              />
            )}
          </div>

          {/* Right: Upload + Results */}
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h2 className="text-lg font-medium mb-4 text-[#050505]">
              Upload an image to detect diseases
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-700 border border-gray-300 rounded-md cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-[#4C6F35] file:text-white hover:file:bg-[#3b5a29]"
              />

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full py-3 text-lg font-semibold rounded-full transition-colors text-white bg-[#4C6F35] hover:bg-[#3b5a29] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Analyzing..." : "Detect Disease"}
              </button>
            </form>

            {error && (
              <p className="mt-4 text-red-600 text-sm text-center">{error}</p>
            )}

            {result && (
              <div className="mt-6 border-t pt-4">
                <h3 className="text-xl font-semibold text-[#4C6F35] mb-2">
                  Detection Result
                </h3>
                <p className="text-gray-800">
                  <strong>Disease:</strong> {result.disease}
                </p>
                <p className="text-gray-800 mt-1">
                  <strong>Treatment:</strong> {result.treatment}
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
