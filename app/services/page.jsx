"use client";
import React from "react";
import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";
import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "I have a solid foundation in web development, with expertise in HTML, CSS, JavaScript, React, and Tailwind CSS. I am skilled at creating responsive and dynamic web applications and can quickly adapt to new technologies and frameworks",
    href: "",
  },
  {
    num: "02",
    title: "Basic Video Editing",
    description:
      "I have basic video editing skills, including trimming, splicing, adding transitions, and incorporating audio tracks. I am proficient with software like Adobe Premiere Pro and Filmora, capable of producing cohesive and polished videos",
    href: "",
  },
  {
    num: "03",
    title: "Presentation",
    description:
      "I have experience creating visually appealing and effective presentations using Canva, incorporating multimedia elements, and organizing content for clarity and impact.",
    href: "",
  },
  {
    num: "04",
    title: "Tech Support",
    description:
      "I have experience in tech support, specializing in troubleshooting computer hardware and software issues. I am skilled in diagnosing hardware malfunctions, performing software installations and updates, and providing user assistance. My ability to communicate technical information clearly ensures prompt issue resolution and user satisfaction.",
    href: "",
  },
];

const Services = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="group">
                {/*TOP*/}
                <div className="flex justify-between items-center w-full">
                  <div className="text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="size-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/*TITLE*/}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/*DESCRIPTION*/}
                <p className="text-white/60">{service.description}</p>
                {/*BORDER*/}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
