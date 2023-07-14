'use client';

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div 
            onClick={() => router.push('/')}
            className="
                flex 
                items-center 
                justify-between 
                py-3
                md:py-5 
                md:block
            "
         >
            <div className="
                container 
                flex 
                items-center 
                space-x-2
                "
                >
              <h2 className="text-2xl font-bold text-rose-500 ">StayZen</h2>
            </div>
        </div>
          
    )
}


export default Logo;