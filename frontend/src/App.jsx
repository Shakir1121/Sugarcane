import "./index.css";
import Navbar from "./Component/Navbar";
import Predict_Disease from "./Pages/Predict_Disease.jsx";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="Predict_Disease" element={<Predict_Disease />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
