import Image from "next/image";
// import backCar from '@/public/images/cars/remove.png'
import backCar from '@/public/images/cars/Lambo-static.png'
import ukFlag from '@/public/images/ui/icon/united-kingdom-flag-icon.jpg'
import Link from "next/link";
export default function Login() {
  return (
    <div className="h-full flex flex-col items-center">

      {/* <h1 className="uppercase text-white text-center text-4xl font-clonoid tracking-[20px]">SUBER</h1> */}

      {/* <div className="w-full py-20 md:py-15">
        <Image src={blackCar} alt="suber" className="w-full h-auto"/>
      </div> */}
        <div className="w-[80%] mx-auto pt-15 pb-15 md:py-10">
            <Image src={backCar} alt="suber" className="w-full h-auto"/>
        </div>

        <form className="w-[75%] mx-auto">
          
            <div className="flex gap-4 items-center bg-transparent border border-[#444c4e] rounded-md px-5 py-2 mb-[12px]">
                <div className="w-[40px]"><Image className="w-full h-auto" src={ukFlag} alt="Flag"/></div>
                <span className="text-[#cdd8d0]">+44</span>
                <input type="tel" placeholder="Phone number" className="bg-transparent border-none outline-none w-full text-base text-[#cdd8d0] placeholder-[#909b97]" />
            </div>

            <div className="flex items-center justify-between bg-transparent border border-[#444c4e] rounded-md px-5 py-2 mb-[12px]">
                <input type="password" placeholder="ENTER OTP" className="bg-transparent border-none outline-none text-[#cdd8d0] placeholder-[#909b97] text-base" />
                <div className="flex space-x-1">
                    <span className="w-2 h-2 bg-[#909b97] rounded-full"></span>
                    <span className="w-2 h-2 bg-[#909b97] rounded-full"></span>
                    <span className="w-2 h-2 bg-[#909b97] rounded-full"></span>
                    <span className="w-2 h-2 bg-[#909b97] rounded-full"></span>
                    <span className="w-2 h-2 bg-[#909b97] rounded-full"></span>
                </div>
            </div>

            <Link href={'/vault'} className="inline-block text-center w-full py-2 border border-[#444c4e] rounded-md uppercase tracking-widest text-base text-[#bdccc5] hover:bg-[#bdccc5] hover:text-black transition duration-200 mb-[12px]">
                Login
            </Link>

            <Link href={'#'} className="inline-block text-center w-full py-2 border border-[#444c4e] rounded-md uppercase tracking-widest text-base text-[#bdccc5] hover:bg-[#bdccc5] hover:text-black transition duration-200">
                create account
            </Link>

        </form>
      
    </div>
  );
}