'use client';
import { useEffect, useState } from "react";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";
import partners1 from "@/public/image/partners1.png";
import partners2 from "@/public/image/partners2.png";
import partners3 from "@/public/image/partners3.png";
import partners4 from "@/public/image/partners4.png";
import partners5 from "@/public/image/partners5.png";
import partners6 from "@/public/image/partners6.png";


const partnerLogos = [
  partners1,
  partners2,
  partners3,
  partners4,
  partners5,
  partners6,
];

export default function PartnerSection() {
//   const isSmallScreen = useMediaQuery("(max-width: 500px)");
const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreen = () => setIsSmallScreen(window.innerWidth <= 500);
    checkScreen();
    window.addEventListener("resize", checkScreen);
    return () => window.removeEventListener("resize", checkScreen);
  }, []);
  return (
    <section className="bg-accent-100">
      <div className="flex flex-col py-24 sm:px-8 lg:px-24 max-w-screen-2xl mx-auto">
        <h4 className="font-[600] text-[1.5rem] leading-normal text-center lg:text-start">
         Our partners
        </h4>

        <div className="w-full mt-12">
          <Marquee
            speed={50}
            gradient={true}
            gradientColor="hsl(var(--accent-100))"
            gradientWidth={isSmallScreen ? 50 : 100}
            pauseOnHover
          >
            {partnerLogos.map((logo, index) => (
              <div key={index} className="mx-8">
                <Image
                  className="h-7 sm:h-9 w-auto"
                  src={logo}
                  alt={`Partner ${index + 1}`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}