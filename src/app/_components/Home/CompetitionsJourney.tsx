"use client";

import React, { useState, useEffect } from "react";
import { CompetitionItem as CompetitionData } from "../ConstantData/constants"; // Import the constants with competition data
import Footer from "../Common/Footer";
import ImageAndParagraphSkeleton from "@/app/background/ImageAndParagraphSkeleton";
import CompetitionCard from "@/app/background/CompetitionCard";

// Adjusting the interface to match the actual data structure in constants
interface CompetitionItem {
  id: number;
  title: string;
  description: string; // description should always be a string
  date: string;
  location: string;
  imageURL: string;
  competitionType: string;
  achievement?: string;
}

const CompetitionsJourney: React.FC = () => {
  const [competitionData, setCompetitionData] = useState<CompetitionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      // Ensure that the description field is always a string
      const formattedData = CompetitionData.map((competition) => ({
        ...competition,
        description: competition.description || "No description available", // Fallback for missing description
      }));

      setCompetitionData(formattedData);
      setIsLoading(false);
    }, 1000); // Simulated delay
  }, []);

  // Function to group competitions by type
  const groupByType = (data: CompetitionItem[]) => {
    return data.reduce((groups, competition) => {
      const type = competition.competitionType || 'Unknown';
      if (!groups[type]) {
        groups[type] = [];
      }
      groups[type].push(competition);
      return groups;
    }, {} as Record<string, CompetitionItem[]>);
  };

  const groupedCompetitions = groupByType(competitionData);

  return (
    <>
      <div className="mt-10 mb12 px-2 md:px-8 text-lg font-bold text-Snow">
        My National Competitions Journey
      </div>
      <div className="grid grid-cols-1 gap-4 px-2 md:px-8">
        {isLoading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <ImageAndParagraphSkeleton key={index} className="w-full object-cover" />
          ))
        ) : (
          Object.keys(groupedCompetitions).map((type) => (
            <div key={type} className="mb-6">
              <h3 className="text-xl font-bold text-MidNightBlack mt25">{type}</h3>
              <div className="grid grid-cols-1 gap-4 mt-1">
                {groupedCompetitions[type].map((competition) => (
                  <CompetitionCard key={competition.id} competition={competition} />
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
};

export default CompetitionsJourney;
