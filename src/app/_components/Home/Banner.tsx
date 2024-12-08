"use client";
import React from "react";
import BannerLayout from "../layouts/BannerLayout";
import dynamic from "next/dynamic";
import azman from "../../../../public/me.jpg";
import Image from "next/image";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const Banner = ({ setIsOpen }: { setIsOpen?: (value: boolean) => void }) => {
  return (
    <div className="mb-20 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24 2xl:mb-28">
      {/* Added margin-bottom */}
      <BannerLayout>
        <div className="absolute inset-0 z-20 flex items-center justify-center py-6 w-full h-full bg-gradient-to-t from-MidNightBlack">
          {/* Responsive Two-Column Layout */}
          <div className="bg-LightGray/10 w-[90%] max-w-4xl px-6 py-6 rounded-xl grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Left Column: Text Section */}
            <div className="space-y-4 text-center lg:text-left">
              <div className="text-2xl sm:text-3xl lg:text-4xl text-Snow font-bold">
                Hello World! Azman Here
              </div>

              {/* Typewriter Effect */}
              <div className="font-cascadia-normal text-Snow text-base sm:text-lg lg:text-xl">
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
              <button
                className="bg-Green text-Snow px-6 py-2 rounded-lg font-bold hover:bg-Green/90"
                onClick={() => setIsOpen && setIsOpen(true)}
              >
                Explore
              </button>
            </div>

            {/* Right Column: Image Section */}
            <div className="flex items-center justify-center">
              <Image
                className="w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 rounded-full object-cover"
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
