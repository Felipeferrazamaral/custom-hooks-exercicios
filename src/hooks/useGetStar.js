import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";





const useGetStar = () => {


    const [starShipsList, setStarShipsList] = useState([]);


    useEffect(() => {
      axios
        .get(`${BASE_URL}/starships`)
        .then((response) => {
          setStarShipsList(response.data.results);
        })
        .catch((error) => {
          console.log(error);
        });
    },[]);

    
    return starShipsList




}



export default useGetStar