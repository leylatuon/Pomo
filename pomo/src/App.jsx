import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/navbar";
import Home from "./pages/home";
import Login from "./pages/login";
import Sessions from "./pages/sessions";
import SignUp from "./pages/signup";
import StudyPage from "./pages/study";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/sessions" element={<Sessions />}></Route>
        <Route path="/study" element={<StudyPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// <Route path="/sessions" element={<Sessions />}></Route>
// <Route path="/sessions" element={<Sessions />}></Route>
