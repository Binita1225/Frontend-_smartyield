// "use client";
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { port } from "@/constants/appl.constant";
// import PrimaryButton from "@/components/UI/PrimaryButton";

// const DiseasesPage = () => {
//   const [diseases, setDiseases] = useState<any[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");

//   const fetchDiseases = async () => {
//     try {
//       const response = await axios.get(`${port}/Admin/diseases`);
//       setDiseases(response.data);
//       setLoading(false);
//     } catch (err) {
//       setError("Failed to fetch diseases");
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDiseases();
//   }, []);

//   const editTreatment = async (id: number, treatment: string) => {
//     try {
//       await axios.put(`${port}/Admin/diseases/${id}/treatment`, { treatment });
//       fetchDiseases(); // refresh list
//     } catch (err) {
//       console.error("Failed to update treatment", err);
//     }
//   };

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>{error}</p>;

//   return (
//     <div className="container mx-auto py-10">
//       <h1 className="text-2xl font-bold mb-5">Manage Disease Treatments</h1>
//       <table className="w-full border-collapse border border-gray-300">
//         <thead>
//           <tr className="bg-gray-200">
//             <th className="border p-2">ID</th>
//             <th className="border p-2">Disease Name</th>
//             <th className="border p-2">Treatment</th>
//             <th className="border p-2">Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {diseases.map((disease) => (
//             <tr key={disease.id}>
//               <td className="border p-2">{disease.id}</td>
//               <td className="border p-2">{disease.disease}</td>
//               <td className="border p-2">{disease.treatment}</td>
//               <td className="border p-2 flex gap-2">
//                 <PrimaryButton
//                   name="Edit"
//                   onClick={() => editTreatment(disease.id, disease.treatment)}
//                 />
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default DiseasesPage;

"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { port } from "@/constants/appl.constant";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SecondaryButton from "@/components/UI/SecondaryButton";

const DiseasesPage = () => {
  const [diseases, setDiseases] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTreatmentText, setEditTreatmentText] = useState("");

  const fetchDiseases = async () => {
    try {
      const response = await axios.get(`${port}/Admin/diseases`);
      setDiseases(response.data);
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch diseases");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDiseases();
  }, []);

  const startEditing = (id: number, currentTreatment: string) => {
    setEditingId(id);
    setEditTreatmentText(currentTreatment);
  };

  const saveTreatment = async (id: number) => {
    try {
      await axios.put(`${port}/Admin/diseases/${id}/treatment`, {
        treatment: editTreatmentText,
      });
      setEditingId(null);
      fetchDiseases();
    } catch (err) {
      console.error("Failed to update treatment", err);
    }
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditTreatmentText("");
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-2xl font-bold mb-5">Manage Disease Treatments</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Disease Name</th>
            <th className="border p-2">Treatment</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {diseases.map((disease) => (
            <tr key={disease.id}>
              <td className="border p-2">{disease.id}</td>
              <td className="border p-2">{disease.disease}</td>
              <td className="border p-2">
                {editingId === disease.id ? (
                  <input
                    type="text"
                    value={editTreatmentText}
                    onChange={(e) => setEditTreatmentText(e.target.value)}
                    className="border p-1 rounded w-full"
                  />
                ) : (
                  disease.treatment
                )}
              </td>
              <td className="border p-2 flex gap-2">
                {editingId === disease.id ? (
                  <>
                    <PrimaryButton
                      name="Save"
                      onClick={() => saveTreatment(disease.id)}
                    />
                    <SecondaryButton name="Cancel" onClick={cancelEditing} />
                  </>
                ) : (
                  <PrimaryButton
                    name="Edit"
                    onClick={() => startEditing(disease.id, disease.treatment)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DiseasesPage;
