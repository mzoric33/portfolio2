import React from "react";
import { motion } from "framer-motion";
import { SocialIcon } from "react-social-icons";

const Projects = () => {
  const projects = [
    {
      name: "Travel Agency homepage",
      image: "/TRVL1.png",
      description:
        "Landing page for an imaginary travel agency created to practice front-end skills and react-router.",
      link: "https://github.com/mzoric33",
      github: "https://github.com/mzoric33/travel_react_website",
    },
    {
      name: "Netflix Clone",
      image: "/Netflix-clone.png",
      description:
        "This clone of an existing web application was used to practice my front-end skills. With this project I polished my ReactJS, Redux and React-router skills.",
      link: "https://netflix-clone-50c03.web.app",
      github: "https://github.com/mzoric33/netflix_clone",
    },
    {
      name: "DLM Sorting",
      image: "/TRVL2.png",
      description:
        "This project was made to solve a real-life problem that occured at a local company. They used to sort pallets in to a truck manually using Microsoft Word and Excel. To speed that process up, I created a web application that sorts the pallets for you after entering measurements. Technologies used are ReactJS and BricksJS.",
      link: "https://github.com/mzoric33",
      github: "https://github.com/mzoric33",
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Projects
      </h3>
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
            <motion.img
              initial={{ y: -300, opacity: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              viewport={{ once: true }}
              src={projects[i].image}
              width="500px"
              height="500px"
            />
            <div className="space-y-10 px-0 md:px-10 max-w-6xl text-center">
              <h4 className="text-4xl font-semibold text-center">
                <span className="underline decoration-[#F7AB0A]/50">
                  Case Study {i + 1} of {projects.length}:
                </span>
                {""} {projects[i].name}
              </h4>
              <SocialIcon
                url={projects[i].link}
                fgColor="gray"
                bgColor="transparent"
              />
              <SocialIcon
                url={projects[i].github}
                fgColor="gray"
                bgColor="transparent"
              />
              <p className="text-lg text-center md:text-left max-w-3xl">
                {projects[i].description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
