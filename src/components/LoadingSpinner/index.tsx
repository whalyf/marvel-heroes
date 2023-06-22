import { AiOutlineLoading } from "react-icons/ai";
import { keyframes, styled } from "styled-components";

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
