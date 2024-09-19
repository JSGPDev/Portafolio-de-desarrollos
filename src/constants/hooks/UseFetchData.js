import { useState, useEffect } from "react";
import GetData from "../../utils/utilsDataManager";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const result = await GetData();

      if (result.error) {
        setError(result.data);
      } else {
        setData(result.data);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return { data, error, loading };
};

export default useFetchData;
