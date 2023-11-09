import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import HomePage from "./components/HomePage";
import VideoPage from "./components/VideoPage";
import NavBar from "./components/NavBar";
import LoginPage from "./components/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videos/:videoId" element={<VideoPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
