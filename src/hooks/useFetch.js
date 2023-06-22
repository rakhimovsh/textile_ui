import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url, method = 'GET', requestData = null) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const axiosConfig = { method, url };
      if (requestData) {
        axiosConfig.data = requestData;
      }

      try {
        const response = await axios(axiosConfig);
        setData(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [url, method, requestData]);

  return { data, loading, error };
}

export default useFetch;