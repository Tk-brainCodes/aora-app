import { useState, useEffect, useCallback } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: () => Promise<any>) => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  // Memoize the fetchData function using useCallback
  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fn();
      setData(response);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setLoading(false);
    }
  }, [fn]);

  // Run fetchData on component mount
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  // Refetch function to manually trigger data fetching
  const refetch = fetchData;

  return { data, loading, refetch };
};

export default useAppwrite;
