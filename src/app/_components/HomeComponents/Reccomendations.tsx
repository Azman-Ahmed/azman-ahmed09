"use client";

import React, { useState, useEffect } from "react";
import ParagraphSkeleton from "@/app/background/ParagraphSkeleton";
import { RECOMMENDATIONS } from "../constants/constants"; 
import RecommendationCard from "@/app/background/RecommendationCard";

interface Recommendation {
  id: number;
  name: string;
  image: string;
  designation: string;
  view: string;
  linkednURL: string;
}

const Recommendations = () => {
  const [recommendationsData, setRecommendationsData] = useState<Recommendation[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setRecommendationsData(RECOMMENDATIONS);
      setIsLoading(false);
    }, 1000); // Simulating delay for loading
  }, []);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Recommendations</div>
      <div className="grid w-full h-full mt-5 justify-items-start grid-flow-row md:grid-cols-2 grid-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading ? (
          [1, 2, 3, 4].map((_, index) => (
            <ParagraphSkeleton key={index} className={"p-8 h-full w-full relative"} />
          ))
        ) : (
          recommendationsData.map((data, key) => (
            <RecommendationCard key={key} data={data} />
          ))
        )}
      </div>
    </>
  );
};

export default Recommendations;
