"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Finance Tracker",
    description: "Finance Tracker is a web application designed to help users manage their personal finances efficiently. This application leverages the power of React.js for a dynamic, responsive user interface and Firebase for secure, real-time data storage and user authentication.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarikeshHarsh/FinanceTracker",
    previewUrl: "https://finance-tracker-gamma-rose.vercel.app",

  },
  {
    id: 2,
    title: "React E-commerce Website",
    description: "An e-commerce website built with the React.js framework offers a dynamic and engaging shopping experience. This site is fully responsive, ensuring seamless functionality and visual appeal across all devices, including desktops, tablets, and smartphones. Key features include:Easy Backend Integration,Responsive Design,Component Reusability,Scalability and many more.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarikeshHarsh/React-E-commerce",
    previewUrl: "https://react-e-commerce-coral-phi.vercel.app/",
  },
  {
    id: 3,
    title: "Binary Tree Visualizer",
    description: "The Binary Tree Visualizer is  web application designed to help users understand the structure and operations of binary trees through interactive visualization. Built using modern web technologies, this tool aims to provide an intuitive and engaging learning experience for students and enthusiasts of computer science.",
    image: "/images/projects/3.png",
    tag: ["All", "DSA-Based"],
    gitUrl: "https://github.com/HarikeshHarsh/BinaryTreet-Visualizer",
    previewUrl: "https://binary-treet-visualizer-git-main-harikeshharshs-projects.vercel.app/",
  },
  {
    id: 4,
    title: "dijkitra-shortest-path",
    description: "dijkitra-shortest-path is to visualize  a classic algorithm for finding the shortest paths between nodes in a graph.This method considers various financial instruments as nodes and possible transitions between them as edges, with weights representing the cost or risk associated with each transition.",
    image: "/images/projects/4.png",
    tag: ["All", "DSA-Based"],
    gitUrl: "https://github.com/HarikeshHarsh/Dijkitra_Shortest_path",
    previewUrl: "https://dijkitra-shortest-path.vercel.app/",
  },
  {
    id: 5,
    title: "dashboard",
    description: "The Shoppy Dashboard is a dynamic and responsive web application designed to provide an intuitive and comprehensive interface for managing e-commerce activities. Built with React, this dashboard leverages modern web technologies to deliver a seamless user experience, facilitating efficient management of products, orders, customers, and analytics.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarikeshHarsh/Dashboard",
    previewUrl: "https://dashboard-azure-beta.vercel.app/",
  },
  {
    id: 6,
    title: "Dice Game",
    description: "The Dice Guessing Game is a fun and interactive game developed using React. The main objective is to guess the number rolled on a dice. Players will earn points based on their correct guesses and lose points for incorrect guesses. This project is designed to help you improve your skills in React by incorporating state management, event handling, and conditional rendering.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/HarikeshHarsh/DIceGame",
    previewUrl: "https://glowing-caramel-6b5d80.netlify.app/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="DSA-Based"
          isSelected={tag === "DSA-Based"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
