import myProjects from "../../../public/myprojects";
import ProjectCard from "../ProjectCard";
import { Link } from "react-router-dom";
export default function Main() {
  let latestProjects = [];
  for (let i = 0; i < 3; i++) {
    latestProjects.push(myProjects[i]);
  }

  return (
    <>
      <main className=" flex flex-col items-center justify-center py-10 px-1 ">
        <h1 className="md:text-2xl lg:text-3xl font-bold text-[var(--title)] mb-8 ">
          Latest Projects
        </h1>
        <section className="flex gap-5 flex-wrap justify-center items-center ">
          {latestProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </section>

        <Link
          to={"/projects"}
          className="text-[var(--sub-title)] text-lg mt-15 border border-[var(--green)] rounded-lg p-2 hover:bg-[var(--green)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer">
          View All Projects
        </Link>
      </main>
    </>
  );
}
