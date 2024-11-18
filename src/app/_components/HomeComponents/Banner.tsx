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
        <div className="absolute inset-0 z-20 flex items-center justify-center py-6 w-full h-full bg-gradient-to-t from-MidNightBlack">
          {/* Two-Column Layout */}
          <div className="bg-LightGray/10 w-[90%] max-w-4xl px-6 py-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 gap-4 items-center">
            {/* Left Column: Text Section */}
            <div className="space-y-4 text-left">
              {/* Title */}
              <div className="text-xl sm:text-2xl xl:text-3xl text-Snow font-bold">
                Hello World! Azman Here
              </div>
              {/* Typewriter Effect */}
              <div className="font-cascadia-normal text-Snow text-sm sm:text-base xl:text-lg">
                <span>
                  {"<"}
                  <span className="text-Green font-bold">div</span>
                  {">"}
                  <span className="text-Snow font-bold">
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
                  <span className="text-Green font-bold">div</span>
                  {">"}
                </span>
              </div>
              {/* Button */}
              <button className="bg-Green text-Snow px-6 py-2 rounded-lg font-bold">
                Explore
              </button>
            </div>

            {/* Right Column: Image Section */}
            <div className="flex items-center justify-center">
              <Image
                className="w-24 h-24 sm:w-32 sm:h-32 lg:w-40 lg:h-40 rounded-full object-cover"
                src={azman}
                alt="profile picture"
              />
            </div>
          </div>
        </div>
      </BannerLayout>
    </div>
  );
};

export default Banner;
