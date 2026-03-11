import Image from "next/image";
import Link from "next/link";

import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'

export default function Header() {
  return (
    <header className="flex justify-center pt-[70px] relative z-[99999]">
      <Link className="w-[36%] inline-block outline-none fade-in fade-delay-1" href={'/'}>
        <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
      </Link>
    </header>
  )
}
 