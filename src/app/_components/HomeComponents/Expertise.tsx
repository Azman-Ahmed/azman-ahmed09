"use client";

import React, { useState, useEffect } from "react";
import ExpertiseCard from "@/app/background/ExpertiseCard";
import ParagraphSkeleton from "@/app/background/ParagraphSkeleton";
import { EXPERTISE } from "../constants/constants"; 

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
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Expertise</div>
      <div className="grid justify items-center grid-flow-row md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-4 px-2 md:px-8">
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
