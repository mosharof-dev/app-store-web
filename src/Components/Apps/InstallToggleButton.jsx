'use client';
import { AppsContext } from '@/Context/AppsProvider';
import React, { useContext, useState } from 'react';
import { toast } from 'react-toastify';

const InstallToggleButton = ({ app }) => {
const { installing, setInstalling } = useContext(AppsContext);

const [isInstalled, setIsInstalled] = useState(false);

    const handleInstall = (currentApp) => {
        setIsInstalled(true)
        // Check if the app is already in the installing array
        const isAlreadyInstalled = installing.find((item) => item.id === currentApp.id);
        
        if (isAlreadyInstalled) {
            toast.info(`${currentApp.title} is already installed!`);
            return;
        }
        
        
        setInstalling([...installing, currentApp]);
        toast.success(`${currentApp.title} has been installed!`);
    };

    return (
        <div className="mt-7">
            
            <button 
                className="bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-full text-sm hover:bg-emerald-600 transition duration-150 shadow-md" 
                onClick={() => handleInstall(app)}
                disabled={isInstalled}
            >
                {isInstalled ? "Installed" :  `Install Now (${app.size} MB)`}
               
            </button>
        </div>
    );
};

export default InstallToggleButton;