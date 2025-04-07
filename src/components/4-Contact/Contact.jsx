import { useForm, ValidationError } from "@formspree/react";
import Lottie from "lottie-react";
import done from "../../../public/animations/done.json";
import contactUs from "../../../public/animations/contact us.json";

export default function Contact() {
  const [state, handleSubmit] = useForm("xrbgzynr");
  return (
    <section className="flex flex-col  items-center gap-5 p-10">
      <section className="flex flex-col items-center justify-center">
        <h1 className="md:text-2xl lg:text-3xl text-[var(--title)] font-bold  mt-3">
          Contact Me
        </h1>
        <p className="text-center text-[var(--sub-title)] mt-2 max-w-lg">
          Contact me for more information
        </p>
      </section>
      <section className="flex flex-wrap justify-center items-center w-full  gap-5">
        <section className=" w-full md:w-[47%] flex justify-center items-center  ">
          <Lottie animationData={contactUs} />
        </section>
        <section className=" w-full md:w-[49%]  px-2 ">
          <form
            className=" flex flex-col gap-5 justify-center items-center  "
            onSubmit={handleSubmit}>
            <input
              required
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="text-[var(--sub-title)] border rounded-lg border-[var(--green)] w-full p-2 mt-5 placeholder-[var(--sub-title)] focus:outline-none "
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <textarea
              required
              id="message"
              name="message"
              placeholder="Message"
              rows="8"
              className="text-[var(--sub-title)] border rounded-lg border-[var(--green)] w-full p-2  resize-none placeholder-[var(--sub-title)] focus:outline-none"
            />
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />

            <input
              type="submit"
              disabled={state.submitting}
              value={state.submitting ? "Submitting..." : "Submit"}
              className="text-[var(--sub-title)] border rounded-lg border-[var(--green)] p-2 mb-5 w-1/2 hover:bg-[var(--green)] hover:text-white transition-all duration-300 ease-in-out cursor-pointer"
            />

            {state.succeeded && (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "18px",
                  marginTop: "1.7rem",
                  color: "var(--sub-title)",
                }}>
                <Lottie
                  style={{
                    height: "35px",
                    marginRight: "5px",
                  }}
                  loop={false}
                  animationData={done}
                />
                Thank You, Your Message has been sent successfuly 👌
              </p>
            )}
          </form>
        </section>
      </section>
    </section>
  );
}
