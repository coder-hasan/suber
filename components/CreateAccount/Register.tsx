'use client'

import Image from "next/image";
import { useState } from "react";
import rollsRoyce from '@/public/images/cars/ROLLS-ROYCE-STATIC.png'
import rollsRoyceSide from '@/public/images/cars/Rolls-Royce-Side.png'
import plainBG from '@/public/images/cars/SUPER-MASTER-BACKGROUND.png'
import UKFlagIcon from '@/public/images/ui/icon/united-kingdom-flag-icon.jpg'
import CustomButton from "../Buttons/CustomButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
// import { useRouter } from "next/navigation";

export default function Register() {
    // const router = useRouter();

    const [createClicked, setCreateClicked] = useState(false);
    const [phone, setPhone] = useState("");
    const [basicData, setBasicData] = useState(false)
    const [verifydOTP, setVerifyOTP] = useState(false)

    const handleEnter = () => {
        // setLightsOn(true);
        // setTimeout(() => {
            // router.push("/login");
            setCreateClicked(true)
        // }, 450);
    };

    const addNumber = (num: string) => {
        setPhone((prev) => prev + num);
    };

    const deleteNumber = () => {
        setPhone((prev) => prev.slice(0, -1));
    };

    const handleUnlock = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();   // stop page reload
        setBasicData(true);
    };

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
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image src={basicData ? plainBG : createClicked ? rollsRoyceSide : rollsRoyce} alt="suber" className="absolute -top-[20px] md:-top-[80px]"/>
        </div>

        {!createClicked && <CustomButton clickHandlar={handleEnter} btnText={'create account'}/>}

        {createClicked && !basicData && <form onSubmit={handleUnlock} className="w-[80%] mx-auto relative z-20">
          
            <h2 className="relative mb-3 uppercase text-[#bafcfd] text-center bg-[#ccc]/10 backdrop-blur-[1px] py-2 font-semibold tracking-wider">
                <span className="relative
                    before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2
                    before:w-[60px] before:h-[1px]
                    before:bg-[linear-gradient(to_left,#bafcfd_0%,transparent_100%)]
                    before:blur-[0.5px] before:mr-[10px]

                    after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
                    after:w-[60px] after:h-[1px]
                    after:bg-[linear-gradient(to_right,#bafcfd_0%,transparent_100%)]
                    after:blur-[0.5px] after:ml-[10px]
                ">account setup</span>
            </h2>

            <div className="flex gap-2 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                <Image src={UKFlagIcon} className="w-[25px] h-auto" alt="UK Flag"/>
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

            <motion.button type="submit" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer mt-[12px] bg-black capitalize border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
            after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
            after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
            ">Create Account</motion.button>

        </form>}

        {basicData && !verifydOTP && <form className="w-[80%] mx-auto relative z-20 pb-[250px]">

            <h2 className="relative mb-5 uppercase text-[#bafcfd] text-xl text-center bg-[#ccc]/10 backdrop-blur-[1px] py-2 font-semibold tracking-wider">
                <span className="relative
                    before:content-[''] before:absolute before:right-full before:top-1/2 before:-translate-y-1/2
                    before:w-[60px] before:h-[1px]
                    before:bg-[linear-gradient(to_left,#bafcfd_0%,transparent_100%)]
                    before:blur-[0.5px] before:mr-[10px]

                    after:content-[''] after:absolute after:left-full after:top-1/2 after:-translate-y-1/2
                    after:w-[60px] after:h-[1px]
                    after:bg-[linear-gradient(to_right,#bafcfd_0%,transparent_100%)]
                    after:blur-[0.5px] after:ml-[10px]
                ">Basic Details</span>
            </h2>

            <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                <input type="text" placeholder="Enter First Name" className="bg-transparent border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
            </div>

            <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                <input type="text" placeholder="Enter Last Name" className="bg-transparent border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
            </div>

            <motion.button type="button" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer font-semibold text-lg mt-[12px] bg-gradient-to-r from-[#ff7a18] via-[#ff3cac] to-[#8e2de2] text-white py-2 rounded-md w-full">Submit</motion.button>

        </form>}

        {/* {verifydOTP && <form onSubmit={handleVerifyOTP} className="w-[80%] mx-auto relative z-20 pb-[200px]">
          
            <div className="flex gap-4 items-center border border-[#bafcfd] bg-black/10 backdrop-blur-[1px] rounded-md px-5 py-2 mb-[12px]">
                <input type="tel" readOnly placeholder="Enter OTP" className="bg-transparent text-center border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
            </div>

            <motion.button type="submit" transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative cursor-pointer mt-[12px] border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
            after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
            after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
            ">Verify OTP</motion.button>

        </form>} */}
    </>
  )
}
