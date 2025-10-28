import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { AuroraBackground } from "./components/ui/aurora-background.jsx";
import Footer from "./components/Footer.jsx";
import BackToTopButton from "./components/BackToTopButton.jsx";

function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <Home />
      <Footer />
      <BackToTopButton />
    </>
  );
}

export default App;