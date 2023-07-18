import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/constants";
import axios from "axios";



const useRequestData = (path) => {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isError, setIsError] = useState(false)
 

    useEffect(() => {
      axios
        .get(`${BASE_URL}${path}`)
        .then((response) => {
          setData(response.data.results);
          setIsLoading(false)
        })
        .catch((error) => {
          console.log(error);
          setIsLoading(false)
          setIsError(true)
        });
    }, []);
  

return [data, isLoading, isError]

}


export default useRequestData