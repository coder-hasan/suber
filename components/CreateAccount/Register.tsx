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
// import { useRouter } from "next/navigation";

const steps = ["Start", "Phone", "otp", "location", "notification", "basicInfo", "payment", "cardInfo"];

export default function Register() {
    // const router = useRouter();

    const [step, setStep] = useState(0);
    const [phone, setPhone] = useState("");

    const length = 4;
    const [otp, setOtp] = useState(Array(length).fill(""));
    const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
    });

    const next = () => setStep((prev) => prev + 1);
    const back = () => setStep((prev) => prev - 1);

    const addNumber = (num: string) => {
        if (phone.length < 12) setPhone((p) => p + num);
    };

    const deleteNumber = () => {
        setPhone((p) => p.slice(0, -1));
    };

    const isPhoneValid = phone.length >= 8;
    const isFormValid = form.firstName && form.lastName;

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
        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image src={step > 0 ? rollsRoyceTop : rollsRoyce} alt="suber" className={`absolute w-full h-full object-cover ${step > 0  ? 'top-0' : '-top-[90px] md:-top-[80px]'}`}/>
        </div>

        {/* <div className="relative z-20 flex justify-center gap-2 mt-6">
            {steps.map((_, i) => (
            <div
                key={i}
                className={`h-[4px] w-[50px] rounded-full ${
                i <= step ? "bg-[#bafcfd]" : "bg-gray-500/30"
                }`}
            />
            ))}
        </div> */}

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
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                    <h2 className="relative mb-3 uppercase text-[#bafcfd] border-b-[0.1px] border-[#bafcfd] text-center py-2 font-semibold tracking-wider">
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

                    <div className="flex gap-2 items-center border border-[#bafcfd] rounded-md px-5 py-2 mb-[12px]">
                        <Image src={UKFlagIcon} className="w-[25px] h-auto" alt="UK Flag" />
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
                            className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 rounded-md"
                        >
                            {n}
                        </motion.button>
                        ))}
                        <motion.button
                            onClick={deleteNumber}
                            className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 rounded-md"
                        >
                        <FontAwesomeIcon icon={faDeleteLeft} />
                        </motion.button>
                    </div>

                    <motion.button type="submit" onClick={next} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative uppercase cursor-pointer mt-[12px] bg-[#bafcfd]/20 capitalize border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
                        after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
                        after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
                        ">OTP Access</motion.button>

                    {/* <div className="flex justify-between mt-4">
                        <button onClick={back}>Back</button>
                        <button
                            onClick={next}
                            disabled={!isPhoneValid}
                            className="text-[#bafcfd] disabled:opacity-30"
                        >
                        Next
                        </button>
                    </div> */}
                    </motion.div>
                )}

                {step === 2 && (
                    <motion.div
                        key="otp"
                        {...variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <h2 className="relative mb-3 uppercase text-[#bafcfd] border-b-[0.1px] border-[#bafcfd] text-center py-2 font-semibold tracking-wider">
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

                        <div className="flex gap-2 items-center border border-[#bafcfd] rounded-md px-5 py-2 mb-[12px]">
                            <Image src={UKFlagIcon} className="w-[25px] h-auto" alt="UK Flag" />
                            <span className="text-[#bafcfd]">+44</span>
                            <input
                                value={phone}
                                readOnly
                                placeholder={phone}
                                className="bg-transparent outline-none text-white w-full"
                            />
                        </div>

                        <div className="text-left text-white/85 py-2 mb-[12px]">
                            <h3 className="text-2xl font-normal">Phone Verification</h3>
                            <p className="text-sm">Please enter code sent to {phone}</p>
                            <div className="flex justify-center gap-6">
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
                                        className="w-10 text-center text-2xl text-white bg-transparent border-b border-white outline-none focus:border-[#bafcfd]"
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-2 grid-cols-5">
                            {[..."123456789"].map((n) => (
                            <motion.button transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }}
                                key={n}
                                onClick={() => addOtpNumber(n)}
                                className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] rounded-md"
                            >
                                {n}
                            </motion.button>
                            ))}
                            <motion.button
                                onClick={deleteOtpNumber}
                                className="cursor-pointer border border-[#bafcfd] py-2.5 text-center text-[#bafcfd] bg-[#bafcfd]/10 rounded-md"
                            >
                                <FontAwesomeIcon icon={faDeleteLeft} />
                            </motion.button>
                        </div>

                        <motion.button type="button" onClick={next} transition={{ type: "spring", stiffness: 400, damping: 17 }} whileTap={{ scale: 0.9 }} className="relative uppercase cursor-pointer mt-[12px] bg-[#bafcfd]/20 capitalize border-1 border-[#bafcfd] text-[#bafcfd] w-full text-center rounded-sm py-2 
                            after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[4px]
                            after:bg-[linear-gradient(to_right,transparent_0%,#bafcfd_50%,transparent_100%)]
                            ">Verify</motion.button>
                    </motion.div>
                )}

                {step === 3 && (
                    <motion.div
                        key="location"
                        {...variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <div className="mx-auto w-[50%]">
                            <Image src={globeIcon} alt="Globe" className="w-full h-auto"/>
                        </div>
                        <h2 className="relative capitalize text-lg text-white/85 text-center text-2xl font-inter py-2 font-medium tracking-wider">
                            Location Access
                        </h2>

                        <p className="text-center text-white/85 font-inter text-base mb-5">To enhance your experience and provide a more meaningful service, we kindly request access to your location.</p>
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
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <div className="mx-auto w-[50%] mb-3">
                            <Image src={logo} alt="Logo" className="w-full h-auto"/>
                        </div>
                        <h2 className="relative capitalize text-white/85 text-center text-2xl font-inter py-2 font-medium tracking-wider">
                            <span className="font-avant">SUBER</span> Would Like to Send you Notification
                        </h2>

                        <p className="text-center text-white/85 font-inter text-lg mb-5">Notifications may include alerts, sounds. and icon badges. This can be configure in Settings</p>
                        <div className="flex">
                            <GlowButton onClick={next} btnClass={"rounded-none rounded-l-lg"}>Allow</GlowButton>
                            <GlowButton variant="secondary" onClick={next} btnClass={"rounded-none rounded-r-lg"}>Don't Allow</GlowButton>
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
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <h2 className="relative capitalize text-white/85 text-center text-2xl font-inter py-2 font-medium tracking-wider">
                            What is your Name?
                        </h2>

                        <p className="text-center text-white/85 font-inter text-base mb-5">This information is displayed when a driver comes to pick you up, so he can identify you.</p>
                        
                        <div className="text-left border bg-[#0e0c1d] border-[#6683eb] rounded-3xl px-5 py-2 mb-[12px]">
                            <label htmlFor="name" className="text-[#a7a5b7]">Name</label>
                            <input
                                name="name"
                                id="name"
                                placeholder=""
                                className="bg-transparent outline-none text-[#f2f0f5] w-full"
                            />
                        </div>

                        <div className="text-left border bg-[#0e0c1d] border-[#6683eb] rounded-3xl px-5 py-2 mb-[12px]">
                            <label htmlFor="Surname" className="text-[#a7a5b7]">Surname</label>
                            <input
                                name="Surname"
                                id="Surname"
                                placeholder=""
                                className="bg-transparent outline-none text-[#f2f0f5] w-full"
                            />
                        </div>

                        <GlowButton onClick={next}>Next</GlowButton>
                    </motion.div>
                )}

                {step === 6 && (
                    <motion.div
                        key="payment"
                        {...variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <h2 className="relative capitalize text-white/85 text-left text-xl font-inter py-2 font-medium tracking-wider">
                            Preferred payment method
                        </h2>

                        <p className="text-left text-white/85 font-inter text-sm mb-5">Select a preferred payment method to complete the transaction securely and conveniently.</p>
                        
                        <div className="cursor-pointer flex justify-between items-center border border-transparent hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-4 py-1.5">
                            <h3 className="text-[#f7f7f9] text-lg">Google Pay</h3>
                            <div className="bg-[#fefefe] rounded-sm w-[60px] aspect-[1.7] flex items-center justify-center">
                                <Image src={googlePayIcon} alt="Google Pay" className="object-contain w-[80%] h-auto"/>
                            </div>
                        </div>

                        <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-transparent hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-4 py-1.5">
                            <h3 className="text-[#f7f7f9] text-lg">Apple Pay</h3>
                            <div className="bg-[#fefefe] rounded-sm w-[60px] aspect-[1.7] flex items-center justify-center">
                                <Image src={applePayIcon} alt="Google Pay" className="object-contain w-[80%] h-auto"/>
                            </div>
                        </div>

                        <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-transparent hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-4 py-1.5">
                            <h3 className="text-[#f7f7f9] text-lg">Paypal</h3>
                            <div className="bg-[#fefefe] rounded-sm w-[60px] aspect-[1.7] flex items-center justify-center">
                                <Image src={paypalIcon} alt="Google Pay" className="object-contain w-auto h-[80%]"/>
                            </div>
                        </div>

                        <div className="mt-1.5 cursor-pointer flex justify-between items-center border border-transparent hover:border-[#6683eb] bg-[#0e0c1d] rounded-2xl px-4 py-1.5">
                            <h3 className="text-[#f7f7f9] text-lg">Debit or Credit Card</h3>
                            <div className="bg-[#fefefe] rounded-sm w-[60px] aspect-[1.7] flex items-center justify-center">
                                <Image src={mastercardIcon} alt="Google Pay" className="object-contain w-auto h-[90%]"/>
                            </div>
                        </div>

                        <GlowButton onClick={next} btnClass="mt-3">Skip for now</GlowButton>
                    </motion.div>
                )}

                {step === 7 && (
                    <motion.div
                        key="cardInfo"
                        {...variants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="mb-[15%] w-[85%] mx-auto bg-[#111]/10 backdrop-blur-[5px] border border-[#bafcfd] rounded-md p-[25px] relative z-20"
                    >
                        <h2 className="relative capitalize text-white/85 text-left text-xl font-inter py-2 font-medium tracking-wider">
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
                                <FontAwesomeIcon className="text-[#f2f0f5] w-2" icon={faCircleQuestion} />
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

                        <GlowButton>verify</GlowButton>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>

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
