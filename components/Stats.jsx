"use client";
import React from "react";
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Months of experience",
  },
  {
    num: 4,
    text: "Project completed",
  },
  {
    num: 4,
    text: "Technologies knowledged",
  },
  {
    num: 7,
    text: "Code commits",
  },
];

const Stats = () => {
  return (
    <section className="pt-4 pb-10 xl:pt-0 xl:pb-0">
      <div className="container mx-auto">
        <div className="flex flex-wrap gap-6 max-w-[80vw] mx-auto xl:max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-1 justify-center items-center gap-4"
              >
                <CountUp
                  end={item.num}
                  duration={5}
                  delay={2}
                  className="text-4xl xl:texl-6xl font-extrabold"
                />
                <p
                  className={`${
                    item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]"
                  } leading-snug text-white/80`}
                >
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
