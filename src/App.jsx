// src/App.jsx

import Home from "./pages/Home";
import ThemeToggle from "./components/ThemeToggle"; // Import the new component

function App() {
  return (
    <>
      <div className="absolute top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      <Home />
    </>
  );
}

export default App;