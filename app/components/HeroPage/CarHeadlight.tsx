'use client'

import Image from "next/image"
import blackCar from '@/public/images/cars/lamborghini-huracan.png'
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CarHeadlight() {

    const [lightsOn, setLightsOn] = useState(false);
    const router = useRouter();

    const handleEnter = () => {
        setLightsOn(true);
        setTimeout(() => {
            router.push("/login");
        }, 200);
    };

  return (
    <>
        <div className={`w-[80%] mx-auto pt-15 pb-15 md:py-10  ${lightsOn ? "headlights" : "fade-in fade-delay-2"}`}>
            <Image src={blackCar} alt="suber" className="w-full h-auto"/>
        </div>
        {/* <div className="flex items-center justify-center">
            <span className="block relative w-[40px] before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
            before:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]"></span>
            <Link href={'/login'} className="
            relative uppercase text-[#fefefe] text-2xl px-14 py-1.5 outline-none 
            bg-[linear-gradient(to_right,transparent_0%,#2a353d_50%,transparent_100%)]
            before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
            before:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]
            after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]
            after:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]
            ">unlock
            </Link>
            <span className="block relative w-[40px] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]
            after:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]"></span>
        </div> */}
        <button onClick={handleEnter} className="enter-pulse uppercase font-avant text-white tracking-wider text-base font-semibold outline-none">Enter</button>
    </>
  )
}
