import {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaDrupal,
    FaJava,
    FaReact,
    FaNodeJs,
    FaCloud, 
    FaBrain,
    FaComments,
    FaMicrochip,
    FaProjectDiagram
  } from 'react-icons/fa';
  import { SiJenkins, SiPytorch, SiTerraform } from 'react-icons/si';
  import { SiMysql } from "react-icons/si";
  import { FaDatabase } from "react-icons/fa";
  import { FaShopify } from "react-icons/fa";
  import { FaBootstrap } from "react-icons/fa";
  import { FaEgg } from "react-icons/fa6";
  import { MdOutlineEgg } from "react-icons/md";
  import { FaGolang } from "react-icons/fa6";
import { IconShadows } from '../data';
import JiggleSpinComponent from './JiggleSpinComponent';

  const IconComponents = {
    FaPython,
    FaAws,
    FaDocker,
    FaGit,
    FaGithub,
    FaHtml5,
    FaCss3,
    FaLinux,
    FaDrupal,
    FaJava,
    SiJenkins,
    SiPytorch,
    SiTerraform,
    SiMysql,
    FaDatabase,
    FaShopify,
    FaBootstrap,
    FaEgg,
    MdOutlineEgg,
    FaReact,
    FaGolang,
    FaNodeJs,
    FaCloud, 
    FaBrain,
    FaComments,
    FaMicrochip,
    FaProjectDiagram
  };

  const ExperienceIcons = ({ icons = [], showDescription=true, size=100 }) => (
      <div className="flex flex-wrap justify-center space-x-4">
        {icons.length > 0 ? (
          icons.map((icon) => {
            const IconComponent = IconComponents[icon.name];
            const shadowClass = IconShadows[icon.name]; // Fetch shadow class from IconShadows

            // Check if the IconComponent exists before rendering
            if (!IconComponent) {
              console.error(`Icon ${icon.name} does not exist in the IconComponents mapping.`);
              return null; // Return null if the icon is not found
            }
    
            return (
              <div key={icon.name} className="flex flex-col items-center">
                {/* Apply specific hover effect for Shopify */}
                <div className="group">
                  <div key={icon.name} className="flex flex-col items-center transition-transform hover:scale-125 duration-500">
                    {icon.name === 'FaShopify' ? (
                      <JiggleSpinComponent shadowColor="rgba(0, 255, 0, 0.8)" eggColor="green">
                        <IconComponent
                          size={size}
                          className="text-white filter drop-shadow-lg transition-all duration-300"
                        />
                      </JiggleSpinComponent>
                    ) : (
                      <div className="group">
                        <IconComponent
                          size={size}
                          className={`text-white filter drop-shadow-lg transition-all duration-300 group-hover:filter ${
                            shadowClass || '' // Apply the specific hover shadow from IconShadows
                          }`}
                        />
                      </div>
                    )}
                    {showDescription && (
                      <p className="mt-2 text-center text-sm text-white">{icon.label}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p>No icons available</p> // Fallback text if no icons are available
        )}
      </div>
    );

    export default ExperienceIcons;
