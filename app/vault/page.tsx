
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/images/logo/SUBER-AVANT-FONT-WHITE-COLOUR.svg'
import VaultControl from '@/components/vault/VaultControl';

export default function Unlock() {
  return (
    <div className="h-full md:min-h-screen w-full">

        <header className={`flex justify-center pt-[70px] relative z-[99999]`}>
            <div className="w-1/3"></div>
            <Link className="w-1/3 inline-block outline-none fade-in fade-delay-1" href={'/'}>
                <Image className="w-full h-auto" src={logo} alt="Suber Logo"/>
            </Link>
            <div className="w-1/3 pr-7 flex items-center justify-end gap-2"></div>
        </header>
        <VaultControl/>
    </div>
  );
}