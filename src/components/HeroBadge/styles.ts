import styled, { css } from "styled-components";

interface IWrapperHeroBadgeProps {
  type: "comics" | "series";
}

const comics = css`
  background-color: #e23636;
`;

const series = css`
  background-color: #f78f3f;
`;

const variants = { comics, series };

export const WrapperHeroBadge = styled.div<IWrapperHeroBadgeProps>`
  border-radius: 10px;
  padding: 5px;
  cursor: default;
  font-weight: bold;
  font-size: 10px;
  height: 25px;
  max-width: 180px;

  > span {
    display: block;
    pointer-events: none;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  ${(props) => variants[props.type]}
`;
