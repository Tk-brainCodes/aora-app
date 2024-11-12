import { useState, useEffect } from "react";
import { Alert } from "react-native";

const useAppwrite = (fn: any) => {
  const [data, setdata] = useState<any>([]);
  const [loading, setloading] = useState(true);

  const fetchData = async () => {
    setloading(true);

    try {
      const response = fn();
      setdata(response);
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setloading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => fetchData();
  return { data, loading, refetch };
};

export default useAppwrite;
