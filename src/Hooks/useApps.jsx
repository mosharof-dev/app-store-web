
import React, {  useEffect, useState } from 'react';

const useApps = () => {
    const [apps, setApps] = useState([]); 
      
      const [loading, setLoading] = useState(true);
      
      useEffect(() => {
        document.title = "Hero.io - Apps";
         const fetchData = async () => {
          const res = await fetch('/data.json');
          const data = await res.json();
        //   console.log(data, "apps data");
          
          
              setApps(data);
          setLoading(false);      
         
          
        };
         fetchData(); 
        
        }, []);
    
        console.log(apps, loading, 'From All Apps ');
    
    return { apps, loading };
};

export default useApps;