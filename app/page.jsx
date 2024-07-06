"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";

import Socials from "@/components/Socials";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

const Home = () => {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex justify-between items-center flex-col lg:flex-row xl:pt-8 xl:pb-24">
          {/*FOR TEXT*/}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">
              <TypeAnimation
                sequence={["Computer Engineer.", 1000, "Frontend Dev", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>

            <h1 className="h1 mb-6">
              Hello I'm <br />{" "}
              <span className="text-accent">Rafael Marquez</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              A fresh graduate in Computer Engineering, taking the path of
              becoming web developer
            </p>

            {/*Button and Social*/}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="flex items-center gap-2"
              >
                <span>Download CV</span>
                <FaDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="size-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/*FOR Image*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
