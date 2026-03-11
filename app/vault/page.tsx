import yelloCar from '@/public/images/cars/Lamborghini-Aventador-SVJ.png'
import { faArrowsLeftRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Link from 'next/link';
export default function Unlock() {
  return (
    <div className="h-[calc(100dvh-207px)] md:h-screen relative w-full flex flex-col justify-between items-center">

        <div className="text-center relative z-20">
            {/* <h1 className="uppercase text-white text-center text-4xl font-clonoid tracking-[20px]">SUBER</h1> */}
            <h3 className="uppercase font-avant text-white text-center text-base tracking-wider font-normal mt-3">The Vault</h3>
        </div>

        <div className="absolute top-0 left-0 w-full h-full z-0">
            <Image src={yelloCar} alt="suber" className="absolute -top-[20px] md:-top-[80px]"/>
            {/* <Image src={backCar} alt="suber" className="absolute -top-[120px]"/> */}
        </div>

        <div className="w-[75%] mx-auto flex flex-col items-center gap-6 relative z-20">
            <div className="relative w-[70px] h-[70px] border-[2px] border-[#f9f9f8] rounded-full flex items-center justify-center text-[#f9f9f8] 
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
            </div>
            <h3 className='uppercase text-[#f9f9f8] text-center text-xl tracking-widest font-inter'>swipe</h3>
            <Link href={'#'} className="
                relative font-inter inline-flex uppercase text-[#fefefe] text-2xl px-14 py-1.5 outline-none border border-[#7a7a7e]
                
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
            </Link>
        </div>
      
    </div>
  );
}