import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaDownload, FaStar } from "react-icons/fa";

const AppCard = ({ app }) => {
    return (
     <Link href={`/apps/${app.id}`}>
        <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                    >
                            {/* Image Section */}
                        <div className="w-full aspect-square bg-[#D9D9D9] rounded-xl overflow-hidden mb-4">
                            
                            {app.image && (
                                <Image width={100} height={100} src={app.image} alt={app.title} className="w-full h-full object-cover" />
                            )}
                        </div>

                        {/* Title Section */}
                        <h3 className="text-[15px] font-semibold text-[#101828] mb-4 truncate">
                            {app.title}
                        </h3>

                        {/* Footer / Stats Section */}
                        <div className="flex justify-between items-center">
                            
                            {/* Downloads Badge */}
                            <div className="flex items-center gap-1.5 bg-[#ECFDF5] text-[#10B981] px-2.5 py-1 rounded-md text-xs font-bold tracking-wide">
                                <FaDownload className="text-[10px]" />
                                <span>{app.downloads}</span>
                            </div>

                            {/* Rating Badge */}
                            <div className="flex items-center gap-1.5 bg-[#FFF7ED] text-[#F97316] px-2.5 py-1 rounded-md text-xs font-bold tracking-wide">
                                <FaStar className="text-[10px]" />
                                <span>{app.ratingAvg}</span>
                            </div>

                        </div>
</div>
     </Link>
    );
};
    
export default AppCard;