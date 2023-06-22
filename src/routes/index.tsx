import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { HeroDetailed } from "../pages/HeroDetailed";
import { Favorites } from "../pages/Favorites";

export const RouteApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/hero/:id" element={<HeroDetailed />} />

      <Route path="/favorites" element={<Favorites />} />
    </Routes>
  );
};
