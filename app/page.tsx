// import Image from "next/image";
// import blackCar from '@/public/images/cars/lamborghini-huracan.png'
// import blackCar from '@/public/images/cars/SUBER.png'
// import Link from "next/link";
import CarHeadlight from "./components/HeroPage/CarHeadlight";
export default function Home() {
  return (
    <div className="flex flex-col items-center">  
      <CarHeadlight/>
    </div>
  );
}
