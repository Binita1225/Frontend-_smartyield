import React, { useState, useEffect } from "react";
import axios from "axios";
import { port } from "@/constants/appl.constant";

const Page = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${port}/user/UserDetails`);
        setUserData(response.data);
        setLoading(false);
        console.log(userData);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return <div></div>;
};

export default Page;
