import React from "react";
import Link from "next/link";
import { FaFacebookF, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
import { FaGithubAlt } from "react-icons/fa6";

const socials = [
  {
    icon: <FaFacebookF />,
    path: "https://www.facebook.com/rafzzs",
  },
  {
    icon: <FaGithubAlt />,
    path: "https://github.com/raprapppppp",
  },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/rafael-marquez-076493283/",
  },
  {
    icon: <FaMailBulk />,
    path: "",
  },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((social, index) => {
        return (
          <Link key={index} href={social.path} className={iconStyles}>
            {social.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
