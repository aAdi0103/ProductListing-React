import Home from "./components/Home";
import Details from "./components/Details";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="w-full h-screen px-2 flex gap-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
