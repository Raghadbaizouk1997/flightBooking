import { useState } from "react";
import axios from "axios";

const useApi = () => {
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [response, setResponse] = useState(null);

  const makeRequest = async (url, method, data) => {
    setLoading(true);

    try {
      const config = {
        method,
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data,
      };

      const response = await axios(config);

      setResponse(response.data);

      return response.data;
    } catch (error) {
      setError(error.message || "An error occurred.");
      throw error;
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, error, response, makeRequest };
};

export default useApi;
