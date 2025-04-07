import { Link } from "react-router-dom";
import { motion } from "framer-motion";

/* eslint-disable react/prop-types */
function ProjectCard({ project }) {
  const { projectName, shortDescription, imgPath, id, githubLink, liveLink } =
    project;
  return (
    <motion.section
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      layout
      transition={{ type: "spring", damping: 8, stiffness: 50 }}
      className="bg-[var(--color-bg)] p-4 rounded-lg shadow-sm shadow-green-800 sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="flex flex-col items-center justify-center">
        <section>
          <img src={imgPath} alt={projectName} />
        </section>
        <section className="flex flex-col items-center justify-center mb-4 ">
          <h2 className="text-2xl font-bold mb-4 text-[var(--title)] text-center">
            {projectName}
          </h2>
          <p className="text-lg mb-4 text-[var(--sub-title)] text-center min-h-[200px]">
            {shortDescription}
          </p>
        </section>
        <section className="flex items-center justify-between mb-4 w-full">
          <section className="flex items-center">
            <a href={liveLink} className="mx-2" target="_blank">
              <i className="fa-solid fa-link link text-[var(--sub-title)] hover:text-[var(--green)]"></i>
            </a>
            <a href={githubLink} className="mx-2" target="_blank">
              <i className="fa-brands fa-github github text-[var(--sub-title)] hover:text-[var(--green)]"></i>
            </a>
          </section>
          <section className="flex items-center gap-2">
            <Link
              to={`/projects/${id}`}
              className="text-[var(--sub-title)] hover:text-[var(--green)]">
              Details <i className="fa-solid fa-arrow-right arrow "></i>
            </Link>
          </section>
        </section>
      </div>
    </motion.section>
  );
}

export default ProjectCard;
