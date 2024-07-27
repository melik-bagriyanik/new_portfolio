"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I graduated from Bilecik Seyh Edebali University, Department of Computer
        Engineering. In my final year, I completed an internship at Singularity
        Software Technologies, where I focused on mobile application
        development. After graduating in January 2023, I joined the same company
        as a front-end developer, and I continue to contribute in this role.
        <br />
        <span>
          {" "}
          My professional expertise includes a strong skill set in React.js,
          Next.js, HTML, CSS, SCSS, JavaScript, Bootstrap, and Flutter. I am
          committed to creating engaging and efficient user interfaces,
          constantly improving my skills to stay at the forefront of web
          development technologies.
        </span>
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games and watching movies.
        <span className="font-medium">
          Also, I love traveling abroad and discovering new places.
        </span>
      </p>
    </motion.section>
  );
}
