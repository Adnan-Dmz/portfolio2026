import { useEffect, useState } from "react";
const useStyle=()=>{
    const [isLight,setLight]=useState(()=>{
      const datalight=localStorage.getItem("change_light");
      return datalight!==null ?  JSON.parse(datalight):false
    })

    const [isPersian,setLanguage]=useState(()=>{
      const datapersian=localStorage.getItem("save_language");
      return  datapersian!==null? JSON.parse(datapersian) :true
    })
    
   useEffect(()=>{
       localStorage.setItem("change_light",JSON.stringify(isLight))  
    },[isLight]) 
    useEffect(()=>{
       localStorage.setItem("save_language",JSON.stringify(isPersian))  
    },[isPersian]) 
    const toggleTheme=()=>{
        setLight(t=>!t)
    }
     const toggleLanguage=()=>{
        setLanguage(t=>!t)
    }
    return {isLight,toggleTheme,isPersian,toggleLanguage};
};
export default useStyle