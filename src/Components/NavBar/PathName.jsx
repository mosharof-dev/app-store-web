'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const PathName = ({href, children}) => {
    const pathName = usePathname();

    return (
        <Link 
            href={href}
            className={`font-medium w-full relative ${pathName === href ? 'text-primary' : 'text-neutral-700'}`} 
        >
            {children}
            
            {/* Active Indicator */}
            {pathName === href && (
                <span className="absolute left-0 -bottom-1.5 h-0.5 w-full bg-primary rounded-full hidden lg:block"></span>
            )}
        </Link>
    );
};

export default PathName;