"use client";
import React from "react";
import { FaHtml5, FaCss3, FaJs, FaReact } from "react-icons/fa";
import { PiFileCpp } from "react-icons/pi";
import { RiTailwindCssFill } from "react-icons/ri";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

{
  /*ABOUT DATA*/
}
const about = {
  title: "About me",
  description:
    "Hello! I am a recent Computer Engineering graduate with a strong foundation in hardware and software. I'm now focusing on becoming a web developer, with a passion for creating user-friendly and visually appealing web interfaces. Proficient in HTML, CSS, JavaScript, and React, I thrive in challenging environments that foster growth and innovation.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Rafael Marquez",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+63) 951 623 2404",
    },
    {
      fieldName: "Experience",
      fieldValue: "2 Months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Filipino",
    },
    {
      fieldName: "Email",
      fieldValue: "cpe.marquez.rafael@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Tagalog, English",
    },
  ],
};

{
  /*EXPERIENCE DATA*/
}
const experience = {
  icon: "",
  title: "My experience",
  desciption:
    "As a recent Computer Engineering graduate, my experience spans various aspects of both hardware and software development. Throughout my academic journey, I have honed my skills in programming, system design, and problem-solving, with a special focus on web development.",
  items: [
    {
      company: "EMISO",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
    {
      company: "EMISO",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
    {
      company: "EMISO",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
    {
      company: "EMISO",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
    {
      company: "Educational Management Information System",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
    {
      company: "Educational Management Information System",
      position: "OJT Student",
      duration: "2 Months - Tri Sem",
    },
  ],
};

{
  /*EDUCATION DATA*/
}
const education = {
  icon: "",
  title: "My education",
  desciption: "This is the school I attended and graduated from.",
  items: [
    {
      institution: "Pamantasan ng Lungsod ng San Pablo",
      degree: "BS Computer Engineering",
      sy: "2023-2024",
    },
    {
      institution: "Asian Institute of Technology and Education",
      degree: "ICT-Programmer",
      sy: "2017-2018",
    },
    {
      institution: "Lusacan Elementary School",
      degree: "LES",
      sy: "2011-2012",
    },
  ],
};

{
  /*SKILL DATA*/
}
const skills = {
  title: "My skills",
  description: "This is the skill I acquired to become a web developer.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <PiFileCpp />,
      name: "c++",
    },
    {
      icon: <RiTailwindCssFill />,
      name: "tailwind.css",
    },
  ],
};

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="flex justify-center items-center min-h-[80vh] py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/*CONTENTS*/}

          <div className="min-h-[70vh] w-full">
            {/*EXPERIENCE*/}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.desciption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#12477a] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*EDUCATION*/}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.desciption}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 xl:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#12477a] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.sy}</span>
                          <h3 className="text-xl max-w[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="size-[6px] bg-accent rounded-full"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/*SKILLS*/}
            <TabsContent value="skills" className="w-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4 ">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="flex justify-center items-center w-full h-[150px] bg-[#12477a] rounded-xl group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/*ABOUT*/}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 xl:gap-x-[70px] max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4 "
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-md">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;

{
  /*

  




  */
}
