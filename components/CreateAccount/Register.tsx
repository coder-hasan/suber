'use client'

import Image from "next/image";
import { useRef, useState } from "react";
import rollsRoyce from '@/public/images/cars/ROLLS-ROYCE-STATIC.png'
import rollsRoyceTop from '@/public/images/cars/Rolls-Royce.png'
import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'
import UKFlagIcon from '@/public/images/ui/icon/united-kingdom-flag-icon.jpg'
import globeIcon from '@/public/images/ui/icon/Globe-Location-Icon.png'
import googlePayIcon from '@/public/images/ui/icon/google-pay-logo.png'
import applePayIcon from '@/public/images/ui/icon/Apple_Pay-Logo.png'
import paypalIcon from '@/public/images/ui/icon/paypal-icon.png'
import mastercardIcon from '@/public/images/ui/icon/Mastercard_icon.webp'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faDeleteLeft } from "@fortawesome/free-solid-svg-icons";
import { AnimatePresence, motion } from "framer-motion";
import GlowButton from "../Buttons/GlowButton";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import LeftButton from "../Buttons/LeftButton";

// const steps = ["Start", "Phone", "otp", "location", "notification", "basicInfo", "payment", "cardInfo"];

export default function Register() {
    const [step, setStep] = useState(0);
    const [phone, setPhone] = useState("");

    const length = 4;
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    // const [form, setForm] = useState({
    //     firstName: "",
    //     lastName: "",
    // });

    const next = () => setStep((prev) => prev + 1);
    const back = () => setStep((prev) => prev - 1);

    const addNumber = (num: string) => {
        if (phone.length < 12) setPhone((p) => p + num);
    };

    const deleteNumber = () => {
        setPhone((p) => p.slice(0, -1));
    };

    // const isPhoneValid = phone.length >= 8;
    // const isFormValid = form.firstName && form.lastName;

    const variants = {
        initial: { opacity: 0, x: 50 },
        animate: { opacity: 1, x: 0 },
        exit: { opacity: 0, x: -50 },
    };

    const addOtpNumber = (num: string) => {
        const currentIndex = otp.findIndex((d) => d === "");

        if (currentIndex === -1) return;

        const newOtp = [...otp];
        newOtp[currentIndex] = num;
        setOtp(newOtp);

        inputsRef.current[currentIndex + 1]?.focus();
    };

    const deleteOtpNumber = () => {
        const lastIndex = otp.findLastIndex((d) => d !== "");

        if (lastIndex === -1) return;

        const newOtp = [...otp];
        newOtp[lastIndex] = "";
        setOtp(newOtp);

        inputsRef.current[lastIndex]?.focus();
    };

    // const handleOTPChange = (value: string, index: number) => {
    //     if (!/^\d*$/.test(value)) return; // only numbers

    //     const newOtp = [...otp];
    //     newOtp[index] = value.slice(-1);
    //     setOtp(newOtp);

    //     // move forward
    //     if (value && index < length - 1) {
    //     inputsRef.current[index + 1]?.focus();
    //     }
    // };

    // const handleOTPKeyDown = (
    //     e: React.KeyboardEvent<HTMLInputElement>,
    //     index: number
    // ) => {
    //     if (e.key === "Backspace") {
    //         if (otp[index]) {
    //             const newOtp = [...otp];
    //             newOtp[index] = "";
    //             setOtp(newOtp);
    //         } else if (index > 0) {
    //             inputsRef.current[index - 1]?.focus();
    //         }
    //     }
    // };
  return (
    <>
        <header className={`flex justify-center pt-[70px] relative z-[99999] ${step > 3 ? 'opacity-0' : ''}`}>
            <div className="w-1/3"></div>
            <Link className="w-1/3 inline-block outline-none fade-in fade-delay-1" href={'/'}>
                <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
            </Link>
            <div className="w-1/3 pr-7 flex items-center justify-end gap-2 bg-black">
                {step >= 1 && <><LeftButton onClick={back}/>
                <button onClick={next} className="group cursor-pointer">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        className="w-7 h-7 text-cyan-400 transition-all duration-300 
                                group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.9)] 
                                group-hover:translate-x-1"
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor" 
                        strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                </button></>}
            </div>
        </header>

        <div className={`relative w-full h-[calc(100dvh-110px)] md:min-h-screen flex flex-col pb-[70px] justify-end items-center`}>
            <div className="absolute top-0 left-0 w-full h-full z-0">
                <Image src={step > 0 ? rollsRoyceTop : rollsRoyce} alt="suber" className={`absolute w-full h-full object-contain ${step > 0  ? '-top-[10px]' : '-top-[90px] md:-top-[80px]'}`}/>
            </div>

            <div className="w-full text-center">
                <AnimatePresence mode="wait">
                    {step === 0 && (
                        <motion.button
                            key="start"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            onClick={next}
                            className="enter-pulse uppercase cursor-pointer font-avant text-white tracking-wider text-base font-semibold outline-none"
                        >
                            Create Account
                        </motion.button>
                    )}

                    {step === 1 && (
                        <motion.div
                            key="phone"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[18%] w-[87%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[25px] py-[15px] relative z-20"
                        >
                            <h2 className="relative mb-4 uppercase text-[#bafcfd] border-b-[0.1px] border-[#bafcfd]/50 text-center pb-[15px] font-semibold tracking-wider">
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

                            <div className="flex gap-2 items-center border-[0.5px] border-[#bafcfd]/60 rounded-md px-3 py-1.5 mb-4">
                                <Image src={UKFlagIcon} className="w-[25px] h-auto rounded-sm" alt="UK Flag" />
                                <span className="text-[#bafcfd]">+44</span>
                                <input
                                    value={phone}
                                    readOnly
                                    placeholder="Enter Phone Number"
                                    className="bg-transparent outline-none text-white w-full"
                                />
                            </div>

                            {/* Keypad */}
                            <div className="grid gap-2 grid-cols-4">
                                {[..."123456789.0"].map((n) => (
                                <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}
                                    key={n}
                                    onClick={() => addNumber(n)}
                                    className="cursor-pointer border-[0.5px] border-[#bafcfd] py-1.5 text-center text-[#bafcfd] bg-[#bafcfd]/5 rounded-md"
                                >
                                    {n}
                                </motion.button>
                                ))}
                                <motion.button
                                    transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}
                                    onClick={deleteNumber}
                                    className="cursor-pointer border-[0.5px] border-[#bafcfd] py-1.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 rounded-md"
                                >
                                    <FontAwesomeIcon icon={faDeleteLeft} />
                                </motion.button>
                            </div>

                            <motion.button type="submit" onClick={next} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative uppercase cursor-pointer mt-[12px] bg-[radial-gradient(ellipse_at_center,rgba(103,232,249,0.3)_0%,rgba(0,0,0,0.3)_100%)] capitalize border-[1px] border-[#67e8f9]/60 text-[#bafcfd] tracking-wider font-light w-full text-center rounded-sm py-1.5 shadow-[0_0_10px_rgba(103,232,249,0.2),inset_0_0_20px_rgba(103,232,249,0.05)]
                                after:content-[''] after:absolute after:bottom-[-1px] after:left-[10%] after:w-[80%] after:h-[2px]
                                after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]

                                before:content-[''] before:absolute before:top-[-1px] before:left-[20%] before:w-[60%] before:h-[1px]
                                before:bg-[linear-gradient(to_right,transparent_0%,rgba(186,252,253,0.4)_50%,transparent_100%)]
                                ">OTP Access</motion.button>

                            <div className="flex gap-[4px] items-center justify-center mt-3">
                                <div className="w-[25px] h-[1.5px] rounded-full bg-[linear-gradient(to_left,rgba(186,252,253,0.1)_0%,transparent_80%)]"></div>
                                <div className="w-[4px] h-[4px] rounded-full bg-[#bafcfd]/30"></div>
                                <div className="w-[20px] h-[2px] rounded-full bg-[linear-gradient(to_left,rgba(186,252,253,0.4)_50%,transparent_150%)]"></div>
                                <div className="w-[5px] h-[5px] rounded-full bg-[#bafcfd]/50"></div>
                                <div className="w-[20px] h-[2px] rounded-full bg-[linear-gradient(to_right,rgba(186,252,253,0.4)_50%,transparent_150%)]"></div>
                                <div className="w-[4px] h-[4px] rounded-full bg-[#bafcfd]/30"></div>
                                <div className="w-[25px] h-[1.5px] rounded-full bg-[linear-gradient(to_right,rgba(186,252,253,0.1)_0%,transparent_80%)]"></div>
                            </div>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div
                            key="otp"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[15%] w-[87%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[25px] py-[15px] relative z-20"
                        >
                            <h2 className="relative mb-4 uppercase text-[#bafcfd] border-b-[0.1px] border-[#bafcfd]/50 text-center pb-[15px] font-semibold tracking-wider">
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

                            <div className="flex gap-2 items-center border-[0.5px] border-[#bafcfd]/60 rounded-md px-3 py-1.5 mb-4">
                                <Image src={UKFlagIcon} className="w-[25px] h-auto rounded-sm" alt="UK Flag" />
                                <span className="text-[#bafcfd]">+44</span>
                                <input
                                    value={phone}
                                    readOnly
                                    placeholder="Enter Phone Number"
                                    className="bg-transparent outline-none text-white w-full"
                                />
                            </div>

                            <div className="text-left text-white/85 py-2 mb-[12px]">
                                <h3 className="text-xl font-normal">Phone Verification</h3>
                                <p className="text-xs">Please enter code sent to {phone}</p>
                                <div className="flex justify-center gap-6 mt-2">
                                    {otp.map((digit, index) => (
                                        <input
                                            key={index}
                                            ref={(el) => {
                                                inputsRef.current[index] = el;
                                            }}
                                            type="text"
                                            inputMode="numeric"
                                            maxLength={1}
                                            value={digit}
                                            // onChange={(e) => handleOTPChange(e.target.value, index)}
                                            // onKeyDown={(e) => handleOTPKeyDown(e, index)}
                                            readOnly
                                            className="w-10 font-light text-center text-xl text-white bg-transparent border-b border-white outline-none focus:border-[#bafcfd]"
                                        />
                                    ))}
                                </div>
                            </div>

                            <div className="grid gap-2 grid-cols-5 mb-3">
                                {[..."123456789"].map((n) => (
                                <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}
                                    key={n}
                                    onClick={() => addOtpNumber(n)}
                                    className="cursor-pointer border-[0.5px] border-[#bafcfd] py-1.5 text-center text-sm text-[#bafcfd] rounded-md"
                                >
                                    {n}
                                </motion.button>
                                ))}
                                <motion.button
                                    onClick={deleteOtpNumber}
                                    className="cursor-pointer border-[0.5px] border-[#bafcfd] py-1.5 text-center text-sm text-[#bafcfd] bg-[#bafcfd]/10 rounded-md"
                                >
                                    <FontAwesomeIcon icon={faDeleteLeft} />
                                </motion.button>
                            </div>

                            <GlowButton onClick={next} btnClass="uppercase font-medium">Verify</GlowButton>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div
                            key="location"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[15%] w-[87%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[20px] py-[15px] relative z-20"
                        >
                            <div className="mx-auto w-[40%]">
                                <Image src={globeIcon} alt="Globe" className="w-full h-auto"/>
                            </div>
                            <h2 className="relative capitalize text-lg text-white/85 text-center text-2xl font-inter py-2 font-medium tracking-wider">
                                Location Access
                            </h2>

                            <p className="text-center text-white/85 font-inter text-sm mb-5">To enhance your experience and provide a more meaningful service, we kindly request access to your location.</p>
                            <GlowButton onClick={next}>Enable Location</GlowButton>
                            <GlowButton variant="secondary" onClick={next}>Skip for now</GlowButton>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div
                            key="notification"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[22%] w-[87%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[25px] py-[15px] relative z-20"
                        >
                            <div className="mx-auto w-[30%] mb-3">
                                <Image src={logo} alt="Logo" className="w-full h-auto"/>
                            </div>
                            <h2 className="relative capitalize text-white/85 text-center text-xl font-semibold py-2 font-medium tracking-wider">
                                <span className="font-avant">SUBER</span> Would Like to Send you Notification
                            </h2>

                            <p className="text-center text-white/50 font-thin text-base mb-5">Notifications may include alerts, sounds. and icon badges. This can be configure in Settings</p>
                            <div className="flex mb-2">
                                <GlowButton onClick={next} btnClass={"rounded-none rounded-l-lg !border-r-[0.5px]"}>Allow</GlowButton>
                                <GlowButton variant="secondary" onClick={next} btnClass={"rounded-none rounded-r-lg !border-l-[0.5px]"}>Don&apos;t Allow</GlowButton>
                            </div>
                            <GlowButton variant="secondary" onClick={next}>Skip for now</GlowButton>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div
                            key="basicInfo"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[20%] w-[87%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[25px] py-[15px] relative z-20"
                        >
                            <h2 className="relative capitalize text-white/85 text-center text-xl font-inter py-2 font-medium tracking-wider">
                                What is your Name?
                            </h2>

                            <p className="text-center text-white/60 font-inter text-sm mb-5">This information is displayed when a driver comes to pick you up, so he can identify you.</p>
                            
                            <div className="text-left bg-[#0e0c1d] border border-[#6683eb]/60 rounded-3xl px-5 py-1.5 mb-[10px]">
                                <label htmlFor="name" className="text-[#a7a5b7] text-sm">Name</label>
                                <input
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                />
                            </div>

                            <div className="text-left bg-[#0e0c1d] border border-[#6683eb]/60 rounded-3xl px-5 py-1.5 mb-[12px]">
                                <label htmlFor="Surname" className="text-[#a7a5b7] text-sm">Surname</label>
                                <input
                                    name="Surname"
                                    id="Surname"
                                    placeholder="Surname"
                                    className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                />
                            </div>

                            <GlowButton onClick={next} btnClass="mt-5 text-xl">Next</GlowButton>
                        </motion.div>
                    )}

                    {step === 6 && (
                        <motion.div
                            key="payment"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[15%] w-[87%] mx-auto bg-[#634fb3]/15 backdrop-blur-[5px] border border-[#bafcfd] rounded-md px-[25px] py-[15px] relative z-20"
                        >
                            <h2 className="relative capitalize text-white/85 text-left text-xl tracking-tight font-inter py-2 font-medium tracking-wider">
                                Preferred payment method
                            </h2>

                            <p className="text-left text-white/65 font-inter text-sm tracking-tight mb-5">Select a preferred payment method to complete the transaction securely and conveniently.</p>
                            
                            <div className="flex flex-col gap-1">
                                <div className="cursor-pointer flex justify-between items-center border border-[#6683eb]/60 hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-3 py-2">
                                    <h3 className="text-[#f7f7f9] text-base">Google Pay</h3>
                                    <div className="bg-[#fefefe] rounded-sm w-[50px] aspect-[1.7] flex items-center justify-center">
                                        <Image src={googlePayIcon} alt="Google Pay" className="object-contain w-[80%] h-auto"/>
                                    </div>
                                </div>

                                <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-[#6683eb]/60 hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-3 py-2">
                                    <h3 className="text-[#f7f7f9] text-base">Apple Pay</h3>
                                    <div className="bg-[#fefefe] rounded-sm w-[50px] aspect-[1.7] flex items-center justify-center">
                                        <Image src={applePayIcon} alt="Google Pay" className="object-contain w-[80%] h-auto"/>
                                    </div>
                                </div>

                                <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-[#6683eb]/60 hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-3 py-2">
                                    <h3 className="text-[#f7f7f9] text-base">Paypal</h3>
                                    <div className="bg-[#fefefe] rounded-sm w-[50px] aspect-[1.7] flex items-center justify-center">
                                        <Image src={paypalIcon} alt="Google Pay" className="object-contain w-auto h-[80%]"/>
                                    </div>
                                </div>

                                <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-[#6683eb]/60 hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-3 py-2">
                                    <h3 className="text-[#f7f7f9] text-base">Debit or Credit Card</h3>
                                    <div className="bg-[#fefefe] rounded-sm w-[50px] aspect-[1.7] flex items-center justify-center">
                                        <Image src={mastercardIcon} alt="Google Pay" className="object-contain w-auto h-[90%]"/>
                                    </div>
                                </div>
                            </div>

                            <GlowButton onClick={next} btnClass="mt-4">Skip for now</GlowButton>
                        </motion.div>
                    )}

                    {step === 7 && (
                        <motion.div
                            key="cardInfo"
                            {...variants}
                            initial="initial"
                            animate="animate"
                            exit="exit"
                            className="mb-[15%] w-[87%] mx-auto bg-[#634fb3]/15 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                        >
                            <h2 className="mb-2 relative capitalize text-white/85 text-left text-xl font-inter py-2 font-medium tracking-wider">
                                Payment Details
                            </h2>
                            
                            <div className="flex items-center gap-2 text-left bg-[#0e0c1d] rounded-xl px-2.5 py-2.5 mb-[12px]">
                                <div className="bg-[#fefefe] rounded-sm w-[50px] aspect-[1.7] flex items-center justify-center">
                                    <Image src={mastercardIcon} alt="Master Card Pay" className="object-contain w-auto h-[90%]"/>
                                </div>
                                <input
                                    name="cardNumber"
                                    id="cardNumber"
                                    placeholder="Card Number"
                                    className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                />
                            </div>

                            <div className="flex gap-2">
                                <div className="flex items-center gap-2 text-left bg-[#0e0c1d] rounded-xl px-2.5 py-2.5 mb-[12px]">
                                    <input
                                        name="expDate"
                                        id="expDate"
                                        placeholder="Exp date"
                                        className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                    />
                                </div>
                                <div className="flex items-center gap-1 text-left bg-[#0e0c1d] rounded-xl px-2.5 py-2.5 mb-[12px]">
                                    <input
                                        name="cvv"
                                        id="cvv"
                                        placeholder="CVV"
                                        className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                    />
                                    <FontAwesomeIcon className="text-[#634fb3]/60 w-2" icon={faCircleQuestion} />
                                </div>
                            </div>

                            <div className="flex items-center gap-2 text-left bg-[#0e0c1d] rounded-xl px-2.5 py-2.5 mb-[12px]">
                                <Image src={UKFlagIcon} alt="UK Flag" className="object-contain w-[40px] h-auto rounded-sm"/>
                                <FontAwesomeIcon className="text-[#f2f0f5] w-2" icon={faAngleDown} />
                                <input
                                    name="country"
                                    id="country"
                                    placeholder="Country"
                                    className="bg-transparent outline-none text-[#f2f0f5] w-full"
                                />
                            </div>

                            <GlowButton btnClass="text-xl mt-3">Verify</GlowButton>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    </>
  )
}
