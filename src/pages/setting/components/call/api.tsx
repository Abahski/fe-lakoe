import { useState, useEffect } from "react";
import axios from "axios";

const useFetchDistricts = (districtCode: any) => {
  const [districts, setDistricts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${districtCode}.json`
        );

        setDistricts(response.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();

    return () => {
      setDistricts([]);
    };
  }, [districtCode]);

  return { districts, loading };
};

export default useFetchDistricts;
