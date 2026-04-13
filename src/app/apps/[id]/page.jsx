import InstallToggleButton from '@/Components/Apps/InstallToggleButton';
import Image from 'next/image';
import React from 'react';


export const metadata = {
  title: "App Details | App Store Web",
  description: "A Next.js application with Tailwind CSS and DaisyUI.",
};
const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  const data = await res.json();
  return data;
};

const AppsDetails = async({params}) => {

    const apps = await appsPromise();

    const {id} = await params
    console.log(id, "params");

    const app = apps.find(app => app.id === Number(id))
    console.log(app, "Mahin");


    return (
        <div>
             <div className="container mx-auto px-4 md:px-6 lg:px-8  bg-gray-100 min-h-screen p-4 md:p-10 font-sans">
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
                <title>{app.title}</title>
                {/* Header/Card Section */}
                <div className="p-6 md:p-8 flex flex-col sm:flex-row sm:items-center sm:space-x-8 border-b border-gray-100">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-3xl border-2 border-white shadow-inner  mx-auto sm:mx-0 overflow-hidden bg-gray-50 flex items-center justify-center p-2">
                        <Image
                            src={app.image} 
                            alt={app.title}
                            width={100}
                            height={100}
                            className="w-full h-full object-contain rounded-2xl" 
                        />
                    </div>
                    <div className=" mt-6 sm:mt-0 text-center sm:text-left">
                        <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">{app.title}</h2>
                        <p className="text-sm text-gray-600 mt-1">Developed by <span className="text-blue-600 font-medium">{app.companyName}</span></p>
                        
                        {/* Stats Section */}
                        <div className="flex flex-wrap justify-center sm:justify-start gap-x-8 gap-y-3 mt-5 items-center">
                            <div className="flex flex-col items-center sm:items-start">
                                <span className="text-xs text-gray-500">Downloads</span>
                                <div className="flex items-center space-x-1.5 mt-0.5">
                                    <span className="text-green-500 font-bold text-sm">↓</span>
                                    <span className="font-extrabold text-2xl text-teal-950">{app.downloads}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start border-l border-gray-200 pl-8">
                                <span className="text-xs text-gray-500">Average Ratings</span>
                                <div className="flex items-center space-x-1.5 mt-0.5">
                                    <span className="text-orange-400 font-bold text-sm">★</span>
                                    <span className="font-extrabold text-2xl text-teal-950">{app.ratingAvg}</span>
                                </div>
                            </div>
                            <div className="flex flex-col items-center sm:items-start border-l border-gray-200 pl-8">
                                <span className="text-xs text-gray-500">Total Reviews</span>
                                <div className="flex items-center space-x-1.5 mt-0.5">
                                    <span className="text-purple-600 font-bold text-sm">★</span>
                                    <span className="font-extrabold text-2xl text-teal-950">{app.reviews}</span>
                                </div>
                            </div>
                        </div>

                        {/* Button Section */}
                        <InstallToggleButton app={app} />
                    </div>
                </div>

                {/* About This Game Section */}
                <div className="p-8 md:p-10 border-b border-gray-100">
                    <h3 className="text-xl font-semibold text-teal-950 mb-4">About This Game</h3>
                    <p className="text-gray-700 leading-relaxed text-sm">{app.description}</p>
                </div>

                {/* Customer Ratings Section */}
                <div className="p-8 md:p-10">
                    <h3 className="text-xl font-semibold text-teal-950 mb-6">Customer Ratings & Reviews</h3>
                    <div className="flex flex-col md:flex-row md:items-start gap-10">
                        <div className="flex flex-col items-center w-40 text-center">
                            <span className="text-7xl font-extrabold text-teal-950">{app.ratingAvg}</span>
                            <div className="flex text-orange-400 text-3xl mt-2">★★★★★</div>
                            <span className="text-sm text-gray-600 mt-2">{app.reviews} reviews</span>
                        </div>
                        <div className="space-y-2.5">
                            {app.ratings.map(rating => (
                                <div key={rating.name} className="flex items-center space-x-4">
                                    <span className="text-xs text-teal-950 w-12 text-right">{rating.name}</span>
                                    <div className=" h-2 bg-gray-100 rounded-full overflow-hidden relative">
                                        <div 
                                            className="absolute inset-y-0 left-0 bg-blue-900 rounded-full" 
                                            style={{width: `${(rating.count / app.ratings[4].count) * 100}%`}}
                                        ></div>
                                    </div>
                                    <span className="text-xs text-gray-600 w-24 text-left">{(rating.count / 1000000).toFixed(1)}M</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
        </div>
    );
};

export default AppsDetails;