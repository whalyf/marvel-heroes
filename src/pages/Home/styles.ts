import styled, { keyframes } from "styled-components";
import { AiOutlineLoading } from "react-icons/ai";

export const WrapperHome = styled.div``;

export const HeroesGallery = styled.div`
  display: flex;
  padding: 50px;
  margin: auto;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  background-color: #808080;
  height: 100vh;
`;
const spinAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const SpinnerIcon = styled(AiOutlineLoading)`
  animation: ${spinAnimation} 1s linear infinite;
`;
