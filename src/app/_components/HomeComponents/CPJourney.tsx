"use client"

import React, { useState, useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { ROADMAP } from "../constants/constants"; 

interface Milestone {
  id: number;
  title: string;
  description: string;
  date: string;
  completed: boolean;
}

const Roadmap = () => {
  const [milestones, setMilestones] = useState<Milestone[]>(ROADMAP);

  return (
    <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">
      <h2 className="text-2xl font-bold text-Snow mb-6">Competetive Programming Journey</h2>
      <div className="relative">
        <div className="absolute w-1 bg-LightGray top-0 bottom-0 left-1/2 transform -translate-x-1/2"></div>
        {milestones.map((milestone) => (
          <div key={milestone.id} className="flex justify-between items-center mb-8 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-EveningBlack rounded-full flex items-center justify-center border-2 border-Snow">
              {milestone.completed ? (
                <FaCheckCircle className="text-green-500" />
              ) : (
                <HiOutlineArrowNarrowRight className="text-LightGray" />
              )}
            </div>
            <div className="flex-1 pl-8 pr-4">
              <h3 className="text-lg font-semibold">{milestone.title}</h3>
              <p className="text-sm text-LightGray">{milestone.description}</p>
              <p className="text-xs text-LightGray">{milestone.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;
