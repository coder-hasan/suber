import Image from "next/image";
import blackCar from '@/public/images/cars/lamborghini-huracan-front.png'
import Link from "next/link";
export default function Home() {
  return (
    <div className="md:w-[480px] h-full md:py-[70px] py-[90px] flex flex-col items-center mx-auto">

      <h1 className="uppercase text-white text-center text-4xl font-clonoid tracking-[20px]">SUBER</h1>
  
      
      <div className="w-full py-20 md:py-15">
        <Image src={blackCar} alt="suber" className="w-full h-auto"/>
      </div>
      <div className="flex items-center justify-center">
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
      </div>
    </div>
  );
}
