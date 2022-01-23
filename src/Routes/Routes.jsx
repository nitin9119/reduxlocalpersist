import { Link, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { LoginPage } from "./LoginPage";

export const RoutesPage = () => {
  return (
    <>
      <div>
        <Link to="/">Tasks</Link>
        <Link to="/login">Login</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
