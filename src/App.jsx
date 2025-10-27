import Home from "./pages/Home";
import Navbar from "./components/Navbar";
// No longer need to import ThemeToggle

function App() {
  return (
    <>
      <Navbar />
      {/* The old ThemeToggle div is now removed */}
      <Home />
    </>
  );
}

export default App;