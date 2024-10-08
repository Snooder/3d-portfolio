import React, { useState } from "react";
import ExperienceIcons from "./ExperienceIcons";
import { experiences } from "../data";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useInView } from "react-intersection-observer";
import JiggleSpinComponent from "./JiggleSpinComponent";
import { logEvent } from "../analytics"; // Import the logEvent function
import ExperienceDetailPanel from './ExperienceDetailPanel'; // Import the new component

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(experiences[0]);
  const [openedExperiences, setOpenedExperiences] = useState(new Set([experiences[0].title]));

  const handleSelectExperience = (experience) => {
    setSelectedExperience(experience);
    setOpenedExperiences((prev) => new Set(prev).add(experience.title));

    // Log the experience click event
    logEvent("Experience", "Select", experience.title);
  };

  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  return (
    <div className="flex flex-col max-w-7xl mx-auto h-full" style={{ paddingTop: '50px' }}>
      {/* Section Title with motion animation and permanent glowing shadow */}
      <motion.div
        ref={ref}
        className="xs:text-left xs:px-20 sm:px-20"
        variants={textVariant()}
        initial="hidden"
        animate={inView ? 'show' : 'hidden'}
      >
        <h2
          className="text-2xl text-center xs:text-3xl sm:text-4xl md:text-5xl font-bold filter drop-shadow-[0_0_20px_rgba(0,255,0,0.8)]" 
        >
          Experience
        </h2>
      </motion.div>

      {/* Parent Grid Layout */}
      <div className="flex flex-col sm:flex-row h-full mt-8 gap-4">
        {/* Left Column (Experience Cards) */}
        <div className="w-full sm:w-4/12 h-auto sm:h-full pb-6 pl-5 pr-5">
          <div className="grid grid-cols-3 sm:grid-cols-1 gap-4">
            {experiences.slice(0, 6).map((experience, index) => (
              <div
                key={index}
                className={`p-4 cursor-pointer border-l-4 transition duration-300 ease-in-out rounded-lg ${
                  experience === selectedExperience
                    ? 'bg-gray-800 text-white border-yellow-500 shadow-[0_0_20px_gold]'
                    : openedExperiences.has(experience.title)
                    ? 'bg-gray-800 text-white border-transparent shadow-md'
                    : 'bg-gray-400 text-slate-600 border-transparent'
                } hover:text-white hover:border-yellow-500 hover:shadow-[0_0_20px_gold]`}
                onClick={() => handleSelectExperience(experience)}
              >
                <h3 className="text-[8px] xs:text-xs sm:text-base">{experience.title}</h3>
                <p className="text-[8px] xs:text-xs sm:text-base">{experience.company_name}</p>
                <p className="text-[8px] xs:text-xs sm:text-base">{experience.date}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Pass selectedExperience to the new component */}
        <div className="w-[100vw] sm:w-8/12 h-auto sm:h-full xs:pl-10 sm:pl-0 sm:pr-5">
          <ExperienceDetailPanel selectedExperience={selectedExperience} />
        </div>
      </div>
    </div>
  );
};

export default Experience;
