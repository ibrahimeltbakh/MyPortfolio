import myProjects from "../../public/myprojects";
import ProjectCard from "../components/ProjectCard";
import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";

export default function Projects() {
  const [selectedCatergory, SetSelectedCatergory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(myProjects);
  const buttons = [
    { name: "All", id: 1 },
    { name: "ReactJS", id: 2 },
    { name: "Next.js", id: 4 },
    { name: "Odoo", id: 5 },
    { name: "JavaScript", id: 6 },
    { name: "HTML & CSS", id: 7 },
  ];

  useEffect(() => {
    if (selectedCatergory === "All") {
      setFilteredProjects(myProjects);
      return;
    }
    setFilteredProjects(
      myProjects.filter((project) => project.category === selectedCatergory)
    );
  }, [selectedCatergory]);
  return (
    <section className=" flex flex-col items-center justify-center py-10 px-1 ">
      <h1 className="md:text-2xl lg:text-3xl font-bold text-[var(--title)] mb-8 ">
        Projects
      </h1>
      <section className="flex gap-5 flex-wrap justify-center items-center mb-10">
        {buttons.map((button) => (
          <button
            key={button.id}
            onClick={() => SetSelectedCatergory(button.name)}
            className={`${
              selectedCatergory === button.name
                ? "bg-[var(--green)] text-white"
                : "text-[var(--sub-title)]"
            } border w-28 border-[var(--green)] rounded-lg p-2 hover:bg-[var(--green)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer`}>
            {button.name}
          </button>
        ))}
      </section>

      <AnimatePresence>
        <section className="flex gap-5 flex-wrap justify-center items-center">
          {filteredProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </section>
      </AnimatePresence>
    </section>
  );
}
