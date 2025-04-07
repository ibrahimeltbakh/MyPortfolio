import Contact from "../components/4-Contact/Contact";
import { socialMedia, otherContactInfo } from "../../public/contactInfo";

export default function ContactMe() {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-10">
      {/* Contact Form */}
      <Contact />
      <div className="w-full border-b-2 border-[var(--border)]"></div>

      {/* Social Media Section */}
      <section className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold text-[var(--title)] mb-5">
          Social Media
        </h2>
        <ul className="flex gap-5">
          {socialMedia.map((media) => (
            <li key={media.name}>
              <a
                href={media.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sub-title)] hover:text-[var(--green)] transition duration-300">
                <i className={`${media.icon} text-2xl`}></i>
              </a>
            </li>
          ))}
        </ul>
      </section>
      <div className="w-full border-b-2 border-[var(--border)]"></div>

      {/* Other Contact Information */}
      <section className="flex flex-col items-center gap-5">
        <h2 className="text-2xl font-bold text-[var(--title)]">
          Other Contact Info
        </h2>
        {otherContactInfo.map((info) => (
          <p key={info.type} className="text-[var(--sub-title)]">
            <i className={`${info.icon} text-2xl mr-2`}></i>
            {info.link ? (
              <a
                href={info.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--sub-title)] hover:text-[var(--green)] transition duration-300">
                {info.value}
              </a>
            ) : (
              info.value
            )}
          </p>
        ))}
      </section>
    </section>
  );
}
