import React from "react";
import { motion } from "framer-motion";
import EducationCard from "./EducationCard";

type Props = {};

const Education = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center"
    >
      <h3 className="absolute uppercase top-20 tracking-[20px] text-gray-500 text-2xl">
        Education
      </h3>
      <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        <EducationCard
          name="computer science and tehnics"
          where="PMF Split"
          when="2013 - 2015"
          logo="/pmf.png"
          skills={["html-logo", "css-logo", "python", "c++", "c"]}
          points={[
            "Introduction to programming",
            "Comparing multiple programming languages",
            "Makes choosing a carrer path easier",
          ]}
        />
        <EducationCard
          name="web desing"
          where="University College Algebra"
          when="24/11/2021 - 21/04/2022"
          logo="/algebra.svg"
          skills={["html-logo", "css-logo", "wordpress", "photoshop"]}
          points={[
            "Great introduction to web development",
            "Basics of Photoshop, HTML, CSS and Wordpress",
            "In depth SEO and responsive web design",
          ]}
        />
        <EducationCard
          name="javascript"
          where="Udemy"
          when="05/2022 - 08/2022"
          logo="/udemy.png"
          skills={["js-logo", "git", "github"]}
          points={[
            "Everything about Javascript, from basics to advanced features",
            "Fundamentals, DOM and events, OOP and Functional programming",
            "Hands on with many projects included",
          ]}
        />
        <EducationCard
          name="react"
          where="Udemy"
          when="08/2022 - 11/2022"
          logo="/udemy.png"
          skills={["react", "ts-logo", "redux", "nextjs"]}
          points={[
            "Detailed React course, with many projects included",
            "Hooks, State managment(Redux), React Router",
            "Also covered Next.js, Typescript",
          ]}
        />
      </div>
    </motion.div>
  );
};

export default Education;
