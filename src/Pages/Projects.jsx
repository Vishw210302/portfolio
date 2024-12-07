import React, { useState } from "react";
import {
  FaExternalLinkAlt,
  FaFigma,
  FaGithub,
  FaImages,
  FaNode,
  FaReact,
  FaStripe,
} from "react-icons/fa";
import { RiJavascriptLine } from "react-icons/ri";
import { SiFirebase, SiRedux, SiTailwindcss } from "react-icons/si";
import AMSImage from "../Assets/images/AMS.png";
import EMSImage from "../Assets/images/EMS.png";
import ajaymodiTravels from "../Assets/images/ajaymodi.png";
import panchalSamaj from "../Assets/images/panchal_samaj.png";
import HRMSImage from "../Assets/images/HRMS.png";

const projectsData = [
  {
    id: 1,
    title: "Ajay Modi Tours and Travels",
    description:
      "A website which is develop by ReactJS and back-end as a NodeJS with mongoDB and using dynamic data and also with CRM (Admin Panel).Design is totally done by HTML5 , CSS3 , Tailwind and for EJS file Bootstrap.",
    image: ajaymodiTravels,
    technologies: [
      "JavaScript",
      "ReactJS",
      "NodeJS",
      "Redux",
      "Mongo DB",
      "Express",
      "TailwindCSS",
    ],
    projectLink: "https://ajaymodi.com/",
  },
  {
    id: 2,
    title: "EMS (Employee Management System)",
    description:
      "This website totally made in ReactJS and NodeJS. Design in HTML5 and tailwind",
    image: EMSImage,
    technologies: ["JavaScript", "ReactJS", "Redux", "Mongo DB", "TailwindCSS"],
    projectLink: "https://backoffice.codecrewinfotech.com",
  },
  {
    id: 3,
    title: "Panchal Samaj APP",
    description:
      "Panchal Samaj Application is completed in just 62 days in React Native and NodeJS with Admin Panel and totally data is dynamically. We launch this application on Vishwakarma jayanti.",
    image: panchalSamaj,
    technologies: [
      "JavaScript",
      "React Native",
      "Redux",
      "Firebase",
      "Mongo DB",
    ],
    projectLink: "https://apps.apple.com/sa/app/panchal-samaj-app/id6484595380",
  },
  {
    id: 4,
    title: "AMS (Activity Management Solutions)",
    description:
      "Activity Management System (AMS) is a well-structured project that emphasizes effective communication through regular meetings. The design was facilitated with the aid of Figma, ensuring a clear and collaborative development process. This project was fully developed using React Native for the front end and Node.js for the back end.",
    image: AMSImage,
    technologies: ["JavaScript", "React Native", "Mongo DB", "TailwindCSS"],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.innovate10x.oms.router&pcampaignid=web_share",
  },
  {
    id: 5,
    title: "HRMS (Human Resource Management)",
    description:
      "This project was successfully completed in collaboration with my backend partner during my tenure as a trainee. My contributions focused on developing the frontend using React.js, while the backend was built with Node.js. This experience allowed me to enhance my skills in full-stack development and effectively work as part of a team.",
    image: HRMSImage,
    technologies: ["JavaScript", "ReactJS", "Mongo DB", "Redux", "Bootstrap"],
  },
];

const ProjectCard = ({ project }) => (
  <div className="max-w-md mx-auto overflow-hidden backdrop-filter backdrop-blur-lg text-center text-white hover:shadow-lg  shadow-md animate-fade-in rounded-lg bg-[rgba(0,0,0,0.8)] border-slate-700 border">
    <img
      className="w-full h-52 object-cover rounded-t-lg"
      src={project.image}
      alt={project.title}
    />
    <div className="p-4">
      <h2 className="font-bold text-xl">{project.title}</h2>
      <div className="flex justify-center mt-4 space-x-4">
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
          </a>
        )}
        {project.projectLink && (
          <a
            href={project.projectLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
          </a>
        )}
        {project.figma && (
          <a href={project.figma} target="_blank" rel="noopener noreferrer">
            <FaFigma className="h-6 w-6 text-gray-400 hover:text-gray-500 transition-all duration-200 hover:scale-110" />
          </a>
        )}
      </div>
      <hr className="w-full my-6 border-gray-300" />
      <p className="text-sm">{project.description}</p>
      <div className="mt-4 space-x-2 flex justify-center">
        {project.technologies.map((tech, index) => (
          <div key={index} className="relative inline-block" title={tech}>
            {tech === "JavaScript" && <RiJavascriptLine />}
            {tech === "ReactJS" && <FaReact />}
            {tech === "React Native" && <FaReact />}
            {tech === "TailwindCSS" && <SiTailwindcss />}
            {tech === "Stripe" && <FaStripe />}
            {tech === "Firebase" && <SiFirebase />}
            {tech === "Redux" && <SiRedux />}
            {tech === "NodeJS" && <FaNode />}
          </div>
        ))}
      </div>
    </div>
  </div>
);

const ProjectList = ({ projects }) => (
  <div className="pt-5 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 text-xl">
    {projects.map((project) => (
      <ProjectCard key={project.id} project={project} />
    ))}
  </div>
);

const ProjectFilter = ({ technologies, onFilterChange }) => (
  <div className="flex flex-wrap justify-center gap-2 mt-8 p-4">
    {technologies.map((tech) => (
      <button
        key={tech}
        onClick={() => onFilterChange(tech)}
        className="text-lg text-white transition-all duration-200 ease-in-out hover:scale-110 bg-[rgba(42,42,42,0.16)] px-4 py-2 m-1 rounded-xl focus:bg-[rgba(139,139,139,0.21)] hover:shadow-2xl"
      >
        {tech}
      </button>
    ))}
  </div>
);

const Projects = () => {
  const [filteredProjects, setFilteredProjects] = useState(projectsData);
  const allTechnologies = Array.from(
    new Set(projectsData.flatMap((project) => project.technologies))
  );
  const [technologies] = useState(["All", ...allTechnologies]);

  const handleFilterChange = (tech) => {
    setFilteredProjects(
      tech === "All"
        ? projectsData
        : projectsData.filter((project) => project.technologies.includes(tech))
    );
  };

  return (
    <div
      id="project"
      className="px-4 py-16 md:px-8 lg:px-24 lg:py-20 relative z-10 bg-[rgba(44,44,44,0.21)] border-slate-800 backdrop-blur-md border-x"
    >
      <div className="w-full mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <h2 className="max-w-lg mb-6 font-sans text-5xl font-bold text-white sm:text-4xl">
            <span className="relative inline-block text-3xl">
              <FaImages />
            </span>{" "}
            Projects
          </h2>
        </div>
        <div className="container mx-auto">
          <ProjectFilter
            technologies={technologies}
            onFilterChange={handleFilterChange}
          />
          <ProjectList projects={filteredProjects} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
