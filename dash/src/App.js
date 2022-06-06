import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Doc from "./Pages/Doc";

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/dokumenti" exact element={<Doc />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
