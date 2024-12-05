"use client";

import React, { useState, useEffect } from "react";
import ExpertiseCard from "@/app/background/ExpertiseCard";
import ParagraphSkeleton from "@/app/background/ParagraphSkeleton";
import { EXPERTISE } from "../ConstantData/constants";

interface Expertise {
  id: number;
  title: string;
  desc: string;
}

const MyExpertise = () => {
  const [expertiseData, setExpertiseData] = useState<Expertise[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setExpertiseData(EXPERTISE);
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="px-4 md:px-8 py-4 text-xl font-bold text-Snow text-center md:text-left">
        My Expertise
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 md:px-8">
        {isLoading ? (
          [1, 2, 3, 4, 5, 6].map((_, index) => (
            <ParagraphSkeleton key={index} className={"space-y-2 p-8"} />
          ))
        ) : (
          expertiseData.map((data, key) => (
            <ExpertiseCard key={key} data={data} />
          ))
        )}
      </div>
    </>
  );
};

export default MyExpertise;
