"use client";

import "./globals.css";

import { useState } from "react";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import Intro from "./_components/intro/sidebar";

// import Intro from "../components/Common/Intro";
// import Nav from "../components/Common/Nav/Nav";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);

  return (
    <html lang="en">
      <head>
        {/* Metadata, SEO tags, etc., can be added here */}
      </head>
      <body className="h-screen font-circular bg-DeepNightBlack text-LightGray">
        {/* Main container */}
        <div className="lg:p-[0.8rem] flex flex-col h-full select-none">
          
          {/* Mobile Header */}
          <div className="lg:hidden bg-DeepNightBlack w-full h-10 flex items-center justify-between px-2">
            <div className="flex items-center gap-2" onClick={() => setIntro(!intro)}>
              <span className="border-2 border-Green text-Green p-1 rounded-lg text-sm">
                <SlOptionsVertical />
              </span>
              <FaMousePointer className="absolute -right-1 -bottom-1 text-Snow" />
            </div>
            <div className="flex items-center gap-2" onClick={() => setIsOpen(!isOpen)}>
              <span className="border-2 border-Green text-Green p-1 rounded-lg text-sm">
                <FaBars />
              </span>
            </div>
          </div>

          {/* Layout Structure */}
          <div className="flex relative h-full justify-between gap-3">
            
            {/* Left Sidebar */}
            <div
              className={`w-64 h-screen lg:rounded-xl bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative overflow-hidden ${
                intro ? "flex absolute top-0 left-0" : "hidden"
              }`}
            >
              {/* <Intro isOpen={intro} setIsOpen={setIntro} /> */}
              <Intro/>
            </div>

            {/* Overlay */}
            {intro && (
              <div
                onClick={() => setIntro(false)}
                className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40"
              />
            )}

            {/* Main Content Area */}
            <div className="w-full lg:w-9/12 shadow-2xl bg-DeepNightBlack overflow-auto no-scrollbar">
              {children}
            </div>

            {/* Right Sidebar */}
            <div className="hidden lg:block lg:w-20 bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden">
              <div
                onClick={() => setIsOpen(!isOpen)}
                className="bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl"
              >
                <span className="border-2 border-Green p-2 rounded-xl">
                  <FaBars />
                </span>
              </div>
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 text-center text-xl text-gray-600 font-extrabold tracking-widest">
                NavBar
              </span>
            </div>

            {/* <Nav isOpen={isOpen} setIsOpen={setIsOpen} /> */}
          </div>
        </div>
      </body>
    </html>
  );
}
