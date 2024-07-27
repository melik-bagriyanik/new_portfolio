import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import cv from "@/public/cv-website.png";
import film from "@/public/film-website.png";
import home from "@/public/house_website.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "freelance Mobil Application Developer",
    location: "İstanbul, Turkey",
    description: "Flutter",
    grade: null,
    icon: React.createElement(LuGraduationCap),
    date: "Jan 2022 - Apr 2022",
  },
  {
    title: "Mobil Application Developer - Intern",
    location: "İstanbul, Turkey",
    grade: "Singularity Software Tecnologies",
    description: "Flutter",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2022 - Aug 2022",
  },
  {
    title: "Front-End Developer",
    location: "İstanbul, Turkey",
    grade: "Singularity Software Tecnologies",
    description: "React, Next.js",
    icon: React.createElement(FaReact),
    date: "Jan 2023 - present",
  },
] as const;
export const educationData = [
  {
    title: "University",
    location: "Bilecik, Turkey",
    description: "Computer Engineering",
    grade: "Grade 3.25",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2023",
  },
  {
    title: "Wroclaw University of Economics and Business",
    location: "Wroclaw, Poland",
    grade: "Computer Science",
    description: "Erasmus",
    icon: React.createElement(CgWorkAlt),
    date: "2021",
  },
  {
    title: "WSB University ",
    location: "Poznan, Poland",
    grade: "Master",
    // description:
    //   "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",

    description: "Bussines Managment - Project Managment ",
    icon: React.createElement(FaReact),
    date: "2024 - present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio website",
    description: "This is my first portfolie website",
    tags: ["HTML", "CSS", "Bootsrap", "Javascript"],
    imageUrl: cv,
  },
  {
    title: "Film website",
    description:
      "The movie watching site I made for improve myself from the course I took",
    tags: ["React", "TypeScript", "Next.js"],
    imageUrl: film,
  },
  {
    title: "Shoping website",
    description: "a large scale shopping site that I am still working on",
    tags: ["React", "Next.js", "Mongodb", "trpc", "tailwind"],
    imageUrl: home,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Flutter",
  "Bootstrap",
  "Framer Motion",
  "Mui",
] as const;
