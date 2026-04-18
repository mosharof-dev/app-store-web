
import Image from 'next/image';
import React from 'react';
import InstallToggleButton from '@/Components/Apps/InstallToggleButton';
import RatingChart from '@/Components/Apps/RatingChart';
import Downloads from '../../../assets/icon-downloads.png'

import Star from '../../../assets/icon-ratings.png'
import Review from '../../../assets/icon-review.png'



const appsPromise = async function () {
  const res = await fetch("http://localhost:3000/data.json");
  return res.json();
};

const AppsDetails = async ({ params }) => {
  const apps = await appsPromise();
  const { id } = await params;
  const app = apps.find(app => app.id === Number(id));



  return (
    <div className="min-h-screen bg-gray-50 flex justify-center py-10 px-4 font-sans">
      
      <div className="w-full container bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
        <title>{app.title}</title>
        {/* --- HEADER SECTION --- */}
        <div className="p-8 flex flex-col md:flex-row gap-8 items-start">
          {/* App Icon */}
          <div className="shrink-0">
            <div className="w-32 h-32 rounded-4xl border border-gray-100 shadow-sm p-1 overflow-hidden">
              <Image
                src={app.image}
                alt={app.title}
                width={128}
                height={128}
                className="w-full h-full object-cover rounded-[1.75rem]"
              />
            </div>
          </div>

          {/* App Info */}
          <div className="grow">
            <h1 className="text-2xl font-bold text-slate-900">{app.title}</h1>
            <p className="text-sm text-gray-500 mt-1">
              Developed by <span className="text-indigo-600 font-medium">{app.companyName}</span>
            </p>

            {/* Stats Row */}
            <div className="flex items-center gap-8 mt-6 mb-6">
              <div className="flex flex-col">
               <div>
                <Image
                src={Downloads}
                alt={app.title}
                width={40}
                height={40}
                className=" object-cover "
              />
               </div>
                
                <span className="text-xs text-gray-500">Downloads</span>
                <span className="font-bold text-lg text-slate-900">{app.downloads}</span>
              </div>
              
              <div className="flex flex-col">
               <div>
                <Image
                src={Star}
                alt={app.title}
                width={40}
                height={40}
                className=" object-cover "
              />
               </div> 
                <span className="text-xs text-gray-500">Average Ratings</span>
                <span className="font-bold text-lg text-slate-900">{app.ratingAvg}</span>
              </div>

              <div className="flex flex-col">
                <div>
                <Image
                src={Review}
                alt={app.title}
                width={40}
                height={40}
                className=" object-cover "
              />
               </div> 
                <span className="text-xs text-gray-500">Total Reviews</span>
                <span className="font-bold text-lg text-slate-900">{app.reviews}</span>
              </div>
            </div>

            <InstallToggleButton app={app} />
          </div>
        </div>

        <hr className="border-gray-100" />

        {/* --- RATINGS CHART SECTION --- */}
        <div className="p-8">
          <h2 className="text-lg font-bold text-slate-900 mb-2">Ratings</h2>
          {/* Passing the ratings array to our Client Component */}
          <RatingChart ratings={app.ratings} />
        </div>

        <hr className="border-gray-100" />

        {/* --- DESCRIPTION SECTION --- */}
        <div className="p-8 mb-4">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Description</h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            {app.description}
          </p>
        </div>

      </div>
    </div>
  );
};

export default AppsDetails;