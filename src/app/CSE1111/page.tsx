import React from 'react';
import { Suggestions } from '../_components/ConstantData/CSE1111fall24'; // Adjust path accordingly

// Define the type of props expected in the ExamCard component
interface ExamCardProps {
  data: {
    syllabus: string[];
    topics_to_study: string[];
  };
}

const ExamCard: React.FC<ExamCardProps> = ({ data }) => {
  return (
    <div className="card_stylings p-8 bg-gray-800 text-Snow rounded-xl flex flex-col items-center justify-center">
      <div className="text-xl font-bold mb-4">Final Exam Details</div>
      
      <div className="text-lg font-semibold mb-4">Syllabus:</div>
      <ul className="list-disc list-inside mb-4">
        {data.syllabus.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
      
      <div className="text-lg font-semibold mb-4">Topics to Study:</div>
      <ul className="list-disc list-inside">
        {data.topics_to_study.map((item, index) => (
          <li key={index} className="text-sm">{item}</li>
        ))}
      </ul>
    </div>
  );
};

const Page: React.FC = () => {
  return (
    <>
      <div className="px-2 md:px-8 py-4 text-lg font-bold text-Snow">Final Exam Details</div>
      <div className="grid grid-cols-1 gap-4 px-2 md:px-8">
        {/* Map through Suggestions and display the exam data */}
        {Suggestions.map((suggestion, index) => (
          <ExamCard key={index} data={suggestion.final_exam} />
        ))}
      </div>
    </>
  );
};

export default Page;
