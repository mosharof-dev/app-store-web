import Image from 'next/image';
import FooterLogo from '../../assets/logo.png';

import { FaXTwitter, FaLinkedin, FaFacebook } from "react-icons/fa6";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-[#031326] text-white pt-12 pb-6 px-6">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
                
                {/* Top Section */}
                <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
                    
                    {/* Left Side: Logo & Brand Name */}
                    <div className="flex items-center gap-3">
                        <Image
                            src={FooterLogo} 
                            alt="HERO.IO Logo" 
                            className="w-10 h-10 object-contain" 
                        />
                        <span className="text-xl font-bold tracking-wide">
                            HERO.IO
                        </span>
                    </div>

                    {/* Right Side: Social Links */}
                    <div className="flex flex-col items-center md:items-end gap-3">
                        <h4 className="text-lg font-medium">Social Links</h4>
                        <div className="flex gap-4 text-xl">
                            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                                <FaXTwitter />
                            </a>
                            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="hover:text-[#8B5CF6] transition-colors">
                                <FaFacebook />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <hr className="border-t border-gray-700 my-8 w-full" />

                {/* Bottom Section: Copyright */}
                <div className="text-center text-sm text-gray-400">
                    <p>Copyright © {currentYear} - All right reserved</p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;