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
      <p className="mb-3 ">
        As an undergrad I gained experience in different roles in{" "}
        <span className="font-medium">
          Mobile development, Product Management, Data Analytics and Software
          Engineering
        </span>
        . However, I have been fascinated with AI and have focused on developing
        solutions leveraging <span className="font-medium underline">AI</span>{" "}
        and
        <span className="font-medium underline"> Data</span>.
      </p>
      <p>
        Through it all, my goal remains the same: to leverage technology,
        especially AI, to create value for businesses and society.
      </p>
    </motion.section>
  );
}
