import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { AuroraBackground } from "./components/ui/aurora-background";
// No longer need to import ThemeToggle

function App() {
  return (
    <>
      <AuroraBackground />
      <Navbar />
      {/* The old ThemeToggle div is now removed */}
      <Home />
    </>
  );
}

export default App;