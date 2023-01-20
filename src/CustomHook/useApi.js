import { useEffect, useState } from "react";
const useApi = (url) => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState("");

  const fetchdata = async (url, obj) => {
    setloading(true);
    try {
      const response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        Headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setloading(false);
      return data;
    } catch (error) {
      console.log("error");
    }
  };

  return { data, loading, error, fetchdata };
};
export default useApi;
