
"use client";

import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { useState, useEffect } from "react";
import { FaBars, FaMousePointer } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";
import LeftSideBar from "./_components/LeftSideBar/sidebar";
import Nav from "./_components/intro/rightbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [isHydrated, setIsHydrated] = useState(false); 

  useEffect(() => {
    setIsHydrated(true); // Ensure hydration has completed before rendering UI
  }, []);

  // Prevent mismatches by rendering only when the component is hydrated
  if (!isHydrated) return null;

  return (
    <>
      {/* Root HTML structure handled by Next.js automatically */}
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta name="description" content="Your site description here" />
          <title>Your Site Title</title>
          <Analytics />
          <SpeedInsights />
          {/* Other metadata and SEO tags go here */}
        </head>

        <body className="h-screen font-circular bg-DeepNightBlack text-LightGray">
          <div className="lg:p-[0.8rem] flex flex-col select-none">
            {/* Mobile top bar with menu icons */}
            <div className="lg:hidden">
              <div className="bg-DeepNightBlack text-LightGray w-full h-10 flex items-center justify-between px-2 relative">

                {/* Left top icon and its functionality */}
                <div className="icon flex items-center gap-x-2" onClick={() => setIntro(!intro)}>
                  <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                    <SlOptionsVertical />
                  </span>

                  <div className="text-Snow absolute -right-1 -bottom-1">
                    <FaMousePointer />
                  </div>
                </div>

                {/* Right top icon and its functionality */}
                <div className="icon flex items-center gap-x-2" onClick={() => setIsOpen(!isOpen)}>
                  <span className="icon border-2 text-Green border-Green p-1 text-sm rounded-lg">
                    <FaBars />
                  </span>
                </div>

              </div>
            </div>

            <div className="flex relative h-full justify-between gap-x-3">
              {/* Left Sidebar */}
              <div
                className={`w-64 h-screen left-0 lg:rounded-xl -top-10 lg:top-0 lg:left-0 lg:h-full overflow-hidden bg-DeepNightBlack shadow-2xl z-50 lg:flex flex-col lg:relative ${
                  intro ? 'flex absolute' : 'hidden'
                }`}
              >
                <LeftSideBar isOpen={intro} setIsOpen={setIntro} />
              </div>

              {/* Overlay */}
              {intro && <div onClick={() => setIntro(false)} className="fixed top-0 left-0 w-full h-full bg-black/50 backdrop-blur-[2px] z-40"></div>}

              {/* Main content area */}
              <div className="w-full h-auto lg:w-9/12 shadow-2xl bg-DeepNightBlack relative overflow-auto overflow-x-hidden no-scrollbar">
                {children}
              </div>

              {/* Right Sidebar */}
              <div className={`hidden lg:block absolute lg:w-20 lg:relative bg-DeepNightBlack shadow-2xl rounded-xl overflow-hidden`}>
                <div onClick={() => setIsOpen(!isOpen)} className="bg-MidNightBlack text-Green hidden lg:flex items-center h-16 justify-center text-2xl">
                  <span className="icon border-2 border-Green p-2 rounded-xl">
                    <FaBars />
                  </span>
                </div>
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-90 flex items-center justify-center text-center text-xl text-gray-600 font-extrabold tracking-widest">
                  NavBar
                </span>
              </div>
              <Nav isOpen={isOpen} setIsOpen={setIsOpen} />
            </div>
          </div>
        </body>
      </html>
    </>
  );
}
