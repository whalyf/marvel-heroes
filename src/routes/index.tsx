import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { HeroDetailed } from "../pages/HeroDetailed";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hero/:id" element={<HeroDetailed />} />
    </Routes>
  );
};
