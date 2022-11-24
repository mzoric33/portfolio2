import React from "react";
import { motion } from "framer-motion";

type Props = {};

const ExperienceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 mt-24 pt-5 flex-shrink-0 w-[300px] md:w-[400px] xl:w-[500px] xl:mt-36 snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ duration: 1.2 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="w-20 h-20 rounded-full md:rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
        src="https://expresswriters.com/wp-content/uploads/2015/09/google-new-logo-450x450.jpg"
        alt="logo"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-2xl font-light">CEO of Google</h4>
        <p className="font-bold text-2xl mt-1">GOOGLE</p>
        <div className="flex space-x-2 my-2">
          <img
            className="h-10 w-10 rounded-full"
            src="/js-logo.svg"
            alt="javascript logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/js-logo.svg"
            alt="javascript logo"
          />
          <img
            className="h-10 w-10 rounded-full"
            src="/js-logo.svg"
            alt="javascript logo"
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
          <li>Summary Points</li>
        </ul>
      </div>
    </article>
  );
};

export default ExperienceCard;
