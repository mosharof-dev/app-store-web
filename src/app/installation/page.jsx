// 'use client';
// import { AppsContext } from '@/Context/AppsProvider';
// import Image from 'next/image';
// import React, { useContext } from 'react';

// import { toast } from 'react-toastify';

// const InstallApps = () => {
//     const { installing, setInstalling } = useContext(AppsContext);
    
//     const handleUninstall = (app) => {
//         const updatedInstalling = installing.filter((item) => item.id !== app.id);
//         setInstalling(updatedInstalling);
//         toast.error(`${app.title} has been uninstalled!`);
//         console.log("Installing Apps Data:", installing);
       
//     }
//     return (
//         <>
            
            
//             <div className='container mx-auto px-4 md:px-6 lg:px-8 py-10 min-h-[70vh]'>
//                 {installing.length === 0 ? (
//                     <div className='text-center text-gray-500 text-lg md:text-xl mt-20'>
//                         No apps installed yet. Go to <span className='text-blue-600 font-medium'>All Apps</span> to install your favorite apps.
//                     </div>
//                 ) : (
                    
//                     <div className='flex flex-col gap-4 container mx-auto'>
//                         {installing.map((app) => (
//                             <div 
//                                 key={app.id} 
//                                 className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between gap-3 sm:gap-6 transition-all hover:shadow-md'
//                             >
//                                 {/* Left Side: Icon + Text Info */}
//                                 <div className='flex items-center gap-4 flex-1 min-w-0'>
//                                     {/* App Icon */}
//                                     <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100'>
//                                         <Image
//                                             src={app.image} 
//                                             alt={app.title} 
//                                             className='w-full h-full object-cover' 
//                                         />
//                                     </div>

//                                     {/* App Details */}
//                                     <div className='flex flex-col min-w-0'>
//                                         <h3 className='text-base sm:text-lg font-bold text-gray-800 truncate'>
//                                             {app.title}
//                                         </h3>
                                        
//                                         <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs sm:text-sm text-gray-500'>
//                                             <span className='flex items-center gap-1'>
//                                                 <span className='text-green-500 font-bold text-lg'>↓</span> {app.downloads}
//                                             </span>
//                                             <span className='flex items-center gap-1'>
//                                                 <span className='text-orange-400'>★</span> {app.ratingAvg}
//                                             </span>
//                                             <span className='hidden sm:block text-gray-300'>|</span>
//                                             <span>{app.size} MB</span>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {/* Right Side: Action Button */}
//                                 <div className='shrink-0'>
//                                     <button
//                                     onClick={() => handleUninstall(app)}
//                                     className='bg-[#00D094] hover:bg-[#00b882] text-white px-5 py-2 sm:px-7 rounded-lg text-sm font-semibold transition-all active:scale-95 shadow-sm'>
//                                         Uninstall
//                                     </button>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </>
//     );
// };

// export default InstallApps;


'use client';
import { AppsContext } from '@/Context/AppsProvider';
import Image from 'next/image';
import React, { useContext } from 'react';
import { toast } from 'react-toastify';

const InstallApps = () => {
    const { installing, setInstalling } = useContext(AppsContext);

    console.log(installing);
    
    const handleUninstall = (app) => {
        console.log("Uninstall button clicked for app:", app.title);
        const updatedInstalling = installing.filter((item) => item.id !== app.id);
        setInstalling( updatedInstalling);
        
        toast.error(`${app.title} has been uninstalled!`);
    };

    return (
        <div className='container mx-auto px-4 md:px-6 lg:px-8 py-10 min-h-[70vh]'>
            {installing?.length === 0 ? (
                <div className='text-center text-gray-500 text-lg md:text-xl mt-20'>
                    No apps installed yet. Go to <span className='text-blue-600 font-medium'>All Apps</span> to install your favorite apps.
                </div>
            ) : (
                <div className='flex flex-col gap-4 container mx-auto'>
                    {installing?.map((app, index) => (
                        <div 
                            // Ekhane fix ta kora hoyeche: app.id na thakleo ba duplicate holeo error asbe na
                            key={`${app?.id || 'fallback-id'}-${index}`} 
                            className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between gap-3 sm:gap-6 transition-all hover:shadow-md'
                        >
                            {/* Left Side: Icon + Text Info */}
                            <div className='flex items-center gap-4 flex-1 min-w-0'>
                                {/* App Icon */}
                                <div className='w-14 h-14 sm:w-16 sm:h-16 bg-gray-50 rounded-xl overflow-hidden shrink-0 border border-gray-100 relative'>
                                    {/* app.image na thakle jate image tag error na dey tai safe checking */}
                                    {app?.image && (
                                        <Image
                                            src={app.image} 
                                            alt={app?.title || 'App Icon'} 
                                            fill
                                            className='object-cover' 
                                        />
                                    )}
                                </div>

                                {/* App Details */}
                                <div className='flex flex-col min-w-0'>
                                    <h3 className='text-base sm:text-lg font-bold text-gray-800 truncate'>
                                        {app?.title || 'Unknown App'}
                                    </h3>
                                    
                                    <div className='flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-xs sm:text-sm text-gray-500'>
                                        <span className='flex items-center gap-1'>
                                            <span className='text-green-500 font-bold text-lg'>↓</span> {app?.downloads || '0'}
                                        </span>
                                        <span className='flex items-center gap-1'>
                                            <span className='text-orange-400'>★</span> {app?.ratingAvg || '0.0'}
                                        </span>
                                        <span className='hidden sm:block text-gray-300'>|</span>
                                        <span>{app?.size || '0'} MB</span>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side: Action Button */}
                            <div className='shrink-0'>
                                <button
                                    onClick={() => handleUninstall(app)}
                                    className='bg-[#00D094] hover:bg-[#00b882] text-white px-5 py-2 sm:px-7 rounded-lg text-sm font-semibold transition-all active:scale-95 shadow-sm'
                                >
                                    Uninstall
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default InstallApps;