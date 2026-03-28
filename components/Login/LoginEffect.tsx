'use client'

import Image from "next/image";
import { useRef, useState } from "react";
// import backCar2 from '@/public/images/cars/Matte-Black-Ferrari.png'
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import CustomButton from "../Buttons/CustomButton";
import loginCar from '@/public/images/cars/ferrari-login.png'
import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'

export default function LoginEffect() {
    const router = useRouter();

    const [clickToNext, setClickToNext] = useState(false);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    // const [phone, setPhone] = useState("");
    // const [sendOTP, setSendOTP] = useState(false)
    // const [verifydOTP, setVerifyOTP] = useState(false)

    const handleEnter = () => {
        setClickToNext(true)
    };

    // const addNumber = (num: string) => {
    //     setPhone((prev) => prev + num);
    // };

    // const deleteNumber = () => {
    //     setPhone((prev) => prev.slice(0, -1));
    // };

    // const handleUnlock = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();   // stop page reload
    //     setSendOTP(true);
    // };

    // const handleSendOTP = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     setVerifyOTP(true)
    // }

    // const handleVerifyOTP = (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault();
    //     router.push("/vault");
    // }
  return (
    <>
        <header className={`flex justify-center pt-[70px] relative z-[99999]`}>
            <div className="w-1/3"></div>
            <Link className="w-1/3 inline-block outline-none fade-in fade-delay-1" href={'/'}>
                <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
            </Link>
            <div className="w-1/3 pr-7 flex items-center justify-end gap-2 bg-black"></div>
        </header>

        <div className="relative w-full h-[calc(100dvh-110px)] md:min-h-screen flex flex-col pb-[70px] justify-end items-center">
            <div className="absolute top-0 left-0 w-full h-full z-0">
                {/* <Image src={backCar} alt="suber" className="absolute -top-[20px] md:-top-[80px]"/> */}
                <AnimatePresence>
                    {!clickToNext && (
                        <motion.div
                            key="image"
                            initial={{ opacity: 1 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute w-full -top-[20px] md:-top-[80px] left-1/2 -translate-x-1/2"
                        >
                            <Image src={loginCar} alt="suber" className={`object-cover w-full`}/>
                        </motion.div>
                    )}
                </AnimatePresence>
                <AnimatePresence>
                    {clickToNext && (
                        <motion.video
                            className="object-cover absolute -top-[20px] md:-top-[80px] left-1/2 -translate-x-1/2" 
                            key="video"
                            ref={videoRef}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1, ease: "easeInOut" }}
                            autoPlay
                            muted
                            playsInline
                            preload="none"
                            onLoadedData={() => {
                                if (videoRef.current) {
                                videoRef.current.playbackRate = 1.75;
                                }
                            }}
                            onEnded={() => router.push("/create-account")}
                        >
                            <source src="/video/ferrari-to-rolls-royce-login-to-create.mp4" type="video/mp4"/>
                        </motion.video>
                    )}
                </AnimatePresence>
            </div>

            <CustomButton clickHandlar={handleEnter} btnText={'Login'}/>

            {/* {loginClicked && !sendOTP && <form onSubmit={handleUnlock} className="w-[80%] mx-auto relative z-20">
            
                <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                    <span className="text-[#bafcfd]">+44</span>
                    <input type="tel" value={phone} readOnly placeholder="Enter Phone number" className="bg-transparent border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#bafcfd]" />
                </div>

                <div className="grid gap-2 grid-cols-3">
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("1")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">1</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("2")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">2</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("3")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">3</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("4")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">4</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("5")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">5</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("6")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">6</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("7")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">7</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("8")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">8</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("9")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">9</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("*")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">*</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={() => addNumber("0")} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md">0</motion.button>
                    <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} onClick={deleteNumber} className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 backdrop-blur-[1px] rounded-md"><FontAwesomeIcon icon={faDeleteLeft} /></motion.button>
                </div>

                <motion.button type="submit" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer mt-[12px] capitalize border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
                after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
                ">unlock</motion.button>

            </form>} */}

            {/* {sendOTP && !verifydOTP && <form onSubmit={handleSendOTP} className="w-[80%] mx-auto relative z-20 pb-[200px]">
            
                <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                    <span className="text-[#bafcfd]">+44</span>
                    <input type="tel" value={phone} readOnly placeholder="Enter Phone number" className="bg-transparent border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
                </div>

                <motion.button type="submit" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer mt-[12px] border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
                after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
                ">Send OTP</motion.button>

            </form>} */}

            {/* {verifydOTP && <form onSubmit={handleVerifyOTP} className="w-[80%] mx-auto relative z-20 pb-[200px]">
            
                <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                    <input type="tel" readOnly placeholder="Enter OTP" className="bg-transparent text-center border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
                </div>

                <motion.button type="submit" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer mt-[12px] border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
                after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
                after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
                ">Verify OTP</motion.button>

            </form>} */}
        </div>
    </>
  )
}
