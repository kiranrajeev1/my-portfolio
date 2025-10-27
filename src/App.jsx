import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import { AuroraBackground } from "./components/ui/aurora-background.jsx";

function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      <Home />
    </>
  );
}

export default App;