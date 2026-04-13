import React from 'react';
import Banners from '../../assets/hero.png';
import Apps from '../../assets/Apps.png';
import Paly from '../../assets/play.png';
import Image from 'next/image';

const Banner = () => {
    return (
        <section className="flex flex-col items-center justify-center text-center pt-6 pb-0 py-20 px-6 bg-[#F9FAFB]">
            {/* Header Text */}
            <div className="max-w-4xl">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-[#101828] leading-tight">
                    We Build <br className="hidden md:block" /> 
                    <span className="text-[#7F56D9]">Productive</span> Apps
                </h1>
                <p className="mt-6 text-gray-600 text-base md:text-xl max-w-2xl mx-auto">
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. 
                    Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>
            </div>

            {/* App Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
                {/* Google Play */}
                <a 
                    href="https://play.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex justify-center  items-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all w-full sm:w-auto "
                >
                    <Image src={Paly} alt="Google Play" />
                    <div className="text-left">
                        <p className="text-lg font-semibold leading-tight text-gray-800">Google Play</p>
                    </div>
                </a>

                {/* App Store */}
                <a 
                    href="https://apps.apple.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-2.5 bg-white border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-all w-full sm:w-auto "
                >
                    <Image src={Apps} alt="App Store" />
                    <div className="text-left">
                      
                        <p className="text-lg font-semibold leading-tight text-gray-800">App Store</p>
                    </div>
                </a>
            </div>

            {/* Hero Mockup Image */}
            <div className="mt-16 w-full flex justify-center">
                <Image
                    src={Banners} 
                    alt="Hero Banner Mockup" 
                    className="w-full max-w-5xl h-auto object-contain pb-0"
                />
            </div>
        </section>
    );
};

export default Banner;