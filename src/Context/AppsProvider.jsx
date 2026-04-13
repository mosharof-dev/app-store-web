'use client';
import { useState } from "react";
import React, { createContext } from 'react';

export const AppsContext = createContext();
const AppsProvider = ({ children }) => {
    const [installing, setInstalling] =useState([]);
    const data = {
      
      installing,
      setInstalling
    }
    return (
        <AppsContext.Provider value={data}>
            {children}
        </AppsContext.Provider>
    );
};
   

export default AppsProvider;