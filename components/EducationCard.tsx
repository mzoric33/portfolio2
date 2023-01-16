import React from "react";
import { motion } from "framer-motion";
import { link } from "fs";

type Props = {
  name: string;
  where: string;
  when: string;
  logo: string;
  skills: Array<string>;
  points: Array<string>;
};

const EducationCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 mt-24 pt-5 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] xl:mt-36 snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src={props.logo}
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light uppercase">{props.name}</h4>
        <p className="font-bold text-2xl mt-1">{props.where}</p>
        <div className="flex space-x-2 my-2">
          {props.skills.map((skill, i) => (
            <img
              className="h-10 w-10 rounded-full"
              src={`/${skill}.png`}
              alt={skill}
              key={i}
            />
          ))}
        </div>
        <p className="uppercase py-5 text-gray-300">{props.when}</p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          {props.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default EducationCard;
