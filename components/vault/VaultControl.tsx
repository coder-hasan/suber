'use client'

import Image from "next/image"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

import limeCar from '@/public/images/cars/Lime-green-Lamborghini-in-moody-studio.png';
import blueCar from '@/public/images/cars/blue_lambo.png';
import yellowCar from '@/public/images/cars/yellowLambo.png';
import NavyBlueCar from '@/public/images/cars/Navy_Blue.png';
import universalBG from '@/public/images/backgrounds/SUPER-MASTER-BACKGROUND.png'

export default function VaultControl() {
    const cars = [ limeCar, blueCar, yellowCar, NavyBlueCar ];
    const [index, setIndex] = useState(0);
    const [prevIndex, setPrevIndex] = useState(0);
    const next = () => {
        setPrevIndex(index);
        setIndex((i) => (i + 1) % cars.length)
    };
    const prev = () => {
        setPrevIndex(index);
        setIndex((i) => (i - 1 + cars.length) % cars.length);
    };
  return (
    <div className='relative w-full h-[calc(100dvh-110px)] md:min-h-screen flex flex-col pb-[70px] justify-between items-center'>

        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image src={limeCar} alt="suber" priority className="absolute left-1/2 -translate-x-1/2 -top-[20px] md:-top-[80px]"/>
            
            {/* <div className="absolute w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={"old-" + index}
                        src={cars[prevIndex].src}
                        initial={{ opacity: 1, scale: 1, }}
                        animate={{ opacity: 0.4, scale: 1, }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="absolute inset-0 will-change-transform"
                    />
                    <motion.img
                        key={"new-" + index}
                        src={cars[index].src}
                        initial={{ opacity: 0.9, scale: 0.995, filter: "blur(6px)", }}
                        animate={{ opacity: 1, scale: 1, filter: "blur(0px)", }}
                        exit={{}}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1]}}
                        className="absolute inset-0 will-change-transform"
                    />
                </AnimatePresence>
            </div>
            <motion.div
                key={"light-" + index}
                initial={{ x: "-120%", opacity: 0 }}
                animate={{ x: "120%", opacity: [0, 1, 0] }}
                transition={{ duration: 0.6, times: [0, 0.5, 1], ease: "easeInOut"}}
                className="pointer-events-none absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        w-[650px] h-[320px] 
                        bg-gradient-to-r from-transparent via-white/50 to-transparent 
                        blur-xl"
            />
            <motion.div
                key={"blur-" + index}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0] }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute top-1/2 left-1/2 
                        -translate-x-1/2 -translate-y-1/2 
                        w-[650px] h-[320px] 
                        bg-white/10 blur-2xl"
            /> */}
            {/* <motion.div
                key={"light-" + index}
                initial={{ x: "-100%", opacity: 0 }}
                animate={{ x: "100%", opacity: [0, 1, 0] }}
                transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                }}
                className="pointer-events-none absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2 
                            w-[600px] h-[300px] 
                            bg-gradient-to-r from-transparent via-white/40 to-transparent 
                            blur-xl"
            /> */}
            {/* <motion.div
                key={"glow-" + index}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.4, 0] }}
                transition={{ duration: 0.6 }}
                className="absolute top-1/2 left-1/2 
                            -translate-x-1/2 -translate-y-1/2 
                            w-[600px] h-[300px] 
                            bg-cyan-400/20 blur-2xl pointer-events-none"
            /> */}
        </div>

        <div className="text-center relative z-20">
            <h3 className="uppercase font-avant text-white/60 text-center text-base tracking-wider font-normal mt-3">The Vault</h3>
            <div className='flex items-center gap-2 mt-4'>
                {/* Left Arrow */}
                <div className="flex items-center cursor-pointer" onClick={prev}>
                    <div className="w-0 h-0 
                                    border-t-[8px] border-b-[8px] 
                                    border-r-[12px] 
                                    border-t-transparent border-b-transparent 
                                    border-r-cyan-400 
                                    drop-shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="w-16 h-[2px] bg-gradient-to-r from-cyan-400 to-transparent blur-[0.3px] shadow-[0_0_10px_#22d3ee]"></div>
                </div>
                <h3 className='uppercase text-[#f9f9f8] text-center text-lg tracking-widest font-avant'>swipe</h3>
                {/* Right Arrow */}
                <div className="flex items-center cursor-pointer" onClick={next}>
                    <div className="w-16 h-[2px] bg-gradient-to-l from-cyan-400 to-transparent blur-[0.3px] shadow-[0_0_10px_#22d3ee]"></div>
                    <div className="w-0 h-0 
                                    border-t-[8px] border-b-[8px] 
                                    border-l-[12px] 
                                    border-t-transparent border-b-transparent 
                                    border-l-cyan-400 
                                    drop-shadow-[0_0_10px_#22d3ee]"></div>
                </div>
            </div>
        </div>

        <div className="w-full mx-auto flex flex-col items-center gap-6 relative z-20">
            {/* <div className="relative w-[70px] h-[70px] border-[2px] border-[#f9f9f8] rounded-full flex items-center justify-center text-[#f9f9f8] 
                before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2
                before:w-[60px] before:h-[1.5px]
                before:bg-[linear-gradient(to_left,rgba(217,250,253,1)_0%,transparent_100%)]
                before:blur-[0.5px] before:mr-[2px]

                after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
                after:w-[60px] after:h-[1.5px]
                after:bg-[linear-gradient(to_right,rgba(217,250,253,1)_0%,transparent_100%)]
                after:blur-[0.5px] after:ml-[2px]
            ">
                <FontAwesomeIcon className='w-8' icon={faArrowsLeftRight} />
            </div> */}
            {/* <h3 className='uppercase text-[#f9f9f8] text-center text-lg tracking-widest font-avant'>swipe</h3> */}
            {/* <h3 className='text-center text-white uppercase font-medium tracking-widest'>Lamborghini Huracan</h3>
                <div className='p-[2px] rounded-t-xl rounded-b-sm border-[2px] bg-[rgba(40,120,255,0.10)] border-[rgba(80,180,255,0.35)] inset-0 shadow-[0_0_3px_0.5px_rgba(80,180,255,0.3),0_0_6px_1px_rgba(40,120,255,0.15)
                    w-[75%] h-[80px]'></div> */}
            {/* <Link href={'#'} className="
                relative font-avant inline-flex uppercase text-[#fefefe] text-xl px-14 py-1.5 outline-none border border-[#7a7a7e]
                
                before:content-[''] before:absolute before:top-0 before:left-0 before:w-full before:h-[1px]
                before:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]
                
                after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px]
                after:bg-[linear-gradient(to_right,transparent_0%,#fcfdfe_50%,transparent_100%)]
                ">
                    <span
                        className="
                        absolute -top-[2px] left-0 w-full h-[2px]
                        bg-gradient-to-r from-transparent via-white to-transparent
                        opacity-70
                        "
                    />

                    <span
                        className="
                        absolute -bottom-[2px] left-0 w-full h-[2px]
                        bg-gradient-to-r from-transparent via-white to-transparent
                        opacity-70
                        "
                    />
                    book now
            </Link> */}
        </div>
    </div> 
  )
}
