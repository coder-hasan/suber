'use client'

import Image from "next/image"
import blackCar from '@/public/images/cars/SUBER-MASTER-HERO-SCREEN.png'
import blackCarLight from '@/public/images/cars/SUBER-MASTER-HERO-SCREEN-lighting.png'
import { useState } from "react";
import { useRouter } from "next/navigation";
import CustomButton from "../Buttons/CustomButton";
import Link from "next/link";
import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'

export default function HeroCar() {

    const [lightsOn, setLightsOn] = useState(false);
    const router = useRouter();

    const handleEnter = () => {
        setLightsOn(true);
        setTimeout(() => {
            router.push("/login");
        }, 450);
    };

  return (
    <>
        <header className={`flex justify-center pt-[70px] relative z-[99999]`}>
            <div className="w-1/3"></div>
            <Link className="w-1/3 inline-block outline-none fade-in fade-delay-1" href={'/'}>
                <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
            </Link>
            <div className="w-1/3 pr-7 flex items-center justify-end gap-2 bg-black">
                
            </div>
        </header>

        <div className="relative w-full h-[calc(100dvh-110px)] md:min-h-screen flex flex-col pb-[70px] justify-end items-center">
            <div className="absolute top-0 left-0 w-full h-full z-0 fade-in fade-delay-2">
                <Image src={lightsOn ? blackCarLight : blackCar} alt="suber" className="object-cover absolute -top-[20px] md:-top-[80px]"/>
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
            <CustomButton btnText={'Enter'} clickHandlar={handleEnter}/>
        </div>
    </>
  )
}
