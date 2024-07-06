"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "A-Plus-Construnction",
    description:
      "This project was recreated to improve my web development skills. it is a website for A-Plus-Construction",
    stack: [
      ,
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Html, Css, Javascript" },
    ],
    image: "/assets/works/project1.jpg",
    live: "https://a-plus-construction.vercel.app/",
    github: "https://github.com/raprapppppp/A-Plus-Construction",
  },
  {
    num: "02",
    category: "frontend",
    title: "Authentication-CRUD",
    description:
      "This project used Firebase to make Authentication and CRUD, it is good practice to enhance some backend skill. username: admin@gmail.com and password: 1232456",
    stack: [
      ,
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Firebase" },
    ],
    image: "/assets/works/Crud.jpg",
    live: "https://authentication-crud-one.vercel.app/",
    github: "https://github.com/raprapppppp/Authentication-CRUD",
  },
  {
    num: "03",
    category: "frontend",
    title: "Resto-website",
    description:
      "This project is a simple resto web, it is good to recreated to practice some frontend skill",
    stack: [
      ,
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Html, Css, Javascript" },
    ],
    image: "/assets/works/project2.jpg",
    live: "https://resto-tan.vercel.app/",
    github: "https://github.com/raprapppppp/Resto",
  },
  {
    num: "04",
    category: "frontend",
    title: "project 4",
    description:
      "This project is good practice for the beginner to gasp mapping",
    stack: [
      ,
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Html, Css, Javascript" },
    ],
    image: "/assets/works/project3.jpg",
    live: "https://travel-journey-seven.vercel.app/",
    github: "https://github.com/raprapppppp/Travel-Journey",
  },
  {
    num: "05",
    category: "frontend",
    title: "Color-Picker",
    description: "This project is color picker",
    stack: [
      ,
      { name: "React.js" },
      { name: "Tailwind.css" },
      { name: "Html, Css, Javascript" },
    ],
    image: "/assets/works/project4.jpg",
    live: "https://color-picker-eight-pi.vercel.app/",
    github: "https://github.com/raprapppppp/Color-Picker",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%] group">
              {/*OUTLINE*/}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/*PROJECT CATEGORY*/}
              <h2 className="text-[42px] font-bold leading-none text-white transition-all duration-500 capitalize">
                {project.category}
              </h2>
              {/*PROJECT DESCRIPTION*/}
              <p className="text-white/60">{project.description}</p>
              {/*STACKS*/}
              <ul className="flex flex-wrap gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/*BORDER*/}
              <div className="border border-white/20"></div>
              {/*BUTTON*/}
              <div className="flex items-center gap-4">
                {/*Live project*/}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-[#12477a] flex  justify-center items-center group">
                        <BsArrowUpRight className=" text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/*Project github*/}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="size-[70px] rounded-full bg-[#12477a] flex  justify-center items-center group">
                        <BsGithub className=" text-white text-3xl group-hover:text-accent transition-all duration-500" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          {/*Swiper*/}
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-[#12477a]">
                      {/*Overlay*/}
                      <div className="absolute top-0 bottom-0 size-full bg-black/10 z-10"></div>
                      {/*Image*/}
                      <div className="relative size-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-contain"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/*Slider Buttons*/}
              <WorkSliderBtns
                containerStyles="flex justify-between gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] size-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
