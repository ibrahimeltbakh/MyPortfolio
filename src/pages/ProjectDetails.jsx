import { useParams } from "react-router-dom";
import myProjects from "../../public/myprojects";
export default function ProjectDetails() {
  const id = useParams().projectId;
  const ptroject = myProjects.find((project) => project.id === parseInt(id));
  if (!ptroject) {
    return <div>Project not found</div>;
  }
  return (
    <sectio className="flex flex-col justify-center items-center py-10">
      <h1 className="md:text-2xl lg:text-3xl font-bold text-[var(--title)] mb-8 ">
        Project Details for {ptroject.projectName}
      </h1>

      <section className="flex flex-col justify-center items-center bg-[var(--color-bg)]  p-4 rounded-lg shadow-sm shadow-green-800 w-full md:w-3/4   ">
        <img src={ptroject.imgPath} alt={ptroject.projectName} />
        <h2 className="text-2xl font-bold mt-5 text-[var(--title)]">
          {ptroject.projectName}
        </h2>
        <p className="text-lg mb-10 text-[var(--sub-title)] text-center ">
          {ptroject.description}
        </p>
        <h3 className="text-lg font-bold mb-4 text-[var(--title)]">
          Technologies Used
        </h3>
        <ul className="flex gap-3 flex-wrap mb-4 text-[var(--sub-title)] justify-center items-center">
          {ptroject.technologies.map((tech, index) => (
            <li
              key={index}
              className="border border-[var(--green)] rounded-lg px-2 py-1">
              {tech}
            </li>
          ))}
        </ul>
        <h3 className="text-lg font-bold mb-4 text-[var(--title)]">Links</h3>
        <ul className="flex gap-3 flex-wrap mb-4 text-[var(--sub-title)] justify-center items-center">
          <li className="border-b border-[var(--green)] rounded-lg px-2 py-1">
            <a
              href={ptroject.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--green)]">
              <i className="fa-brands fa-github github "></i> GitHub
            </a>
          </li>
          <li className="border-b border-[var(--green)] rounded-lg px-2 py-1">
            <a
              href={ptroject.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[var(--green)]">
              <i className="fa-solid fa-link link "></i> Live Demo
            </a>
          </li>
        </ul>
      </section>
    </sectio>
  );
}
