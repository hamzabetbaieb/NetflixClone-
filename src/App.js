import "./App.scss";
import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/video/:id" element={<Video />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
