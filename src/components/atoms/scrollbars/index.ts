import { css } from "styled-components";

export const scrollbarThin = css`
  &::-webkit-scrollbar-track {
    background: #dddddd;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.3);
  }

  scrollbar-color: rgba(0, 0, 0, 0.25) rgba(0, 0, 0, 0.15);
  scrollbar-width: thin;
  -webkit-overflow-scrolling: touch;
`;
