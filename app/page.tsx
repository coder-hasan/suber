import HeroCar from "../components/HeroPage/HeroCar";
export default function Home() {
  return (
    <div className="h-[calc(100dvh-207px)] md:h-[calc(100vh-287px)] relative flex flex-col justify-end items-center">
      <HeroCar/>
    </div>
  );
}
