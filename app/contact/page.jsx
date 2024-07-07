"use client";
import React, { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
//import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Input from "@/components/Input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { FaPhone, FaEnvelopesBulk } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";

const infos = [
  {
    icon: <FaPhone />,
    title: "Phone",
    description: "(+63) 951 623 2404",
  },
  {
    icon: <FaEnvelopesBulk />,
    title: "Email",
    description: "cpe.marquez.rafael@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Lusacan Tiaong Quezon",
  },
];
const Contact = () => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      firstname === "" ||
      lastname === "" ||
      email === "" ||
      phone === "" ||
      message === ""
    ) {
      console.log("empty input fields");
    } else {
      emailjs
        .sendForm("service_ocp3tdt", "template_gjlenxo", form.current, {
          publicKey: "kbMnH09rdxCH2d2QZ",
        })
        .then(
          () => {
            console.log("SUCCESS!");
            alert("Sent Success fully");
            setFirstname("");
            setLastname("");
            setEmail("");
            setPhone("");
            setMessage("");
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.4, duration: 0.4, ease: "easeIn" },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/*FORM*/}
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form
              ref={form}
              onSubmit={sendEmail}
              action=""
              className="flex flex-col gap-6 p-10 bg-[#12477a] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60 ">
                Ensure that the input fields are filled out; otherwise, your
                message won't be delivered to me. Just a reminder, there will be
                no pop-up alert.
              </p>

              {/*INPUT*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input
                  type="text"
                  placeholder="Firstname"
                  onChange={(e) => setFirstname(e.target.value)}
                  value={firstname}
                  name="firstname"
                />
                <Input
                  type="text"
                  placeholder="Lastname"
                  onChange={(e) => setLastname(e.target.value)}
                  value={lastname}
                  name="lastname"
                />
                <Input
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  name="email"
                />
                <Input
                  type="number"
                  placeholder="Phone number"
                  onChange={(e) => setPhone(e.target.value)}
                  value={phone}
                  name="phone"
                />
              </div>
              {/*SELECT*/}
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service"></SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="est">Web Development</SelectItem>
                    {/*<SelectItem value="cst">Basic Video Editing</SelectItem>
                    <SelectItem value="mst">Tech Support</SelectItem>*/}
                  </SelectGroup>
                </SelectContent>
              </Select>

              {/*TEXTAREA*/}
              <Textarea
                placeholder="Type your message here."
                className="h-[200px]"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="message"
              />

              {/*BUTTON*/}

              <button
                type="submit"
                className="inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-semibold ring-offset-white transition-all bg-accent max-w-40 text-primary py-3 hover:bg-accent-hover"
              >
                Send message
              </button>
            </form>
          </div>

          {/*INFO*/}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {infos.map((info, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="flex items-center justify-center size-[52px] xl:size-[72px] bg-[#12477a] text-accent rounded-md ">
                      <div className="text-[28px]">{info.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-white/60">{info.title}</p>
                      <h3 className="text-xl">{info.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
