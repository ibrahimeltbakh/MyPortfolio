import mySkills from "../../public/mySkills";

export default function Skills() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-10">
      <h1 className="text-3xl font-bold text-[var(--title)] mb-5">Skills</h1>

      {/* Frontend Web Development Section */}
      <ul className="flex flex-col gap-3 flex-wrap mb-4 text-[var(--sub-title)] justify-center items-center">
        {mySkills.map((skill, index) => (
          <li key={index}>
            <li className="text-[var(--title)] font-bold my-5 text-lg text-center">
              <h2>{skill.category}</h2>
            </li>

            <ul className="flex gap-5 flex-wrap justify-center items-center text-center">
              {skill.items.map((skill, index) => (
                <li
                  key={index}
                  className=" border border-[var(--green)] rounded-lg px-2 py-1">
                  {skill}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
