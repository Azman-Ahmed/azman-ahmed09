"use client";

import React, { useState, useEffect } from "react";
import ProjectCard from "../background/ProjectCard"; // Renamed to ProjectCard for clarity
import ImageAndParagraphSkeleton from "../background/ImageAndParagraphSkeleton";
import { PROJECTS } from "../_components/ConstantData/constants";  // Import your mock data
import Footer from "../_components/Common/Footer";

// Define the ProjectItem interface
interface ProjectItem {
  id: number;
  projectName: string;       // Renamed title to projectName
  projectDetail: string;     // Renamed description to projectDetail
  url: string;               // Renamed githubURL to url
  image: string;             // Renamed imageURL to image
  technologiesUsed: { tech: string }[];  // Added technologiesUsed field
}

const Projects = () => { // Renamed the component to Projects
  const [projectData, setProjectData] = useState<ProjectItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay before setting the data, just like in MyExpertise
    setTimeout(() => {
      // Map your original PORTFOLIO data to the updated structure
      const mappedData: ProjectItem[] = PROJECTS.map((item) => ({
        id: item.id,
        projectName: item.title,  // Map title to projectName
        projectDetail: item.description,  // Map description to projectDetail
        url: item.githubURL,  // Map githubURL to url
        image: item.imageURL,  // Map imageURL to image
        technologiesUsed: [],  // Assuming you don't have this data yet, you can leave it empty or populate later
      }));
      setProjectData(mappedData);  // Set the mapped data
      setIsLoading(false);
    }, 1000); // You can adjust the delay as needed
  }, []);

  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">My Projects</div> {/* Updated text */}
      <div className="grid grid-cols-1 gap-4 px-2 md:px-8">
        {isLoading ? (
          // Show skeletons while loading
          Array.from({ length: 4 }).map((_, index) => (
            <ImageAndParagraphSkeleton key={index} className="w-full object-cover" />
          ))
        ): (
          // Show project cards once data is loaded
          projectData.map((data: ProjectItem) => (
            <ProjectCard key={data.id} data={data} /> 
          ))
        )}

        
      </div>
      <Footer/>
    </>
  );
};

export default Projects;
