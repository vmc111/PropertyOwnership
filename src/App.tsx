import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./";
import LoginPage from "./ui/controllers/LoginPageController.tsx/LoginPage";
import HomePage from "./ui/controllers/Home/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
