import Hero from "../components/2-Hero/Hero";
import Main from "../components/3-Main/Main";
import Contact from "../components/4-Contact/Contact";
function Home() {
  return (
    <>
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
    </>
  );
}
export default Home;
