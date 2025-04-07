import Hero from "./../components/2-Hero/Hero";
export default function About() {
  return (
    <section className="flex flex-col justify-between items-center gap-8 p-10">
      {/* Personal Information */}
      <Hero />
      <div className="border-b-2 border-[var(--border)] w-full " />
      {/* Education */}
      <section className="flex flex-col text-center items-center gap-2">
        <h1 className="md:text-2xl lg:text-3xl text-[var(--title)] font-bold mt-3">
          Education
        </h1>
        <p className="text-[var(--sub-title)]">
          <strong>
            Faculty of Computer and Artificial Intelligence, Benha University
          </strong>
        </p>
        <p className="text-[var(--sub-title)] ">
          BSc Scientific Computing Class 2018-2022
        </p>
        <p className="text-[var(--sub-title)]">GPA: Very Good</p>
        <p className="text-[var(--title)] md:text-md lg:text-xl  font-bold mt-3">
          Bachelor Thesis Project:
        </p>
        <ul className="flex flex-col justify-center items-center pl-5 text-[var(--sub-title)]">
          <li>Grade: A</li>
          <li>Title: Smart Home Controlled by Flutter App</li>
        </ul>
      </section>
      <div className="border-b-2 border-[var(--border)] w-full " />
      {/* internships */}
      <section className="flex  flex-col text-center items-center gap-2">
        <h1 className="md:text-2xl lg:text-3xl text-[var(--title)] font-bold mt-3">
          Internships
        </h1>

        <p className="text-[var(--sub-title)]">
          <strong>Information Technology Institute (ITI)</strong>
        </p>
        <p className="text-[var(--sub-title)]">
          4-Month Front-End Web Development Program, Intensive Code Camp (ICC)
          and Intensive Training Program (ITP), conducted by the Information
          Technology Institute (ITI), under the Ministry of Communication and
          Information Technology (MCIT), Mansoura Branch.
        </p>
        <p className="text-[var(--sub-title)]">Nov 2024 - Present</p>
      </section>
    </section>
  );
}
