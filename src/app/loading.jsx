import Image from 'next/image';
import React from 'react';
import { PulseLoader } from 'react-spinners';



const loading = () => {
    return (
         <div className=" min-h-[70vh] flex items-center justify-center">
              
               <PulseLoader color='#632EE3' />
                 
               
               
            </div>
    );
};

export default loading;