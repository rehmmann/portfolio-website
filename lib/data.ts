import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/peerprep.png";
import rmtdevImg from "@/public/pepper.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
    title: "Software Engineer",
    location: "Rakuten Asia",
    description:
      "Working on developing data pipelines and data processing systems.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Bachelor's Degree in Computer Science🎓",
    location: "National University of Singapore",
    description: "Completed my 4 years education!",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
  {
    title: "AI Data Engineer Intern",
    location: "IMDA",
    description:
      "Developed a RAG question and answer chatbot🤖 integrated with Slack💬. Also gained experience in writing CI/CD pipelines and python scripting.",
    icon: React.createElement(CgWorkAlt),
    date: "2024",
  },
  {
    title: "Data Analyst Intern",
    location: "Shopee",
    description:
      "Focused on writing SQL queries and building dashboards📊 for our product team.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Product Management Intern",
    location: "Circles.Life",
    description:
      "Worked with designers and developers to roll out revamped user flows for our mobile app.",
    icon: React.createElement(CgWorkAlt),
    date: "2023",
  },
  {
    title: "Full Stack Engineer Intern",
    location: "Reluvate Technologies",
    description:
      "Built flutter mobile app from scratch in 3 months! Enabling merchants to make transactions with various payment processors💰",
    icon: React.createElement(CgWorkAlt),
    date: "2022",
  },
] as const;

export const projectsData = [
  {
    title: "PeerPrep",
    description:
      "A collaborative coding platform to practce coding questions after being matched with a peer.",
    tags: ["React JS", "Node js", "Mongo DB", "GCP", "Docker"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Pepper",
    description:
      "A mobile dating app where users can swipe on others to match and chat.",
    tags: ["Flutter", "Firebase"],
    imageUrl: rmtdevImg,
  },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "Python",
  "Java",
  "Scala",
  "JavaScript",
  "SQL",
  "Spark",
  "Flink",
  "Kafka",
  "GCP",
  "AWS",
  "Docker",
] as const;
