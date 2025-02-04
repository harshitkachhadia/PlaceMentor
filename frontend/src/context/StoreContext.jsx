import { createContext, useEffect, useState } from "react";
import axios from "axios";
export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const url = "http://localhost:8000";
  const [insightData, setInsightData] = useState();
  const [studentData,setStudentData] = useState({})
  const [token,setToken] = useState(localStorage.getItem("token"))
  
  
  useEffect(() => {
        student();
        // placeData();
  }, []); 
  

  // const placeData = async () => {
  //   try {
  //     const response = await axios.get(url + "/api/placementInsight/data");
  //     setInsightData(response.data.data);
  //   } catch (error) {
  //     console.error("Error fetching placement data:", error);
  //   }
  // };

  const student = async () => {
    try {
        
      const response = await axios.get(url + "/api/profile", {
        headers: { token : token },
      });
      // console.log(response.data);
      setStudentData(response.data)

    } catch (error) {
      console.error("Error fetching student data:", error);
    }
  };


  const contextValue = {
    url,
    token,
    setToken,
    insightData,
    setInsightData,
    studentData,
    setStudentData
  };
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
