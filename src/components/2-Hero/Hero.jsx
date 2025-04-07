import { socialMedia } from "../../../public/contactInfo";
export default function Hero() {
  return (
    <section className="flex flex-col justify-between items-center gap-5 p-10">
      <section className="flex flex-col items-center justify-center">
        <img
          src="./me-modified.png"
          alt="me"
          className="w-40 h-40 border-1 border-orange-600 rounded-full"
        />
        <h1 className="md:text-2xl lg:text-3xl text-[var(--title)] font-bold mt-3">
          Ibrahim Samir Eltbakh
        </h1>
        <p className="text-lg text-[var(--sub-title)] mt-2">
          Frontend Developer
        </p>
        <p className="text-center text-[var(--sub-title)] mt-2 max-w-lg">
          I&apos;m a Frontend Developer with experience in building responsive
          and dynamic web applications using React, Next.js, and modern tools
          like Tailwind, MUI, and TypeScript. I love turning ideas into
          user-friendly interfaces and continuously improving my skills through
          real-world projects and freelance work. In addition to web
          development, I also have experience in embedded systems, which has
          strengthened my problem-solving skills and given me a deeper
          understanding of how hardware and software interact.
        </p>
        {/* Social Links */}
        <ul className="flex gap-2 mt-10">
          {socialMedia.map((link, index) => (
            <li key={index}>
              <a href={link.link} target="_blank" rel="noopener noreferrer">
                <i
                  className={`${link.icon} text-gray-500 hover:text-[var(--green)] transition duration-300`}></i>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
}
