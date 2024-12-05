"use client";

import React, { useState, useEffect } from "react";
import ParagraphSkeleton from "@/app/background/ParagraphSkeleton";
import ReviewCard from "@/app/background/ReviewCard";
import { REVIEWS } from "../ConstantData/constants"; 


// Define the type for the review data
interface Review {
  id: number;
  clientName: string;
  clientLocation: string;
  clientSource: string;
  clientReview: string;
}

const ClientReviews = () => {
  const [reviewsData, setReviewsData] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setReviewsData(REVIEWS); // Your constant data
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Clients Reviews</div>
      <div className="overflow-x-auto w-full grid justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">
        {isLoading ? (
          [1, 2, 3, 4, 5].map((_, index) => (
            <ParagraphSkeleton key={index} className="w-80 md:w-96 h-full p-4 md:p-8" />
          ))
        ) : (
          reviewsData.map((review, key) => (
            <ReviewCard key={key} data={review} />
          ))
        )}
      </div>
    </>
  );
};

export default ClientReviews;
