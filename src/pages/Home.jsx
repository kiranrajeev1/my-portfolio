import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Skills from "./Skills";

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
      <Services />  
        <Skills />
    </main>
  );
};

export default Home;