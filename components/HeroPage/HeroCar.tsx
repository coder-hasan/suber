'use client'

import Image from "next/image"
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import CustomButton from "../Buttons/CustomButton";
import Link from "next/link";
import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'
import blackCar from '@/public/images/cars/hero-lambo.png'

export default function HeroCar() {

    const [clickToNext, setClickToNext] = useState(false);
    const router = useRouter();
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const handleEnter = () => {
        setClickToNext(true);
    };

  return (
    <>
        <header className={`flex justify-center pt-[70px] relative z-[99999]`}>
            <div className="w-1/3"></div>
            <Link className="w-1/3 inline-block outline-none fade-in fade-delay-1" href={'/'}>
                <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
            </Link>
            <div className="w-1/3 pr-7 flex items-center justify-end gap-2"></div>
        </header>

        <div className="relative w-full h-[calc(100dvh-110px)] md:min-h-screen flex flex-col pb-[70px] justify-end items-center">
            <div className="absolute top-0 left-0 w-full h-full z-0 fade-in fade-delay-2">
                <AnimatePresence>
                    {!clickToNext && (
                        <motion.div
                            key="image"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0.8 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            className="absolute w-full -top-[20px] md:-top-[80px] left-1/2 -translate-x-1/2"
                        >
                            <Image src={blackCar} alt="suber" className={`object-cover w-full`}/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {clickToNext && (
                        <motion.video
                            className="object-cover absolute -top-[20px] md:-top-[80px] left-1/2 -translate-x-1/2" 
                            key="video"
                            ref={videoRef}
                            initial={{ opacity: 0.8 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.2, ease: "easeInOut" }}
                            autoPlay
                            muted
                            playsInline
                            preload="none"
                            onLoadedData={() => {
                                if (videoRef.current) {
                                    videoRef.current.playbackRate = 1.75;
                                }
                            }}
                            onEnded={() => router.push("/login")}
                        >
                            <source src="/video/Lambo-to-ferrari-hero-screen-to-login.mp4" type="video/mp4"/>
                        </motion.video>
                    )}
                </AnimatePresence>
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
