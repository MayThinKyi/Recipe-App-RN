import { useEffect, useState } from "react"
import { getMeals } from "../api/mealApi";

const useApi=(url)=>{
    const [err,setErr]=useState(url);
    const [loading,setLoading]=useState(false);
    const [data,setData]=useState([]);

    const fetchData=async ()=>{
        setLoading(true);
         try {
          const res= await getMeals(url) ;
          setData(res.data?.meals);
          setLoading(false);
          } catch (error) {
             setErr(error);
            console.log('Error when fetching Meals ',error)
            setLoading(false);
         }

    }
    useEffect(()=>{
        fetchData()
    },[url])
     return {err,loading,data}
}   
export default useApi