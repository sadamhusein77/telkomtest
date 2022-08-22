import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className="tw-container tw-mx-auto">
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;
