export default function Experience() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 p-10">
      <h1 className="text-3xl font-bold text-[var(--title)] mb-5">
        Experience
      </h1>

      {/* Instructor Experience */}
      <section className="flex flex-col justify-center items-center text-center gap-4 mb-10 max-w-3xl">
        <h1 className="text-xl text-[var(--title)] font-bold mt-3">
          Instructor of Programming for Children and Adults (Part-Time) -
          MetaTech
        </h1>
        <p className="text-[var(--sub-title)]">
          As an instructor, I am passionate about teaching programming,
          especially web development. I bring practical, hands-on experience to
          my students, making complex concepts easier to understand. I focus on
          real-world applications, and I believe in a student-centered approach
          that encourages active participation and problem-solving. My
          experience ranges from teaching both children and adults to completing
          various freelance projects. I aim to create an engaging, interactive
          learning environment that fosters growth and curiosity.
        </p>
        <p className="text-[var(--sub-title)]">10/2024 - present (Part-Time)</p>
      </section>
      <div className="border-b-2 border-[var(--border)] w-full " />
      {/* Freelancing Experience */}
      <section className="flex flex-col justify-center items-center text-center gap-4 max-w-3xl">
        <h1 className="md:text-xl lg:text-2xl text-[var(--title)] font-bold mt-5">
          Freelancing
        </h1>
        <p>
          Developed numerous projects for various clients, focusing on
          responsive design and user experience.
        </p>
        <ul className="flex flex-col gap-5 text-[var(--sub-title)]">
          <li>
            <h2 className="text-[var(--title)] ">ELSHERIF:</h2>
            <p>
              Website for an Export agricultural products company using React
              and Material UI, crafting an interactive layout to display
              numerous product types.
            </p>
          </li>
          <li>
            <h2 className="text-[var(--title)] ">REALZMAX:</h2>

            <p>
              Real Estate website with responsive design built using Odoo&apos;s
              drag and drop builder for easy navigation.
            </p>
          </li>
        </ul>
      </section>
    </section>
  );
}
