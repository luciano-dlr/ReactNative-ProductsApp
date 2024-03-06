

import React, { useState } from 'react'

export const useHomeWorkScreenController = () => {

  const [number, setNumber] = useState('');
  const [userData, setUserData] = useState<any>([]);

  

  const fetchData = async () => {
    try {
      const response = await fetch(`https://random-data-api.com/api/v2/users?size=${number}`);
      const data = await response.json();
      console.log("🚀 ~ fetchData ~ number:", number)
      setUserData(Array.isArray(data) ? data : [data]);
      // console.log("🚀 ~ fetchData ~ data:", JSON.stringify(data,null,5))
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };




  return {
    fetchData,
    userData,
    number,
    setNumber
  
  }
}


