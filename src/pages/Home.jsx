import Hero from "./Hero";
import About from "./About";

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
    </main>
  );
};

export default Home;