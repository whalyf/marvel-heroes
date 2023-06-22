import { FaHome, FaStar } from "react-icons/fa";
import { RedirectLink, WrapperHeader } from "./styles";
import {  useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <WrapperHeader>
      <RedirectLink onClick={() => navigate("/")}>
        <FaHome />
      </RedirectLink>

      <span>MARVEL</span>

      <RedirectLink onClick={() => navigate("/favorites")}>
        <FaStar />
      </RedirectLink>
    </WrapperHeader>
  );
};
