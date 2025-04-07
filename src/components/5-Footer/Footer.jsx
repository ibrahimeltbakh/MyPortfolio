import { Link } from "react-router-dom";
export default function Footer() {
  const pages = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Projects", link: "/projects" },
    { name: "Experience", link: "/experience" },
    { name: "Skills", link: "/skills" },
    { name: "Contact", link: "/contact" },
  ];

  return (
    <footer className="flex flex-col  md:flex-row mt-6 justify-between items-center  gap-5 p-10 border-t-2 border-[var(--border)]">
      <section>
        <ul className="flex flex-wrap justify-center items-center gap-3">
          {pages.map((page) => (
            <li key={page.name}>
              <Link to={page.link} className="hover:text-[var(--green)]">
                {page.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex flex-col items-center justify-center text-center">
        <p className="text-[var(--sub-title)] text-sm md:text-md lg:text-lg">
          &copy; 2024 Ibrahim Eltbakh. All rights reserved.
        </p>
      </section>
    </footer>
  );
}
