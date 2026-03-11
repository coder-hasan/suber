'use client'

import LoginEffect from "@/components/Login/LoginEffect";

// import backCar from '@/public/images/cars/Lambo-static.png'
// import ukFlag from '@/public/images/ui/icon/united-kingdom-flag-icon.jpg'
export default function Login() {
    
  return (
    <div className="h-[calc(100dvh-207px)] md:h-[calc(100vh-207px)] relative w-full flex flex-col justify-end items-center">
        <LoginEffect/>      
    </div>
  );
}