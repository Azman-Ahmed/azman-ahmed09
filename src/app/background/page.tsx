import React from "react";
import Footer from "../_components/HomeComponents/Footer";
import BannerLayout from "../_components/layouts/BannerLayout";
import { EDUCATION, EXPERIENCE } from "../_components/constants/constants";
import CardLayout from "./CardLayout";

function Background() {
  return (
    <BannerLayout>
      <div className="relative grid md:grid-cols-2 px-4 pt-10">
        {/* Divider Line */}
        <div className="hidden md:block absolute left-[48%] top-10 bottom-10 border-l-4 border-Green"></div>

        {/* Education Section */}
        <div className="flex flex-col gap-y-4 order-2 md:order-1 md:mr-16">
          <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">
            Education
          </div>
          {EDUCATION.map((edu) => (
            <CardLayout
              key={edu.id}
              className="bg-EveningBlack p-6 shadow-md text-Snow rounded-lg"
            >
              <h3 className="text-lg font-bold">{edu.title}</h3>
              <p className="text-sm italic text-Green/80">{edu.degree}</p>
              <p className="text-sm mt-2">{edu.detail}</p>
              <div className="flex justify-between items-center mt-4 text-xs text-Green/70">
                <span>{edu.year}</span>
              </div>
            </CardLayout>
          ))}
        </div>

        {/* Experience Section */}
        <div className="flex flex-col gap-y-4 order-1 md:order-2 md:ml-16">
          <div className="text-xl text-Snow font-semibold">Experience</div>
          {EXPERIENCE.map((exp) => (
            <CardLayout
              key={exp.id}
              className="bg-EveningBlack p-6 shadow-md text-Snow rounded-lg"
            >
              <h3 className="text-lg font-bold">{exp.company}</h3>
              <p className="text-sm italic text-Green/80">{exp.role}</p>
              <p className="text-sm mt-2">{exp.detail}</p>
              <div className="flex justify-between items-center mt-4 text-xs text-Green/70">
                <span>{exp.duration}</span>
                <span>{exp.location}</span>
              </div>
            </CardLayout>
          ))}
        </div>
      </div>
      <Footer />
    </BannerLayout>
  );
}

export default Background;
