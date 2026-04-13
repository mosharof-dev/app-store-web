"use client"

import { HashLoader } from "react-spinners";
import Link from "next/link";
import AppCard from "../UI/AppCard";
import useApps from "@/Hooks/useApps";



const TrandingApps = () => {
// const data = use(appsPromise);
// console.log(data);

// const data = useLoaderData();
// console.log(data, "apps data");

const { apps, loading } = useApps();
    return (
       
<section className="bg-[#F8F9FA] py-16 px-4 md:px-6 lg:px-8 xl:px-12">
            
    {/* Header Section */}
    <div className="max-w-3xl mx-auto flex flex-col items-center text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F172A] mb-3">
            Trending Apps
        </h2>
        <p className="text-sm md:text-base text-gray-500">
            Explore All Trending Apps on the Market developed by us
        </p>
    </div>

    {/* Main Grid Container */}
    { loading ? <div className="  flex justify-center py-10 items-center  text-blue-500">
        <HashLoader color="#8B5CF6" />
    </div> : 
    <div>
        <div className="container mx-auto  md:px-6 lg:px-8 mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {apps.slice(0, 8).map(app => (
            // Card Wrapper
            <AppCard key={app.id} app={app} />
        ))}

    

    </div>
            {/* Show All Button */}
        <div className="flex container mx-auto align-middle justify-center py-12">
                <Link href="/apps" className="bg-[#8B5CF6] text-white  py-2 px-4 rounded-md hover:bg-[#7C3AED] transition duration-300">
                Show All
                </Link>
        </div>
    </div>}
                        
        
</section>
    );
};

export default TrandingApps;