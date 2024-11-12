"use client";
import React from "react";
import BannerLayout from "../layouts/BannerLayout";
import dynamic from "next/dynamic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false }); // Dynamically import without SSR

const Banner = () => {
  return (
    <div>
      <BannerLayout>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-6 w-full h-full bg-gradient-to-t from-MidNightBlack">
          <div className="bg-LightGray/10 w-[90%] max-w-4xl px-6 py-6 rounded-xl overflow-hidden flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello, Check This Out!</div>
              <div className="py-4 font-cascadia-normal text-Snow text-xs lg:text-base h-20 lg:h-auto flex items-center">
                <span>
                  {"<"}
                  <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                  {">"}
                  <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                    I am a{" "}
                    <span className="inline-block">
                      <Typewriter
                        options={{
                          strings: ["MERN Stack Developer", "Next.js Developer"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </span>
                  {"</"}
                  <span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                  {">"}
                </span>
              </div>
              <button className="bg-Green text-Snow px-4 py-2 mt-4 rounded-lg font-bold">Explore</button>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <img src="/images/avatar.png" alt="Avatar" className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48" />
            </div>
          </div>
          <div className="flex justify-around w-full text-Green mt-6 text-sm md:text-base font-semibold">
            <div>10+ Completed Projects</div>
            <div>8+ Freelance Clients</div>
            <div>5+ Honors & Awards</div>
            <div>10+ Open-source Projects</div>
          </div>
        </div>
      </BannerLayout>
    </div>
  );
};

export default Banner;
