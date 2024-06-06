import "./App.scss";
import Test from "./Test";
import Contact from "./components/Contact/Contact";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Parallax from "./components/Parallax/Parallax";
import Services from "./components/Services/Services";
import Portfolio from "./components/portfolio/Portfolio";
function App() {
  return (
    <>
      <div>
        <section id="Homepage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">
          <Parallax type="services" />
        </section>
        <section>
          <Services />
        </section>
        <section>
          {" "}
          <Parallax />
        </section>
        <section id="Portfolio">
          <Portfolio type="portfolio" />
        </section>
        <section id="Contact">
          <Contact />
        </section>
        {/* <Test /> */}
      </div>
    </>
  );
}

export default App;
