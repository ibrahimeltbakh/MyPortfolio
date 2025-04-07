import Header from "./components/1-Header/Header";
import Footer from "./components/5-Footer/Footer";
import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    });
  }, []);
  const [showScrollBTN, setShowScrollBTN] = useState("false");

  return (
    <>
      <div id="up" className="container">
        <Header />
        <Outlet />
        <Footer />
        <a
          className="scroll"
          href="#up"
          style={{ opacity: showScrollBTN ? "1" : "0", transition: "0.5s" }}>
          <i className="fa-regular fa-circle-up scroll-To-TOP"></i>
        </a>
      </div>
    </>
  );
}
export default App;
