import React from "react";

interface CompetitionCardProps {
  competition: {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    imageURL: string;
    competitionType: string;
    achievement?: string;
  };
}

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <div
      key={competition.id}
      className="bg-MidNightBlack p-4 rounded-lg shadow-lg flex flex-col md:flex-row items-center"
    >
      <img
        src={competition.imageURL}
        alt={competition.title}
        className="w-full md:w-1/4 rounded-lg object-cover mb-4 md:mb-0 md:mr-4"
      />
      <div className="text-Snow">
        <h2 className="text-lg font-bold">{competition.title}</h2>
        <p className="text-sm mb-2">{competition.description}</p>
        <p className="text-sm font-semibold">📅 Date: {competition.date}</p>
        <p className="text-sm font-semibold">📍 Location: {competition.location}</p>
        {competition.achievement && (
          <p className="text-sm font-semibold text-Gold">
            🏆 Achievement: {competition.achievement}
          </p>
        )}
      </div>
    </div>
  );
};

export default CompetitionCard;
