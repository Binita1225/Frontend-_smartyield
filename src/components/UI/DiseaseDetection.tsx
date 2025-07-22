"use client";

import React, { useState } from "react";

const DiseaseDetection = () => {
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("http://localhost:5000/api/DiseaseDetection/diseaseDetection", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Something went wrong!");

      const data = await response.json();
      setResult(data);
    } catch (err) {
      setError("Failed to detect disease. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Plant Disease Detection</h2>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />
      <button
        onClick={handleSubmit}
        disabled={!file || loading}
        className="bg-green-700 text-white px-4 py-2 rounded"
      >
        {loading ? "Detecting..." : "Upload & Detect"}
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {result && (
        <div className="mt-6 p-4 border rounded bg-gray-50">
          <p><strong>Disease:</strong> {result.label}</p>
          <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(2)}%</p>
          <p><strong>Recommendation:</strong> {result.recommendation}</p>
        </div>
      )}
    </div>
  );
};

export default DiseaseDetection;
