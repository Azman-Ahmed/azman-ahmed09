"use client";
import React from "react";
import BannerLayout from "../layouts/BannerLayout";
import dynamic from "next/dynamic";
import azman from "../../../../public/me.jpg";
import Image from "next/image";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Banner = () => {
  return (
    <div>
      <BannerLayout>
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center py-6 w-full h-[full] bg-gradient-to-t from-MidNightBlack">
          <div className="bg-LightGray/10 w-[90%] max-w-4xl px-6 py-6 rounded-xl overflow-hidden flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">
            <div className="text-center md:text-left">
              <div className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">
                Hello World! Azman Here
              </div>
              <div className="py-4 font-cascadia-normal text-Snow text-xs lg:text-base h-20 lg:h-auto flex items-center">
                <span>
                  {"<"}
                  <span className="text-Green sm:text-base xl:text-lg font-bold">
                    div
                  </span>
                  {">"}
                  <span className="text-Snow sm:text-xl xl:text-2xl font-bold">
                    I am a{" "}
                    <span className="inline-block">
                      <Typewriter
                        options={{
                          strings: ["Laravel Developer", "Next.js Developer"],
                          autoStart: true,
                          loop: true,
                        }}
                      />
                    </span>
                  </span>
                  {"</"}
                  <span className="text-Green sm:text-base xl:text-lg font-bold">
                    div
                  </span>
                  {">"}
                </span>
              </div>
              <button className="bg-Green text-Snow px-6 py-2 mt-0 rounded-lg font-bold">
                Explore
              </button>
            </div>
            <div className="flex items-center justify-center md:justify-start">
              <Image
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 rounded-full" // Added rounded-full to make the image frame round
                src={azman}
                alt="profile picture"
              />
            </div>
          </div>
          {/* <div className="flex justify-around w-full text-green-400 mt-3 text-sm md:text-base font-semibold">
            <div>10+ Completed Projects</div>
            <div>8+ Freelance Clients</div>
            <div>5+ Honors & Awards</div>
            <div>10+ Open-source Projects</div>
          </div> */}
        </div>
      </BannerLayout>
    </div>
  );
};

export default Banner;
