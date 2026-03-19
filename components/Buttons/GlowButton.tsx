'use client'
import { motion, useAnimation } from "framer-motion";
import { ReactNode } from "react";
type GlowButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  btnClass?: string;
};
export default function GlowButton({children, variant = "primary", onClick, btnClass = ''}:GlowButtonProps) {
    const controls = useAnimation();
    const handleTap = async () => {
        // start sweep
        await controls.start({
            left: ["-100%", "100%"],
            transition: { duration: 0.6, ease: "easeInOut" },
        });

        // reset position instantly
        controls.set({ left: "-100%" });

        onClick?.();
    };
  return (
    <motion.button
      onTap={handleTap}
      whileTap={{ 
        scale: 0.96,
        boxShadow: "0 0 20px rgba(186,252,253,0.6)"
       }}
      className={` ${btnClass}
        relative cursor-pointer w-full mt-1
        rounded-md text-sm tracking-wide
        backdrop-blur-md transition-all duration-300
        

        ${
          variant === "primary"
            ? `text-[#bafcfd] border border-[#bafcfd]/60 bg-[#0a0f14]/40 bg-[linear-gradient(to_right,transparent_0%,rgba(186,252,253,0.3)_50%,transparent_100%)] shadow-[0_0_8px_rgba(186,252,253,0.25)] hover:shadow-[0_0_12px_rgba(186,252,253,0.45)]
            after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-full after:h-[2px]
                            after:bg-gradient-to-r after:from-transparent after:via-[#bafcfd] after:to-transparent

                            before:content-[''] before:absolute before:-top-[2px] before:left-0 before:w-full before:h-[2px]
                            before:bg-gradient-to-r before:from-transparent before:via-[#bafcfd] before:to-transparent`
            : "text-[#bafcfd]/70 border border-[#bafcfd]/30 bg-[#0a0f14]/30 hover:border-[#bafcfd]/60"
        }
      `}
    >
      <div className="w-full h-full overflow-hidden relative py-2">
            
        <motion.span
          className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-[#bafcfd]/40 to-transparent"
          // animate={{ left: ["-100%", "100%"] }}
          // transition={{
          //   repeat: Infinity,
          //   duration: 2,
          //   ease: "linear",
          // }}
          animate={controls}
        />

        <span className="relative z-10">{children}</span>
      </div>
    </motion.button>
  )
}
