import React from "react";
import { ExpCard } from "./types";

type ExpCardProps = {
  exp: ExpCard;
};

const Exp_Card: React.FC<ExpCardProps> = ({ exp }) => {
  return (
    <div className="card_stylings bg-EveningBlack p-4 rounded-md">
      <h3 className="text-Green font-bold">{exp.title}</h3>
      <p className="text-Snow">{exp.role}</p>
      <a href={exp.url} className="text-Snow underline">
        {exp.url !== "no website" ? exp.url : "No website available"}
      </a>
      <p className="text-Snow">{exp.desc}</p>
      <p className="text-Snow">{exp.year}</p>
      <p className="text-Snow">{exp.location}</p>
    </div>
  );
};

export default Exp_Card;
