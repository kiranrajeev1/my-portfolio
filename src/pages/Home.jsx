import Hero from "./Hero";
import About from "./About";
import Skills from "./Skills";
import Experience from "./Experience";
import Projects from "./Projects";
import Contact from "./Contact";

const Home = () => {
  return (
    <main>
      {/* Add id="hero" */}
      <section id="hero" className="min-h-screen flex items-center justify-center">
        <Hero />
      </section>

      {/* Add id="about" */}
      <section id="about" className="py-24"> {/* Added padding for scroll spacing */}
        <About />
      </section>
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      
    </main>
  );
};

export default Home;